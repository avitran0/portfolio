import { inflate } from "./pako.js";
import init, { get_litematica_blocks, get_schematica_blocks } from "../wasm/schematics.js";

onmessage = async function (e) {
    try {
        const { arrayBuffer } = e.data;
        const startTime = performance.now();
        await init(); // initializes the wasm module
        const items = loadSchematic(arrayBuffer);
        const blockCount = Object.values(items).reduce((a, b) => a + b, 0);
        // write time and block throuput per second
        const endTime = performance.now();
        const time = endTime - startTime;
        const blockThroughput = (blockCount / time) * 1000;
        console.log(
            "processed " + blockCount + " blocks in " + time + "ms (" + blockThroughput.toLocaleString() + " blocks/s)"
        );
        // set metadata object in items
        items["__metadata"] = {
            time: time,
            blockCount: blockCount,
            blockThroughput: blockThroughput,
        };
        this.postMessage(items);
    } catch (e) {
        this.postMessage({ error: e });
    }
};

/**
 * @param {ArrayBuffer} data
 * @returns {Object<string, number>}
 */
function loadSchematic(data) {
    if (hasGzipHeader(data)) {
        data = inflate(data).buffer;
    }

    const view = new DataView(data);

    const nbt = parse(view, data);

    if (nbt["Regions"]) {
        return getLitematicaBlocks(nbt);
    }
    if (nbt["Schematic"]) {
        return getSchematicaBlocks(nbt);
    }
    if (nbt["BlockData"]) {
        return getWorldEditSchemBlocks(nbt);
    }
    if (nbt["Blocks"]) {
        return getOldSchematicBlocks(nbt);
    }
    if (nbt["palette"]) {
        return getStructureBlocks(nbt);
    }

    console.error("Unknown schematic format", nbt);
    return { error: "Unknown schematic format" };
}

/**
 * @param {*} nbt structure nbt
 * @returns {Object<string, number>}
 */
function getStructureBlocks(nbt) {
    const blocks = {};

    const blockStates = {};
    for (const [key, value] of Object.entries(nbt["palette"])) {
        blockStates[key] = value["Name"].split(":").pop();
    }

    for (const block of nbt["blocks"]) {
        const id = block["state"];
        blocks[blockStates[id]] = (blocks[blockStates[id]] || 0) + 1;
    }

    return blocks;
}

/**
 * @param {*} nbt litematica nbt parsed to json
 * @returns {Object<string, number>}
 */
function getLitematicaBlocks(nbt) {
    const blocks = {};

    for (const [name, region] of Object.entries(nbt["Regions"])) {
        const blockStates = {};
        for (const [key, value] of Object.entries(region["BlockStatePalette"])) {
            blockStates[key] = value["Name"].split(":").pop();
        }
        const length = Object.keys(blockStates).length;
        // minimum of 2 bits per block
        const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(length)));

        /** @type {BigUint64Array} */
        const blockArray = region["BlockStates"];

        //const numBlocks = Math.abs(region["Size"]["x"] * region["Size"]["y"] * region["Size"]["z"]);

        // split block array at roughlt 10 million ints
        // blockChunkSize should be the nearest number that is a multiple of bitsPerBlock\
        const blockChunkSize = Math.floor(10_000_000 / bitsPerBlock) * bitsPerBlock;
        const subArrays = [];
        for (let i = 0; i < blockArray.length; i += blockChunkSize) {
            subArrays.push(blockArray.slice(i, i + blockChunkSize));
        }
        for (const subArray of subArrays) {
            const subArrayBlockCount = Math.floor((subArray.length * 64) / bitsPerBlock);
            const blocksTemp = get_litematica_blocks(subArray, bitsPerBlock, subArrayBlockCount);
            for (const [key, value] of blocksTemp.entries()) {
                // account for multiples of the same block having a different key
                // jesus christ i thought my rust code was wrong but it always worked perfectly, and this here fucked it up
                blocks[blockStates[key]] = (blocks[blockStates[key]] || 0) + value;
            }
        }
    }

    return blocks;
}

/**
 * @param {*} nbt schematica nbt parsed to json
 * @returns {Object<string, number>}
 */
function getSchematicaBlocks(nbt) {
    nbt = nbt["Schematic"];
    const blocks = {};

    const blockPalette = {};
    // entries are in format "minecraft:stone[type=...]": id
    // convert to id: "stone"
    for (const [name, id] of Object.entries(nbt["Blocks"]["Palette"])) {
        blockPalette[id] = name.split(":")[1].split("[")[0];
    }

    const numBlocks = nbt["Width"] * nbt["Length"] * nbt["Height"];
    /** @type {Int8Array} */
    const blockArray = nbt["Blocks"]["Data"];

    const blocksTemp = get_schematica_blocks(blockArray, numBlocks);
    for (const [key, value] of blocksTemp.entries()) {
        blocks[blockPalette[key]] = (blocks[blockPalette[key]] || 0) + value;
    }

    return blocks;
}

function getWorldEditSchemBlocks(nbt) {
    const blocks = {};

    const blockPalette = {};
    // entries are in format "minecraft:stone[type=...]": id
    // convert to id: "stone"
    for (const [name, id] of Object.entries(nbt["Palette"])) {
        blockPalette[id] = name.split(":")[1].split("[")[0];
    }

    const numBlocks = nbt["Width"] * nbt["Length"] * nbt["Height"];
    /** @type {Int8Array} */
    const blockArray = nbt["BlockData"];

    const blocksTemp = get_schematica_blocks(blockArray, numBlocks);
    for (const [key, value] of blocksTemp.entries()) {
        blocks[blockPalette[key]] = (blocks[blockPalette[key]] || 0) + value;
    }

    return blocks;
}

function getOldSchematicBlocks(nbt) {
    const blocks = {};

    const numBlocks = nbt["Width"] * nbt["Length"] * nbt["Height"];
    const blocksTemp = {};
    for (let i = 0; i < numBlocks; i++) {
        const block = nbt["Blocks"][i];
        // convert to unsigned
        const id = block < 0 ? block + 256 : block;
        blocksTemp[id] = (blocksTemp[id] || 0) + 1;
    }

    for (const [id, count] of Object.entries(blocksTemp)) {
        blocks[BlockIDs[id]] = (blocks[BlockIDs[id]] || 0) + count;
    }

    return blocks;
}

//-----------NBT-------------//

function hasGzipHeader(data) {
    const header = new Uint8Array(data, 0, 2);
    return header[0] === 0x1f && header[1] === 0x8b;
}

const Tags = Object.freeze({
    End: 0,
    Byte: 1,
    Short: 2,
    Int: 3,
    Long: 4,
    Float: 5,
    Double: 6,
    ByteArray: 7,
    String: 8,
    List: 9,
    Compound: 10,
    IntArray: 11,
    LongArray: 12,
});

/**
 * @param {DataView} view
 * @param {ArrayBuffer} buffer
 */
function parse(view, buffer) {
    const parser = new Parser(view, buffer);
    const nbt = parser[Tags.Compound]();
    // discard first object nesting
    return nbt[Object.keys(nbt)[0]];
}

class Parser {
    offset = 0;
    /** @type {DataView} */
    view;
    /** @type {ArrayBuffer} */
    buffer;

    constructor(view, buffer) {
        this.view = view;
        this.buffer = buffer;
    }

    [Tags.Byte] = () => {
        const value = this.view.getInt8(this.offset);
        this.offset++;
        return value;
    };

    [Tags.Short] = () => {
        const value = this.view.getInt16(this.offset);
        this.offset += 2;
        return value;
    };

    [Tags.Int] = () => {
        const value = this.view.getInt32(this.offset);
        this.offset += 4;
        return value;
    };

    [Tags.Long] = () => {
        const value = this.view.getBigInt64(this.offset);
        this.offset += 8;
        return value;
    };

    [Tags.Float] = () => {
        const value = this.view.getFloat32(this.offset);
        this.offset += 4;
        return value;
    };

    [Tags.Double] = () => {
        const value = this.view.getFloat64(this.offset);
        this.offset += 8;
        return value;
    };

    [Tags.ByteArray] = () => {
        const length = this[Tags.Int]();
        const array = new Int8Array(this.buffer, this.offset, length);
        this.offset += length;
        return array;
    };

    [Tags.IntArray] = () => {
        const length = this[Tags.Int]();
        const array = new Int32Array(this.buffer.slice(this.offset, this.offset + length * 4));
        this.offset += length * 4;
        return array;
    };

    [Tags.LongArray] = () => {
        // bigint64array does not take odd offsets
        const length = this[Tags.Int]();
        const array = new BigInt64Array(this.buffer.slice(this.offset, this.offset + length * 8));
        this.offset += length * 8;
        return array;
    };

    [Tags.String] = () => {
        const length = this[Tags.Short]();
        const string = new TextDecoder().decode(new DataView(this.buffer, this.offset, length));
        this.offset += length;
        return string;
    };

    [Tags.List] = () => {
        const type = this[Tags.Byte]();
        const length = this[Tags.Int]();
        const list = [];
        for (let i = 0; i < length; i++) {
            list.push(this[type]());
        }
        return list;
    };

    [Tags.Compound] = () => {
        const compound = {};
        while (true) {
            if (this.offset >= this.view.byteLength) {
                break;
            }
            const type = this[Tags.Byte]();
            if (type === Tags.End) {
                break;
            }
            const name = this[Tags.String]();
            compound[name] = this[type]();
        }
        return compound;
    };
}

// block ids from https://minecraft.fandom.com/wiki/Java_Edition_data_values/Pre-flattening
/** @type {Object.<number, string>} */
const BlockIDs = Object.freeze({
    0: "air",
    1: "stone",
    2: "grass_block",
    3: "dirt",
    4: "cobblestone",
    5: "oak_planks",
    6: "oak_sapling",
    7: "bedrock",
    8: "flowing_water",
    9: "water",
    10: "flowing_lava",
    11: "lava",
    12: "sand",
    13: "gravel",
    14: "gold_ore",
    15: "iron_ore",
    16: "coal_ore",
    17: "oak_log",
    18: "oak_leaves",
    19: "sponge",
    20: "glass",
    21: "lapis_ore",
    22: "lapis_block",
    23: "dispenser",
    24: "sandstone",
    25: "note_block",
    26: "red_bed",
    27: "powered_rail",
    28: "detector_rail",
    29: "sticky_piston",
    30: "cobweb",
    31: "grass",
    32: "dead_bush",
    33: "piston",
    34: "piston_head",
    35: "white_wool",
    36: "moving_piston",
    37: "dandelion",
    38: "poppy",
    39: "brown_mushroom",
    40: "red_mushroom",
    41: "gold_block",
    42: "iron_block",
    43: "double_stone_slab",
    44: "stone_slab",
    45: "brick_block",
    46: "tnt",
    47: "bookshelf",
    48: "mossy_cobblestone",
    49: "obsidian",
    50: "torch",
    51: "fire",
    52: "monster_spawner",
    53: "oak_stairs",
    54: "chest",
    55: "redstone_wire",
    56: "diamond_ore",
    57: "diamond_block",
    58: "crafting_table",
    59: "wheat",
    60: "farmland",
    61: "furnace",
    62: "furnace",
    63: "oak_sign",
    64: "oak_door",
    65: "ladder",
    66: "rail",
    67: "cobblestone_stairs",
    68: "oak_sign",
    69: "lever",
    70: "stone_pressure_plate",
    71: "iron_door",
    72: "oak_pressure_plate",
    73: "redstone_ore",
    74: "redstone_ore",
    75: "redstone_torch",
    76: "redstone_torch",
    77: "stone_button",
    78: "snow",
    79: "ice",
    80: "snow_block",
    81: "cactus",
    82: "clay",
    83: "sugar_cane",
    84: "jukebox",
    85: "oak_fence",
    86: "pumpkin",
    87: "netherrack",
    88: "soul_sand",
    89: "glowstone",
    90: "nether_portal",
    91: "jack_o_lantern",
    92: "cake",
    93: "repeater",
    94: "repeater",
    95: "white_stained_glass",
    96: "oak_trapdoor",
    97: "infested_stone",
    98: "stone_bricks",
    99: "brown_mushroom_block",
    100: "red_mushroom_block",
    101: "iron_bars",
    102: "glass_pane",
    103: "melon",
    104: "pumpkin_stem",
    105: "melon_stem",
    106: "vine",
    107: "oak_fence_gate",
    108: "brick_stairs",
    109: "stone_brick_stairs",
    110: "mycelium",
    111: "lily_pad",
    112: "nether_bricks",
    113: "nether_brick_fence",
    114: "nether_brick_stairs",
    115: "nether_wart",
    116: "enchanting_table",
    117: "brewing_stand",
    118: "cauldron",
    119: "end_portal",
    120: "end_portal_frame",
    121: "end_stone",
    122: "dragon_egg",
    123: "redstone_lamp",
    124: "redstone_lamp",
    125: "oak_slab",
    126: "oak_slab",
    127: "cocoa",
    128: "sandstone_stairs",
    129: "emerald_ore",
    130: "ender_chest",
    131: "tripwire_hook",
    132: "tripwire",
    133: "emerald_block",
    134: "spruce_stairs",
    135: "birch_stairs",
    136: "jungle_stairs",
    137: "command_block",
    138: "beacon",
    139: "cobblestone_wall",
    140: "flower_pot",
    141: "carrots",
    142: "potatoes",
    143: "oak_button",
    144: "skeleton_skull",
    145: "anvil",
    146: "trapped_chest",
    147: "light_weighted_pressure_plate",
    148: "heavy_weighted_pressure_plate",
    149: "comparator",
    150: "comparator",
    151: "daylight_detector",
    152: "redstone_block",
    153: "nether_quartz_ore",
    154: "hopper",
    155: "quartz_block",
    156: "quartz_stairs",
    157: "activator_rail",
    158: "dropper",
    159: "white_terracotta",
    160: "white_stained_glass_pane",
    161: "acacia_leaves",
    162: "acacia_log",
    163: "acacia_stairs",
    164: "dark_oak_stairs",
    165: "slime_block",
    166: "barrier",
    167: "iron_trapdoor",
    168: "prismarine",
    169: "sea_lantern",
    170: "hay_block",
    171: "white_carpet",
    172: "terracotta",
    173: "coal_block",
    174: "packed_ice",
    175: "sunflower",
    176: "white_banner",
    177: "white_banner",
    178: "daylight_detector",
    179: "red_sandstone",
    180: "red_sandstone_stairs",
    181: "red_sandstone_slab",
    182: "red_sandstone_slab",
    183: "spruce_fence_gate",
    184: "birch_fence_gate",
    185: "jungle_fence_gate",
    186: "dark_oak_fence_gate",
    187: "acacia_fence_gate",
    188: "spruce_fence",
    189: "birch_fence",
    190: "jungle_fence",
    191: "dark_oak_fence",
    192: "acacia_fence",
    193: "spruce_door",
    194: "birch_door",
    195: "jungle_door",
    196: "acacia_door",
    197: "dark_oak_door",
    198: "end_rod",
    199: "chorus_plant",
    200: "chorus_flower",
    201: "purpur_block",
    202: "purpur_pillar",
    203: "purpur_stairs",
    204: "purpur_slab",
    205: "purpur_slab",
    206: "end_stone_bricks",
    207: "beetroots",
    208: "grass_path",
    209: "end_gateway",
    210: "repeating_command_block",
    211: "chain_command_block",
    212: "frosted_ice",
    213: "magma_block",
    214: "nether_wart_block",
    215: "red_nether_bricks",
    216: "bone_block",
    217: "structure_void",
    218: "observer",
    219: "white_shulker_box",
    220: "orange_shulker_box",
    221: "magenta_shulker_box",
    222: "light_blue_shulker_box",
    223: "yellow_shulker_box",
    224: "lime_shulker_box",
    225: "pink_shulker_box",
    226: "gray_shulker_box",
    227: "light_gray_shulker_box",
    228: "cyan_shulker_box",
    229: "purple_shulker_box",
    230: "blue_shulker_box",
    231: "brown_shulker_box",
    232: "green_shulker_box",
    233: "red_shulker_box",
    234: "black_shulker_box",
    235: "white_glazed_terracotta",
    236: "orange_glazed_terracotta",
    237: "magenta_glazed_terracotta",
    238: "light_blue_glazed_terracotta",
    239: "yellow_glazed_terracotta",
    240: "lime_glazed_terracotta",
    241: "pink_glazed_terracotta",
    242: "gray_glazed_terracotta",
    243: "light_gray_glazed_terracotta",
    244: "cyan_glazed_terracotta",
    245: "purple_glazed_terracotta",
    246: "blue_glazed_terracotta",
    247: "brown_glazed_terracotta",
    248: "green_glazed_terracotta",
    249: "red_glazed_terracotta",
    250: "black_glazed_terracotta",
    251: "white_concrete",
    252: "white_concrete_powder",
    255: "structure_block",
});
