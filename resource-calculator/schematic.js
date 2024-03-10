import { inflate } from "./pako.js";
import init, { get_litematica_blocks, get_schematica_blocks } from "./wasm/schematics.js";

init();

const FileExtensions = Object.freeze({
    litematica: getLitematicaBlocks,
    litematic: getLitematicaBlocks,
    schem: getSchematicaBlocks,
});

/**
 * @param {ArrayBuffer} data
 * @returns {Object<string, number>}
 */
export function loadSchematic(data, fileType) {
    if (hasGzipHeader(data)) {
        data = inflate(data).buffer;
    }

    const view = new DataView(data);

    const nbt = parse(view, data);

    const blocks = FileExtensions[fileType](nbt);

    return blocks;
}

/**
 *
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

        const numBlocks = Math.abs(region["Size"]["x"] * region["Size"]["y"] * region["Size"]["z"]);

        const blocksTemp = get_litematica_blocks(blockArray, bitsPerBlock, numBlocks);
        for (const [key, value] of blocksTemp.entries()) {
            blocks[blockStates[key]] = value;
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
    console.log(nbt);
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
        blocks[blockPalette[key]] = value;
    }

    return blocks;
}

function readVarInt(array, offset) {
    let result = 0;
    let shift = 0;
    let byte;
    do {
        byte = array[offset];
        result |= (byte & 0x7f) << shift;
        shift += 7;
    } while (byte & 0x80);
    return { value: result, length: shift / 7 };
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
    return parser[Tags.Compound]()[""];
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
