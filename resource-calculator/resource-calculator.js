// crafting recipe data
/*
format

{
    id: {name: string, base_block?: boolean, ingredients?: [{id: string, quantity: number}], result?: number}
}
*/
/**
 * @type {Object.<string, {name: string, base_block?: boolean, ingredients?: {id?: string, tag?: string, quantity: number}[], result?: number}>}
 */
const Blocks = Object.freeze({
    acacia_button: { name: "Acacia Button", ingredients: [{ id: "acacia_planks", quantity: 1 }], result: 1 },
    acacia_door: { name: "Acacia Door", ingredients: [{ id: "acacia_planks", quantity: 6 }], result: 3 },
    acacia_fence: {
        name: "Acacia Fence",
        ingredients: [
            { id: "acacia_planks", quantity: 4 },
            { id: "stick", quantity: 2 },
        ],
        result: 3,
    },
    acacia_fence_gate: {
        name: "Acacia Fence Gate",
        ingredients: [
            { id: "acacia_planks", quantity: 2 },
            { id: "stick", quantity: 4 },
        ],
        result: 1,
    },
    acacia_hanging_sign: {
        name: "Acacia Hanging Sign",
        ingredients: [
            { id: "acacia_planks", quantity: 6 },
            { id: "chain", quantity: 2 },
        ],
        result: 6,
    },
    acacia_leaves: { name: "Acacia Leaves", base_block: true },
    acacia_log: { name: "Acacia Log", base_block: true },
    acacia_planks: { name: "Acacia Planks", ingredients: [{ id: "acacia_log", quantity: 1 }], result: 4 },
    acacia_pressure_plate: {
        name: "Acacia Pressure Plate",
        ingredients: [{ id: "acacia_planks", quantity: 2 }],
        result: 1,
    },
    acacia_saplilng: { name: "Acacia Sapling", base_block: true },
    acacia_sign: {
        name: "Acacia Sign",
        ingredients: [
            { id: "acacia_planks", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 3,
    },
    acacia_slab: { name: "Acacia Slab", ingredients: [{ id: "acacia_planks", quantity: 3 }], result: 6 },
    acacia_stairs: { name: "Acacia Stairs", ingredients: [{ id: "acacia_planks", quantity: 6 }], result: 4 },
    acacia_trapdoor: { name: "Acacia Trapdoor", ingredients: [{ id: "acacia_planks", quantity: 6 }], result: 2 },
    acacia_wood: { name: "Acacia Wood", ingredients: [{ id: "acacia_log", quantity: 4 }], result: 3 },
    activator_rail: {
        name: "Activator Rail",
        ingredients: [
            { id: "iron_ingot", quantity: 6 },
            { id: "redstone_torch", quantity: 1 },
            { id: "stick", quantity: 2 },
        ],
        result: 6,
    },
    allium: { name: "Allium", base_block: true },
    amethyst_block: { name: "Block of Amethyst", ingredients: [{ id: "amethyst_shard", quantity: 4 }], result: 1 },
    amethyst_cluster: { name: "Amethyst Cluster", base_block: true },
    ancient_debris: { name: "Ancient Debris", base_block: true },
    andesite: { name: "Andesite", base_block: true },
    andesite_slab: { name: "Andesite Slab", ingredients: [{ id: "andesite", quantity: 3 }], result: 6 },
    andesite_stairs: { name: "Andesite Stairs", ingredients: [{ id: "andesite", quantity: 6 }], result: 4 },
    andesite_wall: { name: "Andesite Wall", ingredients: [{ id: "andesite", quantity: 6 }], result: 6 },
    anvil: {
        name: "Anvil",
        ingredients: [
            { id: "iron_block", quantity: 3 },
            { id: "iron_ingot", quantity: 4 },
        ],
        result: 1,
    },
    azalea: { name: "Azalea", base_block: true },
    azalea_leaves: { name: "Azalea Leaves", base_block: true },
    azure_bluet: { name: "Azure Bluet", base_block: true },
    bamboo: { name: "Bamboo", base_block: true },
    bamboo_block: { name: "Block of Bamboo", ingredients: [{ id: "bamboo", quantity: 9 }], result: 1 },
    bamboo_button: { name: "Bamboo Button", ingredients: [{ id: "bamboo_planks", quantity: 1 }], result: 1 },
    bamboo_door: { name: "Bamboo Door", ingredients: [{ id: "bamboo_planks", quantity: 6 }], result: 3 },
    bamboo_fence: {
        name: "Bamboo Fence",
        ingredients: [
            { id: "bamboo_planks", quantity: 4 },
            { id: "stick", quantity: 2 },
        ],
        result: 3,
    },
    bamboo_fence_gate: {
        name: "Bamboo Fence Gate",
        ingredients: [
            { id: "bamboo_planks", quantity: 2 },
            { id: "stick", quantity: 4 },
        ],
        result: 1,
    },
    bamboo_hanging_sign: {
        name: "Bamboo Hanging Sign",
        ingredients: [
            { id: "bamboo_planks", quantity: 6 },
            { id: "chain", quantity: 2 },
        ],
        result: 6,
    },
    bamboo_mosaic: { name: "Bamboo Mosaic", ingredients: [{ id: "bamboo_slab", quantity: 2 }], result: 1 },
    bamboo_mosaic_slab: { name: "Bamboo Mosaic Slab", ingredients: [{ id: "bamboo_mosaic", quantity: 3 }], result: 6 },
    bamboo_mosaic_stairs: {
        name: "Bamboo Mosaic Stairs",
        ingredients: [{ id: "bamboo_mosaic", quantity: 6 }],
        result: 4,
    },
    bamboo_planks: { name: "Bamboo Planks", ingredients: [{ id: "bamboo_block", quantity: 1 }], result: 2 },
    bamboo_pressure_plate: {
        name: "Bamboo Pressure Plate",
        ingredients: [{ id: "bamboo_planks", quantity: 2 }],
        result: 1,
    },
    bamboo_shoot: { name: "Bamboo Shoot", base_block: true },
    bamboo_sign: {
        name: "Bamboo Sign",
        ingredients: [
            { id: "bamboo_planks", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 3,
    },
    bamboo_slab: { name: "Bamboo Slab", ingredients: [{ id: "bamboo_planks", quantity: 3 }], result: 6 },
    bamboo_stairs: { name: "Bamboo Stairs", ingredients: [{ id: "bamboo_planks", quantity: 6 }], result: 4 },
    bamboo_trapdoor: { name: "Bamboo Trapdoor", ingredients: [{ id: "bamboo_planks", quantity: 6 }], result: 2 },
    barrel: {
        name: "Barrel",
        ingredients: [
            { tag: "planks", quantity: 6 },
            { tag: "wood_slabs", quantity: 2 },
        ],
        result: 1,
    },
    barrier: { name: "Barrier", base_block: true },
    basalt: { name: "Basalt", base_block: true },
    beacon: {
        name: "Beacon",
        ingredients: [
            { id: "glass", quantity: 5 },
            { id: "nether_star", quantity: 1 },
            { id: "obsidian", quantity: 3 },
        ],
        result: 1,
    },
    bedrock: { name: "Bedrock", base_block: true },
    bee_nest: { name: "Bee Nest", base_block: true },
    beehive: {
        name: "Beehive",
        ingredients: [
            { tag: "planks", quantity: 6 },
            { id: "honeycomb", quantity: 3 },
        ],
        result: 1,
    },
    beetroots: { name: "Beetroots", ingredients: [{ id: "beetroot_seeds", quantity: 1 }], result: 1 },
    bell: { name: "Bell", base_block: true },
    big_dripleaf: { name: "Big Dripleaf", base_block: true },
    birch_button: { name: "Birch Button", ingredients: [{ id: "birch_planks", quantity: 1 }], result: 1 },
    birch_door: { name: "Birch Door", ingredients: [{ id: "birch_planks", quantity: 6 }], result: 3 },
    birch_fence: {
        name: "Birch Fence",
        ingredients: [
            { id: "birch_planks", quantity: 4 },
            { id: "stick", quantity: 2 },
        ],
        result: 3,
    },
    birch_fence_gate: {
        name: "Birch Fence Gate",
        ingredients: [
            { id: "birch_planks", quantity: 2 },
            { id: "stick", quantity: 4 },
        ],
        result: 1,
    },
    birch_hanging_sign: {
        name: "Birch Hanging Sign",
        ingredients: [
            { id: "birch_planks", quantity: 6 },
            { id: "chain", quantity: 2 },
        ],
        result: 6,
    },
    birch_leaves: { name: "Birch Leaves", base_block: true },
    birch_log: { name: "Birch Log", base_block: true },
    birch_planks: { name: "Birch Planks", ingredients: [{ id: "birch_log", quantity: 1 }], result: 4 },
    birch_pressure_plate: {
        name: "Birch Pressure Plate",
        ingredients: [{ id: "birch_planks", quantity: 2 }],
        result: 1,
    },
    birch_saplilng: { name: "Birch Sapling", base_block: true },
    birch_sign: {
        name: "Birch Sign",
        ingredients: [
            { id: "birch_planks", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 3,
    },
    birch_slab: { name: "Birch Slab", ingredients: [{ id: "birch_planks", quantity: 3 }], result: 6 },
    birch_stairs: { name: "Birch Stairs", ingredients: [{ id: "birch_planks", quantity: 6 }], result: 4 },
    birch_trapdoor: { name: "Birch Trapdoor", ingredients: [{ id: "birch_planks", quantity: 6 }], result: 2 },
    birch_wood: { name: "Birch Wood", ingredients: [{ id: "birch_log", quantity: 4 }], result: 3 },
    black_banner: {
        name: "Black Banner",
        ingredients: [
            { id: "black_wool", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    black_bed: {
        name: "Black Bed",
        ingredients: [
            { id: "black_wool", quantity: 3 },
            { id: "planks", quantity: 3 },
        ],
        result: 1,
    },
    black_candle: {
        name: "Black Candle",
        ingredients: [
            { id: "black_dye", quantity: 1 },
            { id: "candle", quantity: 1 },
        ],
        result: 1,
    },
    black_carpet: { name: "Black Carpet", ingredients: [{ id: "black_wool", quantity: 2 }], result: 3 },
    black_concrete: { name: "Black Concrete", ingredients: [{ id: "black_concrete_powder", quantity: 1 }], result: 1 },
    black_concrete_powder: {
        name: "Black Concrete Powder",
        ingredients: [
            { id: "black_dye", quantity: 1 },
            { id: "gravel", quantity: 4 },
            { id: "sand", quantity: 4 },
        ],
        result: 8,
    },
    black_glazed_terracotta: {
        name: "Black Glazed Terracotta",
        ingredients: [{ id: "black_terracotta", quantity: 1 }],
        result: 1,
    },
    black_shulker_box: {
        name: "Black Shulker Box",
        ingredients: [
            { id: "black_dye", quantity: 1 },
            { tag: "shulker_box", quantity: 1 },
        ],
        result: 1,
    },
    black_stained_glass: {
        name: "Black Stained Glass",
        ingredients: [
            { id: "black_dye", quantity: 1 },
            { id: "glass", quantity: 8 },
        ],
        result: 8,
    },
    black_stained_glass_pane: {
        name: "Black Stained Glass Pane",
        ingredients: [
            { id: "black_dye", quantity: 1 },
            { id: "glass_pane", quantity: 8 },
        ],
        result: 8,
    },
    black_terractotta: {
        name: "Black Terracotta",
        ingredients: [
            { id: "black_dye", quantity: 1 },
            { id: "terracotta", quantity: 8 },
        ],
        result: 8,
    },
    black_wool: {
        name: "Black Wool",
        ingredients: [
            { id: "black_dye", quantity: 1 },
            { tag: "wool", quantity: 1 },
        ],
        result: 1,
    },
    blackstone: { name: "Blackstone", base_block: true },
    blackstone_slab: { name: "Blackstone Slab", ingredients: [{ id: "blackstone", quantity: 3 }], result: 6 },
    blackstone_stairs: { name: "Blackstone Stairs", ingredients: [{ id: "blackstone", quantity: 6 }], result: 4 },
    blackstone_wall: { name: "Blackstone Wall", ingredients: [{ id: "blackstone", quantity: 6 }], result: 6 },
    blast_furnace: {
        name: "Blast Furnace",
        ingredients: [
            { id: "furnace", quantity: 1 },
            { id: "iron_ingot", quantity: 5 },
            { id: "smooth_stone", quantity: 3 },
        ],
        result: 1,
    },
    // todo: resource blocks
    blue_banner: {
        name: "Blue Banner",
        ingredients: [
            { id: "blue_wool", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    blue_bed: {
        name: "Blue Bed",
        ingredients: [
            { id: "blue_wool", quantity: 3 },
            { tag: "planks", quantity: 3 },
        ],
        result: 1,
    },
    blue_candle: {
        name: "Blue Candle",
        ingredients: [
            { id: "blue_dye", quantity: 1 },
            { id: "candle", quantity: 1 },
        ],
        result: 1,
    },
    blue_carpet: { name: "Blue Carpet", ingredients: [{ id: "blue_wool", quantity: 2 }], result: 3 },
    blue_concrete: { name: "Blue Concrete", ingredients: [{ id: "blue_concrete_powder", quantity: 1 }], result: 1 },
    blue_concrete_powder: {
        name: "Blue Concrete Powder",
        ingredients: [
            { id: "blue_dye", quantity: 1 },
            { id: "gravel", quantity: 4 },
            { id: "sand", quantity: 4 },
        ],
        result: 8,
    },
    blue_glazed_terracotta: {
        name: "Blue Glazed Terracotta",
        ingredients: [{ id: "blue_terracotta", quantity: 1 }],
        result: 1,
    },
    blue_ice: { name: "Blue Ice", base_block: true },
    blue_orchid: { name: "Blue Orchid", base_block: true },
    blue_shulker_box: {
        name: "Blue Shulker Box",
        ingredients: [
            { id: "blue_dye", quantity: 1 },
            { tag: "shulker_box", quantity: 1 },
        ],
        result: 1,
    },
    blue_stained_glass: {
        name: "Blue Stained Glass",
        ingredients: [
            { id: "blue_dye", quantity: 1 },
            { id: "glass", quantity: 8 },
        ],
        result: 8,
    },
    blue_stained_glass_pane: {
        name: "Blue Stained Glass Pane",
        ingredients: [
            { id: "blue_dye", quantity: 1 },
            { id: "glass_pane", quantity: 8 },
        ],
        result: 8,
    },
    blue_terracotta: {
        name: "Blue Terracotta",
        ingredients: [
            { id: "blue_dye", quantity: 1 },
            { id: "terracotta", quantity: 8 },
        ],
        result: 8,
    },
    blue_wool: {
        name: "Blue Wool",
        ingredients: [
            { id: "blue_dye", quantity: 1 },
            { tag: "wool", quantity: 1 },
        ],
        result: 1,
    },
    bone_block: { name: "Bone Block", ingredients: [{ id: "bone_meal", quantity: 9 }], result: 1 },
    bookshelf: {
        name: "Bookshelf",
        ingredients: [
            { id: "book", quantity: 3 },
            { tag: "planks", quantity: 6 },
        ],
        result: 1,
    },
    brain_coral: { name: "Brain Coral", base_block: true },
    brain_coral_block: { name: "Brain Coral Block", base_block: true },
    brain_coral_fan: { name: "Brain Coral Fan", base_block: true },
    brewing_stand: {
        name: "Brewing Stand",
        ingredients: [
            { id: "blaze_rod", quantity: 1 },
            { tag: "cobblestone", quantity: 3 },
        ],
        result: 1,
    },
    brick_slab: { name: "Brick Slab", ingredients: [{ id: "brick", quantity: 3 }], result: 6 },
    brick_stairs: { name: "Brick Stairs", ingredients: [{ id: "brick", quantity: 6 }], result: 4 },
    brick_wall: { name: "Brick Wall", ingredients: [{ id: "brick", quantity: 6 }], result: 6 },
    bricks: { name: "Bricks", ingredients: [{ id: "brick", quantity: 4 }], result: 1 },
    brown_banner: {
        name: "Brown Banner",
        ingredients: [
            { id: "brown_wool", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    brown_bed: {
        name: "Brown Bed",
        ingredients: [
            { id: "brown_wool", quantity: 3 },
            { tag: "planks", quantity: 3 },
        ],
        result: 1,
    },
    brown_candle: {
        name: "Brown Candle",
        ingredients: [
            { id: "brown_dye", quantity: 1 },
            { id: "candle", quantity: 1 },
        ],
        result: 1,
    },
    brown_carpet: { name: "Brown Carpet", ingredients: [{ id: "brown_wool", quantity: 2 }], result: 3 },
    brown_concrete: { name: "Brown Concrete", ingredients: [{ id: "brown_concrete_powder", quantity: 1 }], result: 1 },
    brown_concrete_powder: {
        name: "Brown Concrete Powder",
        ingredients: [
            { id: "brown_dye", quantity: 1 },
            { id: "gravel", quantity: 4 },
            { id: "sand", quantity: 4 },
        ],
        result: 8,
    },
    brown_glazed_terracotta: {
        name: "Brown Glazed Terracotta",
        ingredients: [{ id: "brown_terracotta", quantity: 1 }],
        result: 1,
    },
    brown_mushroom: { name: "Brown Mushroom", base_block: true },
    brown_mushroom_block: { name: "Brown Mushroom Block", base_block: true },
    brown_shulker_box: {
        name: "Brown Shulker Box",
        ingredients: [
            { id: "brown_dye", quantity: 1 },
            { tag: "shulker_box", quantity: 1 },
        ],
        result: 1,
    },
    brown_stained_glass: {
        name: "Brown Stained Glass",
        ingredients: [
            { id: "brown_dye", quantity: 1 },
            { id: "glass", quantity: 8 },
        ],
        result: 8,
    },
    brown_stained_glass_pane: {
        name: "Brown Stained Glass Pane",
        ingredients: [
            { id: "brown_dye", quantity: 1 },
            { id: "glass_pane", quantity: 8 },
        ],
        result: 8,
    },
    brown_terracotta: {
        name: "Brown Terracotta",
        ingredients: [
            { id: "brown_dye", quantity: 1 },
            { id: "terracotta", quantity: 8 },
        ],
        result: 8,
    },
    brown_wool: {
        name: "Brown Wool",
        ingredients: [
            { id: "brown_dye", quantity: 1 },
            { tag: "wool", quantity: 1 },
        ],
        result: 1,
    },
    bubble_coral: { name: "Bubble Coral", base_block: true },
    bubble_coral_block: { name: "Bubble Coral Block", base_block: true },
    bubble_coral_fan: { name: "Bubble Coral Fan", base_block: true },
    budding_amethyst: { name: "Budding Amethyst", base_block: true },
    cactus: { name: "Cactus", base_block: true },
    cake: {
        name: "Cake",
        ingredients: [
            { id: "egg", quantity: 1 },
            { id: "milk_bucket", quantity: 3 },
            { id: "sugar", quantity: 2 },
            { id: "wheat", quantity: 3 },
        ],
        result: 1,
    },
    calcite: { name: "Calcite", base_block: true },
    calibrated_sculk_sensor: {
        name: "Calibrated Sculk Sensor",
        ingredients: [
            { id: "amethyst_shard", quantity: 3 },
            { id: "sculk_sensor", quantity: 1 },
        ],
        result: 1,
    },
});

const Tags = Object.freeze({
    cobblestone: ["blackstone", "cobblestone", "cobbled_deepslate"],
    planks: [
        "acacia_planks",
        "bamboo_planks",
        "birch_planks",
        "crimson_planks",
        "dark_oak_planks",
        "jungle_planks",
        "oak_planks",
        "spruce_planks",
        "warped_planks",
    ],
    shulker_box: [
        "black_shulker_box",
        "blue_shulker_box",
        "brown_shulker_box",
        "cyan_shulker_box",
        "gray_shulker_box",
        "green_shulker_box",
        "light_blue_shulker_box",
        "light_gray_shulker_box",
        "lime_shulker_box",
        "magenta_shulker_box",
        "orange_shulker_box",
        "pink_shulker_box",
        "purple_shulker_box",
        "red_shulker_box",
        "white_shulker_box",
        "yellow_shulker_box",
    ],
    wood_slabs: [
        "acacia_slab",
        "bamboo_slab",
        "birch_slab",
        "crimson_slab",
        "dark_oak_slab",
        "jungle_slab",
        "oak_slab",
        "spruce_slab",
        "warped_slab",
    ],
    wool: [
        "black_wool",
        "blue_wool",
        "brown_wool",
        "cyan_wool",
        "gray_wool",
        "green_wool",
        "light_blue_wool",
        "light_gray_wool",
        "lime_wool",
        "magenta_wool",
        "orange_wool",
        "pink_wool",
        "purple_wool",
        "red_wool",
        "white_wool",
        "yellow_wool",
    ],
});

const select = document.getElementById("items");

for (const [key, value] of Object.entries(Blocks)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = value.name ? value.name : key;
    select.appendChild(option);
}
