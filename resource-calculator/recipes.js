// crafting recipe data
/*
format

{
    id: {name: string, base_item?: boolean, ingredients?: [{id: string, quantity: number}], result?: number}
}
*/
/**
 * @type {Object.<string, {name: string, base_item?: boolean, ingredients?: {id?: string, tag?: string, quantity: number}[], result?: number}>}
 */
export const Blocks = Object.freeze({
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
            { id: "acacia_log", quantity: 6 },
            { id: "chain", quantity: 2 },
        ],
        result: 6,
    },
    acacia_leaves: { name: "Acacia Leaves", base_item: true },
    acacia_log: { name: "Acacia Log", base_item: true },
    acacia_planks: { name: "Acacia Planks", ingredients: [{ id: "acacia_log", quantity: 1 }], result: 4 },
    acacia_pressure_plate: {
        name: "Acacia Pressure Plate",
        ingredients: [{ id: "acacia_planks", quantity: 2 }],
        result: 1,
    },
    acacia_saplilng: { name: "Acacia Sapling", base_item: true },
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
    allium: { name: "Allium", base_item: true },
    amethyst_block: { name: "Block of Amethyst", ingredients: [{ id: "amethyst_shard", quantity: 4 }], result: 1 },
    amethyst_cluster: { name: "Amethyst Cluster", base_item: true },
    ancient_debris: { name: "Ancient Debris", base_item: true },
    andesite: { name: "Andesite", base_item: true },
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
    azalea: { name: "Azalea", base_item: true },
    azalea_leaves: { name: "Azalea Leaves", base_item: true },
    azure_bluet: { name: "Azure Bluet", base_item: true },
    bamboo: { name: "Bamboo", base_item: true },
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
            { id: "bamboo_block", quantity: 6 },
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
    bamboo_shoot: { name: "Bamboo Shoot", base_item: true },
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
    barrier: { name: "Barrier", base_item: true },
    basalt: { name: "Basalt", base_item: true },
    beacon: {
        name: "Beacon",
        ingredients: [
            { id: "glass", quantity: 5 },
            { id: "nether_star", quantity: 1 },
            { id: "obsidian", quantity: 3 },
        ],
        result: 1,
    },
    bedrock: { name: "Bedrock", base_item: true },
    bee_nest: { name: "Bee Nest", base_item: true },
    beehive: {
        name: "Beehive",
        ingredients: [
            { tag: "planks", quantity: 6 },
            { id: "honeycomb", quantity: 3 },
        ],
        result: 1,
    },
    beetroots: { name: "Beetroots", ingredients: [{ id: "beetroot_seeds", quantity: 1 }], result: 1 },
    bell: { name: "Bell", base_item: true },
    big_dripleaf: { name: "Big Dripleaf", base_item: true },
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
            { id: "birch_log", quantity: 6 },
            { id: "chain", quantity: 2 },
        ],
        result: 6,
    },
    birch_leaves: { name: "Birch Leaves", base_item: true },
    birch_log: { name: "Birch Log", base_item: true },
    birch_planks: { name: "Birch Planks", ingredients: [{ id: "birch_log", quantity: 1 }], result: 4 },
    birch_pressure_plate: {
        name: "Birch Pressure Plate",
        ingredients: [{ id: "birch_planks", quantity: 2 }],
        result: 1,
    },
    birch_saplilng: { name: "Birch Sapling", base_item: true },
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
    blackstone: { name: "Blackstone", base_item: true },
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
    blue_ice: { name: "Blue Ice", base_item: true },
    blue_orchid: { name: "Blue Orchid", base_item: true },
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
    brain_coral: { name: "Brain Coral", base_item: true },
    brain_coral_block: { name: "Brain Coral Block", base_item: true },
    brain_coral_fan: { name: "Brain Coral Fan", base_item: true },
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
    brown_mushroom: { name: "Brown Mushroom", base_item: true },
    brown_mushroom_block: { name: "Brown Mushroom Block", base_item: true },
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
    bubble_coral: { name: "Bubble Coral", base_item: true },
    bubble_coral_block: { name: "Bubble Coral Block", base_item: true },
    bubble_coral_fan: { name: "Bubble Coral Fan", base_item: true },
    budding_amethyst: { name: "Budding Amethyst", base_item: true },
    cactus: { name: "Cactus", base_item: true },
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
    calcite: { name: "Calcite", base_item: true },
    calibrated_sculk_sensor: {
        name: "Calibrated Sculk Sensor",
        ingredients: [
            { id: "amethyst_shard", quantity: 3 },
            { id: "sculk_sensor", quantity: 1 },
        ],
        result: 1,
    },
    campfire: {
        name: "Campfire",
        ingredients: [
            { id: "charcoal", quantity: 1 },
            { id: "stick", quantity: 3 },
            { tag: "wood", quantity: 3 },
        ],
        result: 1,
    },
    candle: {
        name: "Candle",
        ingredients: [
            { id: "honeycomb", quantity: 1 },
            { id: "string", quantity: 1 },
        ],
        result: 4,
    },
    carrots: { name: "Carrots", ingredients: [{ id: "carrot", quantity: 1 }], result: 1 },
    cartography_table: {
        name: "Cartography Table",
        ingredients: [
            { id: "paper", quantity: 2 },
            { tag: "planks", quantity: 4 },
        ],
        result: 1,
    },
    carved_pumpkin: { name: "Carved Pumpkin", ingredients: [{ id: "pumpkin", quantity: 1 }], result: 1 },
    cauldron: {
        name: "Cauldron",
        ingredients: [{ id: "iron_ingot", quantity: 7 }],
        result: 1,
    },
    cave_vines: { name: "Cave Vines", base_item: true },
    chain: {
        name: "Chain",
        ingredients: [
            { id: "iron_ingot", quantity: 1 },
            { id: "iron_nugget", quantity: 2 },
        ],
        result: 1,
    },
    chain_command_block: { name: "Chain Command Block", base_item: true },
    chest: {
        name: "Chest",
        ingredients: [{ tag: "planks", quantity: 8 }],
        result: 1,
    },
    cherry_button: { name: "Cherry Button", ingredients: [{ id: "cherry_planks", quantity: 1 }], result: 1 },
    cherry_door: { name: "Cherry Door", ingredients: [{ id: "cherry_planks", quantity: 6 }], result: 3 },
    cherry_fence: {
        name: "Cherry Fence",
        ingredients: [
            { id: "cherry_planks", quantity: 4 },
            { id: "stick", quantity: 2 },
        ],
        result: 3,
    },
    cherry_fence_gate: {
        name: "Cherry Fence Gate",
        ingredients: [
            { id: "cherry_planks", quantity: 2 },
            { id: "stick", quantity: 4 },
        ],
        result: 1,
    },
    cherry_hanging_sign: {
        name: "Cherry Hanging Sign",
        ingredients: [
            { id: "cherry_log", quantity: 6 },
            { id: "chain", quantity: 2 },
        ],
        result: 6,
    },
    cherry_leaves: { name: "Cherry Leaves", base_item: true },
    cherry_log: { name: "Cherry Log", base_item: true },
    cherry_planks: { name: "Cherry Planks", ingredients: [{ id: "cherry_log", quantity: 1 }], result: 4 },
    cherry_pressure_plate: {
        name: "Cherry Pressure Plate",
        ingredients: [{ id: "cherry_planks", quantity: 2 }],
        result: 1,
    },
    cherry_saplilng: { name: "Cherry Sapling", base_item: true },
    cherry_sign: {
        name: "Cherry Sign",
        ingredients: [
            { id: "cherry_planks", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 3,
    },
    cherry_slab: { name: "Cherry Slab", ingredients: [{ id: "cherry_planks", quantity: 3 }], result: 6 },
    cherry_stairs: { name: "Cherry Stairs", ingredients: [{ id: "cherry_planks", quantity: 6 }], result: 4 },
    cherry_trapdoor: { name: "Cherry Trapdoor", ingredients: [{ id: "cherry_planks", quantity: 6 }], result: 2 },
    cherry_wood: { name: "Cherry Wood", ingredients: [{ id: "cherry_log", quantity: 4 }], result: 3 },
    chest_minecart: {
        name: "Minecart with Chest",
        ingredients: [
            { id: "chest", quantity: 1 },
            { id: "minecart", quantity: 1 },
        ],
        result: 1,
    },
    chiseled_bookshelf: {
        name: "Chiseled Bookshelf",
        ingredients: [
            { tag: "planks", quantity: 6 },
            { tag: "wood_slabs", quantity: 3 },
        ],
        result: 1,
    },
    chiseled_deepslate: {
        name: "Chiseled Deepslate",
        ingredients: [{ id: "cobbled_deepslate_slab", quantity: 2 }],
        result: 1,
    },
    chiseled_nether_bricks: {
        name: "Chiseled Nether Bricks",
        ingredients: [{ id: "nether_brick_slab", quantity: 2 }],
        result: 1,
    },
    chiseled_polished_blackstone: {
        name: "Chiseled Polished Blackstone",
        ingredients: [{ id: "polished_blackstone_slab", quantity: 2 }],
        result: 1,
    },
    chiseled_quartz_block: {
        name: "Chiseled Quartz Block",
        ingredients: [{ id: "quartz_slab", quantity: 2 }],
        result: 1,
    },
    chiseled_red_sandstone: {
        name: "Chiseled Red Sandstone",
        ingredients: [{ id: "red_sandstone_slab", quantity: 2 }],
        result: 1,
    },
    chiseled_sandstone: {
        name: "Chiseled Sandstone",
        ingredients: [{ id: "sandstone_slab", quantity: 2 }],
        result: 1,
    },
    chiseled_stone_bricks: {
        name: "Chiseled Stone Bricks",
        ingredients: [{ id: "stone_brick_slab", quantity: 2 }],
        result: 1,
    },
    chorus_flower: { name: "Chorus Flower", base_item: true },
    chorus_plant: { name: "Chorus Plant", base_item: true },
    clay: { name: "Clay", base_item: true },
    coal_block: { name: "Block of Coal", ingredients: [{ id: "coal", quantity: 9 }], result: 1 },
    coal_ore: { name: "Coal Ore", base_item: true },
    coarse_dirt: { name: "Coarse Dirt", base_item: true },
    cobbled_deepslate: { name: "Cobbled Deepslate", base_item: true },
    cobbled_deepslate_slab: {
        name: "Cobbled Deepslate Slab",
        ingredients: [{ id: "cobbled_deepslate", quantity: 3 }],
        result: 6,
    },
    cobbled_deepslate_stairs: {
        name: "Cobbled Deepslate Stairs",
        ingredients: [{ id: "cobbled_deepslate", quantity: 6 }],
        result: 4,
    },
    cobbled_deepslate_wall: {
        name: "Cobbled Deepslate Wall",
        ingredients: [{ id: "cobbled_deepslate", quantity: 6 }],
        result: 6,
    },
    cobblestone: { name: "Cobblestone", base_item: true },
    cobblestone_slab: { name: "Cobblestone Slab", ingredients: [{ id: "cobblestone", quantity: 3 }], result: 6 },
    cobblestone_stairs: { name: "Cobblestone Stairs", ingredients: [{ id: "cobblestone", quantity: 6 }], result: 4 },
    cobblestone_wall: { name: "Cobblestone Wall", ingredients: [{ id: "cobblestone", quantity: 6 }], result: 6 },
    cobweb: { name: "Cobweb", base_item: true },
    cocoa: { name: "Cocoa", base_item: true },
    command_block: { name: "Command Block", base_item: true },
    composter: {
        name: "Composter",
        ingredients: [{ tag: "wood_slabs", quantity: 7 }],
        result: 1,
    },
    conduit: {
        name: "Conduit",
        ingredients: [
            { id: "heart_of_the_sea", quantity: 1 },
            { id: "nautilus_shell", quantity: 8 },
        ],
        result: 1,
    },
    copper_block: { name: "Block of Copper", ingredients: [{ id: "copper_ingot", quantity: 9 }], result: 1 },
    copper_ore: { name: "Copper Ore", base_item: true },
    cornflower: { name: "Cornflower", base_item: true },
    cracked_deepslate_bricks: {
        name: "Cracked Deepslate Bricks",
        ingredients: [{ id: "deepslate_bricks", quantity: 1 }],
        result: 1,
    },
    cracked_deepslate_tiles: {
        name: "Cracked Deepslate Tiles",
        ingredients: [{ id: "deepslate_tiles", quantity: 1 }],
        result: 1,
    },
    cracked_nether_bricks: {
        name: "Cracked Nether Bricks",
        ingredients: [{ id: "nether_bricks", quantity: 1 }],
        result: 1,
    },
    cracked_polished_blackstone_bricks: {
        name: "Cracked Polished Blackstone Bricks",
        ingredients: [{ id: "polished_blackstone_bricks", quantity: 1 }],
        result: 1,
    },
    cracked_stone_bricks: {
        name: "Cracked Stone Bricks",
        ingredients: [{ id: "stone_bricks", quantity: 1 }],
        result: 1,
    },
    crafter: {
        name: "Crafter",
        ingredients: [
            { id: "crafting_table", quantity: 1 },
            { id: "dropper", quantity: 1 },
            { id: "iron_ingot", quantity: 5 },
            { id: "redstone", quantity: 2 },
        ],
        result: 1,
    },
    crafting_table: {
        name: "Crafting Table",
        ingredients: [{ tag: "planks", quantity: 4 }],
        result: 1,
    },
    creeper_head: { name: "Creeper Head", base_item: true },
    crimson_button: { name: "Crimson Button", ingredients: [{ id: "crimson_planks", quantity: 1 }], result: 1 },
    crimson_door: { name: "Crimson Door", ingredients: [{ id: "crimson_planks", quantity: 6 }], result: 3 },
    crimson_fence: {
        name: "Crimson Fence",
        ingredients: [
            { id: "crimson_planks", quantity: 4 },
            { id: "stick", quantity: 2 },
        ],
        result: 3,
    },
    crimson_fence_gate: {
        name: "Crimson Fence Gate",
        ingredients: [
            { id: "crimson_planks", quantity: 2 },
            { id: "stick", quantity: 4 },
        ],
        result: 1,
    },
    crimson_fungus: { name: "Crimson Fungus", base_item: true },
    crimson_hanging_sign: {
        name: "Crimson Hanging Sign",
        ingredients: [
            { id: "crimson_stem", quantity: 6 },
            { id: "chain", quantity: 2 },
        ],
        result: 6,
    },
    crimson_hyphae: { name: "Crimson Hyphae", base_item: true },
    crimson_nylium: { name: "Crimson Nylium", base_item: true },
    crimson_planks: { name: "Crimson Planks", ingredients: [{ id: "crimson_stem", quantity: 1 }], result: 4 },
    crimson_pressure_plate: {
        name: "Crimson Pressure Plate",
        ingredients: [{ id: "crimson_planks", quantity: 2 }],
        result: 1,
    },
    crimson_roots: { name: "Crimson Roots", base_item: true },
    crimson_sign: {
        name: "Crimson Sign",
        ingredients: [
            { id: "crimson_planks", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 3,
    },
    crimson_slab: { name: "Crimson Slab", ingredients: [{ id: "crimson_planks", quantity: 3 }], result: 6 },
    crimson_stairs: { name: "Crimson Stairs", ingredients: [{ id: "crimson_planks", quantity: 6 }], result: 4 },
    crimson_stem: { name: "Crimson Stem", base_item: true },
    crimson_trapdoor: { name: "Crimson Trapdoor", ingredients: [{ id: "crimson_planks", quantity: 6 }], result: 2 },
    crying_obsidian: { name: "Crying Obsidian", base_item: true },
    cut_copper: { name: "Cut Copper", ingredients: [{ id: "copper_block", quantity: 4 }], result: 4 },
    cut_copper_slab: { name: "Cut Copper Slab", ingredients: [{ id: "cut_copper", quantity: 3 }], result: 6 },
    cut_copper_stairs: { name: "Cut Copper Stairs", ingredients: [{ id: "cut_copper", quantity: 6 }], result: 4 },
    cut_red_sandstone: { name: "Cut Red Sandstone", ingredients: [{ id: "red_sandstone", quantity: 4 }], result: 4 },
    cut_red_sandstone_slab: {
        name: "Cut Red Sandstone Slab",
        ingredients: [{ id: "cut_red_sandstone", quantity: 3 }],
        result: 6,
    },
    cut_sandstone: { name: "Cut Sandstone", ingredients: [{ id: "sandstone", quantity: 4 }], result: 4 },
    cut_sandstone_slab: { name: "Cut Sandstone Slab", ingredients: [{ id: "cut_sandstone", quantity: 3 }], result: 6 },
    cyan_banner: {
        name: "Cyan Banner",
        ingredients: [
            { id: "cyan_wool", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    cyan_bed: {
        name: "Cyan Bed",
        ingredients: [
            { id: "cyan_wool", quantity: 3 },
            { tag: "planks", quantity: 3 },
        ],
        result: 1,
    },
    cyan_candle: {
        name: "Cyan Candle",
        ingredients: [
            { id: "candle", quantity: 1 },
            { id: "cyan_dye", quantity: 1 },
        ],
        result: 1,
    },
    cyan_carpet: { name: "Cyan Carpet", ingredients: [{ id: "cyan_wool", quantity: 2 }], result: 3 },
    cyan_concrete: { name: "Cyan Concrete", ingredients: [{ id: "cyan_concrete_powder", quantity: 1 }], result: 1 },
    cyan_concrete_powder: {
        name: "Cyan Concrete Powder",
        ingredients: [
            { id: "cyan_dye", quantity: 1 },
            { id: "gravel", quantity: 4 },
            { id: "sand", quantity: 4 },
        ],
        result: 8,
    },
    cyan_glazed_terracotta: {
        name: "Cyan Glazed Terracotta",
        ingredients: [{ id: "cyan_terracotta", quantity: 1 }],
        result: 1,
    },
    cyan_shulker_box: {
        name: "Cyan Shulker Box",
        ingredients: [
            { id: "cyan_dye", quantity: 1 },
            { tag: "shulker_box", quantity: 1 },
        ],
        result: 1,
    },
    cyan_stained_glass: {
        name: "Cyan Stained Glass",
        ingredients: [
            { id: "cyan_dye", quantity: 1 },
            { id: "glass", quantity: 8 },
        ],
        result: 8,
    },
    cyan_stained_glass_pane: {
        name: "Cyan Stained Glass Pane",
        ingredients: [
            { id: "cyan_dye", quantity: 1 },
            { id: "glass_pane", quantity: 8 },
        ],
        result: 8,
    },
    cyan_terracotta: {
        name: "Cyan Terracotta",
        ingredients: [
            { id: "cyan_dye", quantity: 1 },
            { id: "terracotta", quantity: 8 },
        ],
        result: 8,
    },
    cyan_wool: {
        name: "Cyan Wool",
        ingredients: [
            { id: "cyan_dye", quantity: 1 },
            { tag: "wool", quantity: 1 },
        ],
        result: 1,
    },
    dandelion: { name: "Dandelion", base_item: true },
    dark_oak_button: { name: "Dark Oak Button", ingredients: [{ id: "dark_oak_planks", quantity: 1 }], result: 1 },
    dark_oak_door: { name: "Dark Oak Door", ingredients: [{ id: "dark_oak_planks", quantity: 6 }], result: 3 },
    dark_oak_fence: {
        name: "Dark Oak Fence",
        ingredients: [
            { id: "dark_oak_planks", quantity: 4 },
            { id: "stick", quantity: 2 },
        ],
        result: 3,
    },
    dark_oak_fence_gate: {
        name: "Dark Oak Fence Gate",
        ingredients: [
            { id: "dark_oak_planks", quantity: 2 },
            { id: "stick", quantity: 4 },
        ],
        result: 1,
    },
    dark_oak_hanging_sign: {
        name: "Dark Oak Hanging Sign",
        ingredients: [
            { id: "dark_oak_log", quantity: 6 },
            { id: "chain", quantity: 2 },
        ],
        result: 6,
    },
    dark_oak_leaves: { name: "Dark Oak Leaves", base_item: true },
    dark_oak_log: { name: "Dark Oak Log", base_item: true },
    dark_oak_planks: { name: "Dark Oak Planks", ingredients: [{ id: "dark_oak_log", quantity: 1 }], result: 4 },
    dark_oak_pressure_plate: {
        name: "Dark Oak Pressure Plate",
        ingredients: [{ id: "dark_oak_planks", quantity: 2 }],
        result: 1,
    },
    dark_oak_sapling: { name: "Dark Oak Sapling", base_item: true },
    dark_oak_sign: {
        name: "Dark Oak Sign",
        ingredients: [
            { id: "dark_oak_planks", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 3,
    },
    dark_oak_slab: { name: "Dark Oak Slab", ingredients: [{ id: "dark_oak_planks", quantity: 3 }], result: 6 },
    dark_oak_stairs: { name: "Dark Oak Stairs", ingredients: [{ id: "dark_oak_planks", quantity: 6 }], result: 4 },
    dark_oak_trapdoor: { name: "Dark Oak Trapdoor", ingredients: [{ id: "dark_oak_planks", quantity: 6 }], result: 2 },
    dark_oak_wood: { name: "Dark Oak Wood", ingredients: [{ id: "dark_oak_log", quantity: 4 }], result: 3 },
    dark_prismarine: {
        name: "Dark Prismarine",
        ingredients: [
            { id: "black_dye", quantity: 1 },
            { id: "prismarine_shard", quantity: 8 },
        ],
        result: 1,
    },
    dark_prismarine_slab: {
        name: "Dark Prismarine Slab",
        ingredients: [{ id: "dark_prismarine", quantity: 3 }],
        result: 6,
    },
    dark_prismarine_stairs: {
        name: "Dark Prismarine Stairs",
        ingredients: [{ id: "dark_prismarine", quantity: 6 }],
        result: 4,
    },
    daylight_detector: {
        name: "Daylight Detector",
        ingredients: [
            { id: "glass", quantity: 3 },
            { id: "nether_quartz", quantity: 3 },
            { tag: "wood_slabs", quantity: 3 },
        ],
        result: 1,
    },
    dead_brain_coral: { name: "Dead Brain Coral", base_item: true },
    dead_brain_coral_block: { name: "Dead Brain Coral Block", base_item: true },
    dead_brain_coral_fan: { name: "Dead Brain Coral Fan", base_item: true },
    dead_bubble_coral: { name: "Dead Bubble Coral", base_item: true },
    dead_bubble_coral_block: { name: "Dead Bubble Coral Block", base_item: true },
    dead_bubble_coral_fan: { name: "Dead Bubble Coral Fan", base_item: true },
    dead_bush: { name: "Dead Bush", base_item: true },
    dead_fire_coral: { name: "Dead Fire Coral", base_item: true },
    dead_fire_coral_block: { name: "Dead Fire Coral Block", base_item: true },
    dead_fire_coral_fan: { name: "Dead Fire Coral Fan", base_item: true },
    dead_horn_coral: { name: "Dead Horn Coral", base_item: true },
    dead_horn_coral_block: { name: "Dead Horn Coral Block", base_item: true },
    dead_horn_coral_fan: { name: "Dead Horn Coral Fan", base_item: true },
    dead_tube_coral: { name: "Dead Tube Coral", base_item: true },
    dead_tube_coral_block: { name: "Dead Tube Coral Block", base_item: true },
    dead_tube_coral_fan: { name: "Dead Tube Coral Fan", base_item: true },
    decorated_pot: {
        name: "Decorated Pot",
        ingredients: [{ id: "brick", quantity: 4 }],
        result: 1,
    },
    deepslate: { name: "Deepslate", base_item: true },
    deepslate_bricks: { name: "Deepslate Bricks", ingredients: [{ id: "polished_deepslate", quantity: 4 }], result: 4 },
    deepslate_brick_slab: {
        name: "Deepslate Brick Slab",
        ingredients: [{ id: "deepslate_bricks", quantity: 3 }],
        result: 6,
    },
    deepslate_brick_stairs: {
        name: "Deepslate Brick Stairs",
        ingredients: [{ id: "deepslate_bricks", quantity: 6 }],
        result: 4,
    },
    deepslate_brick_wall: {
        name: "Deepslate Brick Wall",
        ingredients: [{ id: "deepslate_bricks", quantity: 6 }],
        result: 6,
    },
    deepslate_coal_ore: { name: "Deepslate Coal Ore", base_item: true },
    deepslate_copper_ore: { name: "Deepslate Copper Ore", base_item: true },
    deepslate_diamond_ore: { name: "Deepslate Diamond Ore", base_item: true },
    deepslate_emerald_ore: { name: "Deepslate Emerald Ore", base_item: true },
    deepslate_gold_ore: { name: "Deepslate Gold Ore", base_item: true },
    deepslate_iron_ore: { name: "Deepslate Iron Ore", base_item: true },
    deepslate_lapis_ore: { name: "Deepslate Lapis Lazuli Ore", base_item: true },
    deepslate_redstone_ore: { name: "Deepslate Redstone Ore", base_item: true },
    deepslate_tiles: { name: "Deepslate Tiles", ingredients: [{ id: "deepslate_bricks", quantity: 4 }], result: 4 },
    deepslate_tile_slab: {
        name: "Deepslate Tile Slab",
        ingredients: [{ id: "deepslate_tiles", quantity: 3 }],
        result: 6,
    },
    deepslate_tile_stairs: {
        name: "Deepslate Tile Stairs",
        ingredients: [{ id: "deepslate_tiles", quantity: 6 }],
        result: 4,
    },
    deepslate_tile_wall: {
        name: "Deepslate Tile Wall",
        ingredients: [{ id: "deepslate_tiles", quantity: 6 }],
        result: 6,
    },
    detector_rail: {
        name: "Detector Rail",
        ingredients: [
            { id: "iron_ingot", quantity: 6 },
            { id: "redstone", quantity: 1 },
            { id: "stone_pressure_plate", quantity: 1 },
        ],
        result: 6,
    },
    diamond_block: { name: "Block of Diamond", ingredients: [{ id: "diamond", quantity: 9 }], result: 1 },
    diamond_ore: { name: "Diamond Ore", base_item: true },
    diorite: { name: "Diorite", base_item: true },
    diorite_slab: { name: "Diorite Slab", ingredients: [{ id: "diorite", quantity: 3 }], result: 6 },
    diorite_stairs: { name: "Diorite Stairs", ingredients: [{ id: "diorite", quantity: 6 }], result: 4 },
    diorite_wall: { name: "Diorite Wall", ingredients: [{ id: "diorite", quantity: 6 }], result: 6 },
    dirt: { name: "Dirt", base_item: true },
    dirt_path: { name: "Dirt Path", ingredients: [{ id: "dirt", quantity: 1 }], result: 1 },
    dispenser: {
        name: "Dispenser",
        ingredients: [
            { id: "cobblestone", quantity: 7 },
            { id: "bow", quantity: 1 },
            { id: "redstone", quantity: 1 },
        ],
        result: 1,
    },
    dragon_egg: { name: "Dragon Egg", base_item: true },
    dragon_head: { name: "Dragon Head", base_item: true },
    dried_kelp_block: { name: "Dried Kelp Block", ingredients: [{ id: "dried_kelp", quantity: 9 }], result: 1 },
    dripstone_block: { name: "Dripstone Block", base_item: true },
    dropper: {
        name: "Dropper",
        ingredients: [
            { id: "cobblestone", quantity: 7 },
            { id: "redstone", quantity: 1 },
        ],
        result: 1,
    },
    emerald_block: { name: "Block of Emerald", ingredients: [{ id: "emerald", quantity: 9 }], result: 1 },
    emerald_ore: { name: "Emerald Ore", base_item: true },
    enchanting_table: {
        name: "Enchanting Table",
        ingredients: [
            { id: "book", quantity: 1 },
            { id: "diamond", quantity: 2 },
            { id: "obsidian", quantity: 4 },
        ],
        result: 1,
    },
    end_portal_frame: { name: "End Portal Frame", base_item: true },
    end_rod: {
        name: "End Rod",
        ingredients: [
            { id: "blaze_rod", quantity: 1 },
            { id: "popped_chorus_fruit", quantity: 1 },
        ],
        result: 4,
    },
    end_stone: { name: "End Stone", base_item: true },
    end_stone_brick_slab: {
        name: "End Stone Brick Slab",
        ingredients: [{ id: "end_stone_bricks", quantity: 3 }],
        result: 6,
    },
    end_stone_brick_stairs: {
        name: "End Stone Brick Stairs",
        ingredients: [{ id: "end_stone_bricks", quantity: 6 }],
        result: 4,
    },
    end_stone_brick_wall: {
        name: "End Stone Brick Wall",
        ingredients: [{ id: "end_stone_bricks", quantity: 6 }],
        result: 6,
    },
    end_stone_bricks: { name: "End Stone Bricks", ingredients: [{ id: "end_stone", quantity: 4 }], result: 4 },
    ender_chest: {
        name: "Ender Chest",
        ingredients: [
            { id: "ender_eye", quantity: 1 },
            { id: "obsidian", quantity: 8 },
        ],
        result: 1,
    },
    exposed_copper: { name: "Exposed Copper", ingredients: [{ id: "copper_block", quantity: 1 }], result: 1 },
    exposed_cut_copper: { name: "Exposed Cut Copper", ingredients: [{ id: "cut_copper", quantity: 1 }], result: 1 },
    exposed_cut_copper_slab: {
        name: "Exposed Cut Copper Slab",
        ingredients: [{ id: "cut_copper_slab", quantity: 1 }],
        result: 1,
    },
    exposed_cut_copper_stairs: {
        name: "Exposed Cut Copper Stairs",
        ingredients: [{ id: "cut_copper_stairs", quantity: 1 }],
        result: 1,
    },
    farmland: { name: "Farmland", ingredients: [{ id: "dirt", quantity: 1 }], result: 1 },
    fern: { name: "Fern", base_item: true },
    fire: { name: "Fire", base_item: true },
    fire_coral: { name: "Fire Coral", base_item: true },
    fire_coral_block: { name: "Fire Coral Block", base_item: true },
    fire_coral_fan: { name: "Fire Coral Fan", base_item: true },
    fletching_table: {
        name: "Fletching Table",
        ingredients: [
            { id: "flint", quantity: 2 },
            { tag: "planks", quantity: 4 },
        ],
        result: 1,
    },
    flower_pot: {
        name: "Flower Pot",
        ingredients: [{ id: "brick", quantity: 3 }],
        result: 3,
    },
    flowering_azalea: { name: "Flowering Azalea", base_item: true },
    flowering_azalea_leaves: { name: "Flowering Azalea Leaves", base_item: true },
    frogspawn: { name: "Frogspawn", base_item: true },
    furnace: {
        name: "Furnace",
        ingredients: [{ id: "cobblestone", quantity: 8 }],
        result: 1,
    },
    gilded_blackstone: { name: "Gilded Blackstone", base_item: true },
    glass: { name: "Glass", ingredients: [{ id: "sand", quantity: 1 }], result: 1 },
    glass_pane: { name: "Glass Pane", ingredients: [{ id: "glass", quantity: 6 }], result: 16 },
    glow_lichen: { name: "Glow Lichen", base_item: true },
    glowstone: { name: "Glowstone", base_item: true },
    gold_block: { name: "Block of Gold", ingredients: [{ id: "gold_ingot", quantity: 9 }], result: 1 },
    gold_ore: { name: "Gold Ore", base_item: true },
    granite: { name: "Granite", base_item: true },
    granite_slab: { name: "Granite Slab", ingredients: [{ id: "granite", quantity: 3 }], result: 6 },
    granite_stairs: { name: "Granite Stairs", ingredients: [{ id: "granite", quantity: 6 }], result: 4 },
    granite_wall: { name: "Granite Wall", ingredients: [{ id: "granite", quantity: 6 }], result: 6 },
    grass_block: { name: "Grass Block", base_item: true },
    gravel: { name: "Gravel", base_item: true },
    gray_banner: {
        name: "Gray Banner",
        ingredients: [
            { id: "gray_wool", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    gray_bed: {
        name: "Gray Bed",
        ingredients: [
            { id: "gray_wool", quantity: 3 },
            { tag: "planks", quantity: 3 },
        ],
        result: 1,
    },
    gray_candle: {
        name: "Gray Candle",
        ingredients: [
            { id: "candle", quantity: 1 },
            { id: "gray_dye", quantity: 1 },
        ],
        result: 1,
    },
    gray_carpet: { name: "Gray Carpet", ingredients: [{ id: "gray_wool", quantity: 2 }], result: 3 },
    gray_concrete: { name: "Gray Concrete", ingredients: [{ id: "gray_concrete_powder", quantity: 1 }], result: 1 },
    gray_concrete_powder: {
        name: "Gray Concrete Powder",
        ingredients: [
            { id: "gray_dye", quantity: 1 },
            { id: "gravel", quantity: 4 },
            { id: "sand", quantity: 4 },
        ],
        result: 8,
    },
    gray_glazed_terracotta: {
        name: "Gray Glazed Terracotta",
        ingredients: [{ id: "gray_terracotta", quantity: 1 }],
        result: 1,
    },
    gray_shulker_box: {
        name: "Gray Shulker Box",
        ingredients: [
            { id: "gray_dye", quantity: 1 },
            { tag: "shulker_box", quantity: 1 },
        ],
        result: 1,
    },
    gray_stained_glass: {
        name: "Gray Stained Glass",
        ingredients: [
            { id: "gray_dye", quantity: 1 },
            { id: "glass", quantity: 8 },
        ],
        result: 8,
    },
    gray_stained_glass_pane: {
        name: "Gray Stained Glass Pane",
        ingredients: [
            { id: "gray_dye", quantity: 1 },
            { id: "glass_pane", quantity: 8 },
        ],
        result: 8,
    },
    gray_terracotta: {
        name: "Gray Terracotta",
        ingredients: [
            { id: "gray_dye", quantity: 1 },
            { id: "terracotta", quantity: 8 },
        ],
        result: 8,
    },
    gray_wool: {
        name: "Gray Wool",
        ingredients: [
            { id: "gray_dye", quantity: 1 },
            { tag: "wool", quantity: 1 },
        ],
        result: 1,
    },
    green_banner: {
        name: "Green Banner",
        ingredients: [
            { id: "green_wool", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    green_bed: {
        name: "Green Bed",
        ingredients: [
            { id: "green_wool", quantity: 3 },
            { tag: "planks", quantity: 3 },
        ],
        result: 1,
    },
    green_candle: {
        name: "Green Candle",
        ingredients: [
            { id: "candle", quantity: 1 },
            { id: "green_dye", quantity: 1 },
        ],
        result: 1,
    },
    green_carpet: { name: "Green Carpet", ingredients: [{ id: "green_wool", quantity: 2 }], result: 3 },
    green_concrete: { name: "Green Concrete", ingredients: [{ id: "green_concrete_powder", quantity: 1 }], result: 1 },
    green_concrete_powder: {
        name: "Green Concrete Powder",
        ingredients: [
            { id: "green_dye", quantity: 1 },
            { id: "gravel", quantity: 4 },
            { id: "sand", quantity: 4 },
        ],
        result: 8,
    },
    green_glazed_terracotta: {
        name: "Green Glazed Terracotta",
        ingredients: [{ id: "green_terracotta", quantity: 1 }],
        result: 1,
    },
    green_shulker_box: {
        name: "Green Shulker Box",
        ingredients: [
            { id: "green_dye", quantity: 1 },
            { tag: "shulker_box", quantity: 1 },
        ],
        result: 1,
    },
    green_stained_glass: {
        name: "Green Stained Glass",
        ingredients: [
            { id: "green_dye", quantity: 1 },
            { id: "glass", quantity: 8 },
        ],
        result: 8,
    },
    green_stained_glass_pane: {
        name: "Green Stained Glass Pane",
        ingredients: [
            { id: "green_dye", quantity: 1 },
            { id: "glass_pane", quantity: 8 },
        ],
        result: 8,
    },
    green_terracotta: {
        name: "Green Terracotta",
        ingredients: [
            { id: "green_dye", quantity: 1 },
            { id: "terracotta", quantity: 8 },
        ],
        result: 8,
    },
    green_wool: {
        name: "Green Wool",
        ingredients: [
            { id: "green_dye", quantity: 1 },
            { tag: "wool", quantity: 1 },
        ],
        result: 1,
    },
    grindstone: {
        name: "Grindstone",
        ingredients: [
            { tag: "planks", quantity: 2 },
            { id: "stick", quantity: 2 },
            { id: "stone_slab", quantity: 1 },
        ],
        result: 1,
    },
    hanging_roots: { name: "Hanging Roots", base_item: true },
    hay_block: { name: "Hay Bale", ingredients: [{ id: "wheat", quantity: 9 }], result: 1 },
    heavy_weighted_pressure_plate: {
        name: "Heavy Weighted Pressure Plate",
        ingredients: [{ id: "iron_ingot", quantity: 2 }],
        result: 1,
    },
    honey_block: { name: "Honey Block", ingredients: [{ id: "honey_bottle", quantity: 4 }], result: 1 },
    honeycomb_block: { name: "Honeycomb Block", ingredients: [{ id: "honeycomb", quantity: 4 }], result: 1 },
    hopper: {
        name: "Hopper",
        ingredients: [
            { id: "chest", quantity: 1 },
            { id: "iron_ingot", quantity: 5 },
        ],
        result: 1,
    },
    horn_coral: { name: "Horn Coral", base_item: true },
    horn_coral_block: { name: "Horn Coral Block", base_item: true },
    horn_coral_fan: { name: "Horn Coral Fan", base_item: true },
    ice: { name: "Ice", base_item: true },
    infested_chiseled_stone_bricks: { name: "Infested Chiseled Stone Bricks", base_item: true },
    infested_cobblestone: { name: "Infested Cobblestone", base_item: true },
    infested_cracked_stone_bricks: { name: "Infested Cracked Stone Bricks", base_item: true },
    infested_deepslate: { name: "Infested Deepslate", base_item: true },
    infested_mossy_stone_bricks: { name: "Infested Mossy Stone Bricks", base_item: true },
    infested_stone: { name: "Infested Stone", base_item: true },
    infested_stone_bricks: { name: "Infested Stone Bricks", base_item: true },
    iron_bars: {
        name: "Iron Bars",
        ingredients: [{ id: "iron_ingot", quantity: 6 }],
        result: 16,
    },
    iron_block: { name: "Block of Iron", ingredients: [{ id: "iron_ingot", quantity: 9 }], result: 1 },
    iron_door: { name: "Iron Door", ingredients: [{ id: "iron_ingot", quantity: 6 }], result: 3 },
    iron_ore: { name: "Iron Ore", base_item: true },
    iron_trapdoor: { name: "Iron Trapdoor", ingredients: [{ id: "iron_ingot", quantity: 4 }], result: 2 },
    jack_o_lantern: {
        name: "Jack o'Lantern",
        ingredients: [
            { id: "carved_pumpkin", quantity: 1 },
            { id: "torch", quantity: 1 },
        ],
        result: 1,
    },
    jigsaw: { name: "Jigsaw Block", base_item: true },
    jukebox: {
        name: "Jukebox",
        ingredients: [
            { id: "diamond", quantity: 1 },
            { tag: "planks", quantity: 8 },
        ],
        result: 1,
    },
    jungle_button: { name: "Jungle Button", ingredients: [{ id: "jungle_planks", quantity: 1 }], result: 1 },
    jungle_door: { name: "Jungle Door", ingredients: [{ id: "jungle_planks", quantity: 6 }], result: 3 },
    jungle_fence: {
        name: "Jungle Fence",
        ingredients: [
            { id: "jungle_planks", quantity: 4 },
            { id: "stick", quantity: 2 },
        ],
        result: 3,
    },
    jungle_fence_gate: {
        name: "Jungle Fence Gate",
        ingredients: [
            { id: "jungle_planks", quantity: 2 },
            { id: "stick", quantity: 4 },
        ],
        result: 1,
    },
    jungle_hanging_sign: {
        name: "Jungle Hanging Sign",
        ingredients: [
            { id: "jungle_log", quantity: 6 },
            { id: "chain", quantity: 2 },
        ],
        result: 6,
    },
    jungle_leaves: { name: "Jungle Leaves", base_item: true },
    jungle_log: { name: "Jungle Log", base_item: true },
    jungle_planks: { name: "Jungle Planks", ingredients: [{ id: "jungle_log", quantity: 1 }], result: 4 },
    jungle_pressure_plate: {
        name: "Jungle Pressure Plate",
        ingredients: [{ id: "jungle_planks", quantity: 2 }],
        result: 1,
    },
    jungle_sapling: { name: "Jungle Sapling", base_item: true },
    jungle_sign: {
        name: "Jungle Sign",
        ingredients: [
            { id: "jungle_planks", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 3,
    },
    jungle_slab: { name: "Jungle Slab", ingredients: [{ id: "jungle_planks", quantity: 3 }], result: 6 },
    jungle_stairs: { name: "Jungle Stairs", ingredients: [{ id: "jungle_planks", quantity: 6 }], result: 4 },
    jungle_trapdoor: { name: "Jungle Trapdoor", ingredients: [{ id: "jungle_planks", quantity: 6 }], result: 2 },
    jungle_wood: { name: "Jungle Wood", ingredients: [{ id: "jungle_log", quantity: 4 }], result: 3 },
    kelp: { name: "Kelp", base_item: true },
    ladder: {
        name: "Ladder",
        ingredients: [{ id: "stick", quantity: 7 }],
        result: 3,
    },
    lantern: {
        name: "Lantern",
        ingredients: [
            { id: "iron_nugget", quantity: 8 },
            { id: "torch", quantity: 1 },
        ],
        result: 1,
    },
    lapis_block: { name: "Block of Lapis Lazuli", ingredients: [{ id: "lapis_lazuli", quantity: 9 }], result: 1 },
    lapis_ore: { name: "Lapis Lazuli Ore", base_item: true },
    large_amethyst_bud: { name: "Large Amethyst Bud", base_item: true },
    large_fern: { name: "Large Fern", base_item: true },
    lava: { name: "Lava", base_item: true },
    lectern: {
        name: "Lectern",
        ingredients: [
            { id: "bookshelf", quantity: 1 },
            { tag: "wood_slabs", quantity: 4 },
        ],
        result: 1,
    },
    lever: {
        name: "Lever",
        ingredients: [
            { id: "cobblestone", quantity: 1 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    light: { name: "Light Block", base_item: true },
    light_blue_banner: {
        name: "Light Blue Banner",
        ingredients: [
            { id: "light_blue_wool", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    light_blue_bed: {
        name: "Light Blue Bed",
        ingredients: [
            { id: "light_blue_wool", quantity: 3 },
            { tag: "planks", quantity: 3 },
        ],
        result: 1,
    },
    light_blue_candle: {
        name: "Light Blue Candle",
        ingredients: [
            { id: "candle", quantity: 1 },
            { id: "light_blue_dye", quantity: 1 },
        ],
        result: 1,
    },
    light_blue_carpet: { name: "Light Blue Carpet", ingredients: [{ id: "light_blue_wool", quantity: 2 }], result: 3 },
    light_blue_concrete: {
        name: "Light Blue Concrete",
        ingredients: [{ id: "light_blue_concrete_powder", quantity: 1 }],
        result: 1,
    },
    light_blue_concrete_powder: {
        name: "Light Blue Concrete Powder",
        ingredients: [
            { id: "light_blue_dye", quantity: 1 },
            { id: "gravel", quantity: 4 },
            { id: "sand", quantity: 4 },
        ],
        result: 8,
    },
    light_blue_glazed_terracotta: {
        name: "Light Blue Glazed Terracotta",
        ingredients: [{ id: "light_blue_terracotta", quantity: 1 }],
        result: 1,
    },
    light_blue_shulker_box: {
        name: "Light Blue Shulker Box",
        ingredients: [
            { id: "light_blue_dye", quantity: 1 },
            { tag: "shulker_box", quantity: 1 },
        ],
        result: 1,
    },
    light_blue_stained_glass: {
        name: "Light Blue Stained Glass",
        ingredients: [
            { id: "light_blue_dye", quantity: 1 },
            { id: "glass", quantity: 8 },
        ],
        result: 8,
    },
    light_blue_stained_glass_pane: {
        name: "Light Blue Stained Glass Pane",
        ingredients: [
            { id: "light_blue_dye", quantity: 1 },
            { id: "glass_pane", quantity: 8 },
        ],
        result: 8,
    },
    light_blue_terracotta: {
        name: "Light Blue Terracotta",
        ingredients: [
            { id: "light_blue_dye", quantity: 1 },
            { id: "terracotta", quantity: 8 },
        ],
        result: 8,
    },
    light_blue_wool: {
        name: "Light Blue Wool",
        ingredients: [
            { id: "light_blue_dye", quantity: 1 },
            { tag: "wool", quantity: 1 },
        ],
        result: 1,
    },
    light_gray_banner: {
        name: "Light Gray Banner",
        ingredients: [
            { id: "light_gray_wool", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    light_gray_bed: {
        name: "Light Gray Bed",
        ingredients: [
            { id: "light_gray_wool", quantity: 3 },
            { tag: "planks", quantity: 3 },
        ],
        result: 1,
    },
    light_gray_candle: {
        name: "Light Gray Candle",
        ingredients: [
            { id: "candle", quantity: 1 },
            { id: "light_gray_dye", quantity: 1 },
        ],
        result: 1,
    },
    light_gray_carpet: { name: "Light Gray Carpet", ingredients: [{ id: "light_gray_wool", quantity: 2 }], result: 3 },
    light_gray_concrete: {
        name: "Light Gray Concrete",
        ingredients: [{ id: "light_gray_concrete_powder", quantity: 1 }],
        result: 1,
    },
    light_gray_concrete_powder: {
        name: "Light Gray Concrete Powder",
        ingredients: [
            { id: "light_gray_dye", quantity: 1 },
            { id: "gravel", quantity: 4 },
            { id: "sand", quantity: 4 },
        ],
        result: 8,
    },
    light_gray_glazed_terracotta: {
        name: "Light Gray Glazed Terracotta",
        ingredients: [{ id: "light_gray_terracotta", quantity: 1 }],
        result: 1,
    },
    light_gray_shulker_box: {
        name: "Light Gray Shulker Box",
        ingredients: [
            { id: "light_gray_dye", quantity: 1 },
            { tag: "shulker_box", quantity: 1 },
        ],
        result: 1,
    },
    light_gray_stained_glass: {
        name: "Light Gray Stained Glass",
        ingredients: [
            { id: "light_gray_dye", quantity: 1 },
            { id: "glass", quantity: 8 },
        ],
        result: 8,
    },
    light_gray_stained_glass_pane: {
        name: "Light Gray Stained Glass Pane",
        ingredients: [
            { id: "light_gray_dye", quantity: 1 },
            { id: "glass_pane", quantity: 8 },
        ],
        result: 8,
    },
    light_gray_terracotta: {
        name: "Light Gray Terracotta",
        ingredients: [
            { id: "light_gray_dye", quantity: 1 },
            { id: "terracotta", quantity: 8 },
        ],
        result: 8,
    },
    light_gray_wool: {
        name: "Light Gray Wool",
        ingredients: [
            { id: "light_gray_dye", quantity: 1 },
            { tag: "wool", quantity: 1 },
        ],
        result: 1,
    },
    light_weighted_pressure_plate: {
        name: "Light Weighted Pressure Plate",
        ingredients: [{ id: "gold_ingot", quantity: 2 }],
        result: 1,
    },
    lightning_rod: { name: "Lightning Rod", ingredients: [{ id: "copper", quantity: 3 }], result: 1 },
    lilac: { name: "Lilac", base_item: true },
    lily_of_the_valley: { name: "Lily of the Valley", base_item: true },
    lily_pad: { name: "Lily Pad", base_item: true },
    lime_banner: {
        name: "Lime Banner",
        ingredients: [
            { id: "lime_wool", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    lime_bed: {
        name: "Lime Bed",
        ingredients: [
            { id: "lime_wool", quantity: 3 },
            { tag: "planks", quantity: 3 },
        ],
        result: 1,
    },
    lime_candle: {
        name: "Lime Candle",
        ingredients: [
            { id: "candle", quantity: 1 },
            { id: "lime_dye", quantity: 1 },
        ],
        result: 1,
    },
    lime_carpet: { name: "Lime Carpet", ingredients: [{ id: "lime_wool", quantity: 2 }], result: 3 },
    lime_concrete: { name: "Lime Concrete", ingredients: [{ id: "lime_concrete_powder", quantity: 1 }], result: 1 },
    lime_concrete_powder: {
        name: "Lime Concrete Powder",
        ingredients: [
            { id: "lime_dye", quantity: 1 },
            { id: "gravel", quantity: 4 },
            { id: "sand", quantity: 4 },
        ],
        result: 8,
    },
    lime_glazed_terracotta: {
        name: "Lime Glazed Terracotta",
        ingredients: [{ id: "lime_terracotta", quantity: 1 }],
        result: 1,
    },
    lime_shulker_box: {
        name: "Lime Shulker Box",
        ingredients: [
            { id: "lime_dye", quantity: 1 },
            { tag: "shulker_box", quantity: 1 },
        ],
        result: 1,
    },
    lime_stained_glass: {
        name: "Lime Stained Glass",
        ingredients: [
            { id: "lime_dye", quantity: 1 },
            { id: "glass", quantity: 8 },
        ],
        result: 8,
    },
    lime_stained_glass_pane: {
        name: "Lime Stained Glass Pane",
        ingredients: [
            { id: "lime_dye", quantity: 1 },
            { id: "glass_pane", quantity: 8 },
        ],
        result: 8,
    },
    lime_terracotta: {
        name: "Lime Terracotta",
        ingredients: [
            { id: "lime_dye", quantity: 1 },
            { id: "terracotta", quantity: 8 },
        ],
        result: 8,
    },
    lime_wool: {
        name: "Lime Wool",
        ingredients: [
            { id: "lime_dye", quantity: 1 },
            { tag: "wool", quantity: 1 },
        ],
        result: 1,
    },
    lodestone: {
        name: "Lodestone",
        ingredients: [
            { id: "chiseled_stone_bricks", quantity: 8 },
            { id: "netherite_ingot", quantity: 1 },
        ],
        result: 1,
    },
    loom: {
        name: "Loom",
        ingredients: [
            { id: "string", quantity: 2 },
            { tag: "planks", quantity: 2 },
        ],
        result: 1,
    },
    magenta_banner: {
        name: "Magenta Banner",
        ingredients: [
            { id: "magenta_wool", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    magenta_bed: {
        name: "Magenta Bed",
        ingredients: [
            { id: "magenta_wool", quantity: 3 },
            { tag: "planks", quantity: 3 },
        ],
        result: 1,
    },
    magenta_candle: {
        name: "Magenta Candle",
        ingredients: [
            { id: "candle", quantity: 1 },
            { id: "magenta_dye", quantity: 1 },
        ],
        result: 1,
    },
    magenta_carpet: { name: "Magenta Carpet", ingredients: [{ id: "magenta_wool", quantity: 2 }], result: 3 },
    magenta_concrete: {
        name: "Magenta Concrete",
        ingredients: [{ id: "magenta_concrete_powder", quantity: 1 }],
        result: 1,
    },
    magenta_concrete_powder: {
        name: "Magenta Concrete Powder",
        ingredients: [
            { id: "magenta_dye", quantity: 1 },
            { id: "gravel", quantity: 4 },
            { id: "sand", quantity: 4 },
        ],
        result: 8,
    },
    magenta_glazed_terracotta: {
        name: "Magenta Glazed Terracotta",
        ingredients: [{ id: "magenta_terracotta", quantity: 1 }],
        result: 1,
    },
    magenta_shulker_box: {
        name: "Magenta Shulker Box",
        ingredients: [
            { id: "magenta_dye", quantity: 1 },
            { tag: "shulker_box", quantity: 1 },
        ],
        result: 1,
    },
    magenta_stained_glass: {
        name: "Magenta Stained Glass",
        ingredients: [
            { id: "magenta_dye", quantity: 1 },
            { id: "glass", quantity: 8 },
        ],
        result: 8,
    },
    magenta_stained_glass_pane: {
        name: "Magenta Stained Glass Pane",
        ingredients: [
            { id: "magenta_dye", quantity: 1 },
            { id: "glass_pane", quantity: 8 },
        ],
        result: 8,
    },
    magenta_terracotta: {
        name: "Magenta Terracotta",
        ingredients: [
            { id: "magenta_dye", quantity: 1 },
            { id: "terracotta", quantity: 8 },
        ],
        result: 8,
    },
    magenta_wool: {
        name: "Magenta Wool",
        ingredients: [
            { id: "magenta_dye", quantity: 1 },
            { tag: "wool", quantity: 1 },
        ],
        result: 1,
    },
    magma_block: { name: "Magma Block", base_item: true },
    mangrove_button: { name: "Mangrove Button", ingredients: [{ id: "mangrove_planks", quantity: 1 }], result: 1 },
    mangrove_door: { name: "Mangrove Door", ingredients: [{ id: "mangrove_planks", quantity: 6 }], result: 3 },
    mangrove_fence: {
        name: "Mangrove Fence",
        ingredients: [
            { id: "mangrove_planks", quantity: 4 },
            { id: "stick", quantity: 2 },
        ],
        result: 3,
    },
    mangrove_fence_gate: {
        name: "Mangrove Fence Gate",
        ingredients: [
            { id: "mangrove_planks", quantity: 2 },
            { id: "stick", quantity: 4 },
        ],
        result: 1,
    },
    mangrove_hanging_sign: {
        name: "Mangrove Hanging Sign",
        ingredients: [
            { id: "mangrove_log", quantity: 6 },
            { id: "chain", quantity: 2 },
        ],
        result: 6,
    },
    mangrove_leaves: { name: "Mangrove Leaves", base_item: true },
    mangrove_log: { name: "Mangrove Log", base_item: true },
    mangrove_pressure_plate: {
        name: "Mangrove Pressure Plate",
        ingredients: [{ id: "mangrove_planks", quantity: 2 }],
        result: 1,
    },
    mangrove_propagule: { name: "Mangrove Propagule", base_item: true },
    mangrove_planks: { name: "Mangrove Planks", ingredients: [{ id: "mangrove_log", quantity: 1 }], result: 4 },
    mangrove_roots: { name: "Mangrove Roots", base_item: true },
    mangrove_sign: {
        name: "Mangrove Sign",
        ingredients: [
            { id: "mangrove_planks", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 3,
    },
    mangrove_slab: { name: "Mangrove Slab", ingredients: [{ id: "mangrove_planks", quantity: 3 }], result: 6 },
    mangrove_stairs: { name: "Mangrove Stairs", ingredients: [{ id: "mangrove_planks", quantity: 6 }], result: 4 },
    mangrove_trapdoor: { name: "Mangrove Trapdoor", ingredients: [{ id: "mangrove_planks", quantity: 6 }], result: 2 },
    mangrove_wood: { name: "Mangrove Wood", ingredients: [{ id: "mangrove_log", quantity: 4 }], result: 3 },
    medium_amedyst_bud: { name: "Medium Amethyst Bud", base_item: true },
    melon: { name: "Melon", base_item: true },
    melon_stem: { name: "Melon Stem", ingredients: [{ id: "melon_seeds", quantity: 1 }], result: 1 },
    moss_block: { name: "Moss Block", base_item: true },
    moss_carpet: { name: "Moss Carpet", ingredients: [{ id: "moss_block", quantity: 2 }], result: 3 },
    mossy_cobblestone: { name: "Mossy Cobblestone", base_item: true },
    mossy_cobblestone_slab: {
        name: "Mossy Cobblestone Slab",
        ingredients: [{ id: "mossy_cobblestone", quantity: 3 }],
        result: 6,
    },
    mossy_cobblestone_stairs: {
        name: "Mossy Cobblestone Stairs",
        ingredients: [{ id: "mossy_cobblestone", quantity: 6 }],
        result: 4,
    },
    mossy_cobblestone_wall: {
        name: "Mossy Cobblestone Wall",
        ingredients: [{ id: "mossy_cobblestone", quantity: 6 }],
        result: 6,
    },
    mossy_stone_brick_slab: {
        name: "Mossy Stone Brick Slab",
        ingredients: [{ id: "mossy_stone_bricks", quantity: 3 }],
        result: 6,
    },
    mossy_stone_brick_stairs: {
        name: "Mossy Stone Brick Stairs",
        ingredients: [{ id: "mossy_stone_bricks", quantity: 6 }],
        result: 4,
    },
    mossy_stone_brick_wall: {
        name: "Mossy Stone Brick Wall",
        ingredients: [{ id: "mossy_stone_bricks", quantity: 6 }],
        result: 6,
    },
    mossy_stone_bricks: { name: "Mossy Stone Bricks", base_item: true },
    mud: {
        name: "Mud",
        ingredients: [
            { id: "dirt", quantity: 1 },
            { id: "water_bottle", quantity: 1 },
        ],
        result: 1,
    },
    mud_brick_slab: { name: "Mud Brick Slab", ingredients: [{ id: "mud_bricks", quantity: 3 }], result: 6 },
    mud_brick_stairs: { name: "Mud Brick Stairs", ingredients: [{ id: "mud_bricks", quantity: 6 }], result: 4 },
    mud_brick_wall: { name: "Mud Brick Wall", ingredients: [{ id: "mud_bricks", quantity: 6 }], result: 6 },
    mud_bricks: { name: "Mud Bricks", ingredients: [{ id: "packed_mud", quantity: 4 }], result: 4 },
    muddy_mangrove_roots: {
        name: "Muddy Mangrove Roots",
        ingredients: [
            { id: "mangrove_roots", quantity: 1 },
            { id: "mud", quantity: 1 },
        ],
        result: 1,
    },
    mushroom_stem: { name: "Mushroom Stem", base_item: true },
    mycelium: { name: "Mycelium", base_item: true },
    nether_brick_fence: {
        name: "Nether Brick Fence",
        ingredients: [
            { id: "nether_bricks", quantity: 4 },
            { id: "nether_brick", quantity: 2 },
        ],
        result: 3,
    },
    nether_brick_slab: { name: "Nether Brick Slab", ingredients: [{ id: "nether_bricks", quantity: 3 }], result: 6 },
    nether_brick_stairs: {
        name: "Nether Brick Stairs",
        ingredients: [{ id: "nether_bricks", quantity: 6 }],
        result: 4,
    },
    nether_brick_wall: { name: "Nether Brick Wall", ingredients: [{ id: "nether_bricks", quantity: 6 }], result: 6 },
    nether_bricks: { name: "Nether Bricks", ingredients: [{ id: "nether_brick", quantity: 4 }], result: 4 },
    nether_gold_ore: { name: "Nether Gold Ore", base_item: true },
    nether_quartz_ore: { name: "Nether Quartz Ore", base_item: true },
    nether_sprouts: { name: "Nether Sprouts", base_item: true },
    nether_wart: { name: "Nether Wart", base_item: true },
    nether_wart_block: { name: "Nether Wart Block", ingredients: [{ id: "nether_wart", quantity: 9 }], result: 1 },
    netherrack: { name: "Netherrack", base_item: true },
    note_block: {
        name: "Note Block",
        ingredients: [
            { id: "redstone", quantity: 1 },
            { tag: "planks", quantity: 8 },
        ],
        result: 1,
    },
    oak_button: { name: "Oak Button", ingredients: [{ id: "oak_planks", quantity: 1 }], result: 1 },
    oak_door: { name: "Oak Door", ingredients: [{ id: "oak_planks", quantity: 6 }], result: 3 },
    oak_fence: {
        name: "Oak Fence",
        ingredients: [
            { id: "oak_planks", quantity: 4 },
            { id: "stick", quantity: 2 },
        ],
        result: 3,
    },
    oak_fence_gate: {
        name: "Oak Fence Gate",
        ingredients: [
            { id: "oak_planks", quantity: 2 },
            { id: "stick", quantity: 4 },
        ],
        result: 1,
    },
    oak_hanging_sign: {
        name: "Oak Hanging Sign",
        ingredients: [
            { id: "oak_log", quantity: 6 },
            { id: "chain", quantity: 2 },
        ],
        result: 6,
    },
    oak_leaves: { name: "Oak Leaves", base_item: true },
    oak_log: { name: "Oak Log", base_item: true },
    oak_planks: { name: "Oak Planks", ingredients: [{ id: "oak_log", quantity: 1 }], result: 4 },
    oak_pressure_plate: {
        name: "Oak Pressure Plate",
        ingredients: [{ id: "oak_planks", quantity: 2 }],
        result: 1,
    },
    oak_sapling: { name: "Oak Sapling", base_item: true },
    oak_sign: {
        name: "Oak Sign",
        ingredients: [
            { id: "oak_planks", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 3,
    },
    oak_slab: { name: "Oak Slab", ingredients: [{ id: "oak_planks", quantity: 3 }], result: 6 },
    oak_stairs: { name: "Oak Stairs", ingredients: [{ id: "oak_planks", quantity: 6 }], result: 4 },
    oak_trapdoor: { name: "Oak Trapdoor", ingredients: [{ id: "oak_planks", quantity: 6 }], result: 2 },
    oak_wood: { name: "Oak Wood", ingredients: [{ id: "oak_log", quantity: 4 }], result: 3 },
    observer: {
        name: "Observer",
        ingredients: [
            { id: "nether_quartz", quantity: 1 },
            { id: "cobblestone", quantity: 6 },
            { id: "redstone", quantity: 2 },
        ],
        result: 1,
    },
    obsidian: { name: "Obsidian", base_item: true },
    ochre_froglight: { name: "Ochre Froglight", base_item: true },
    orange_banner: {
        name: "Orange Banner",
        ingredients: [
            { id: "orange_wool", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    orange_bed: {
        name: "Orange Bed",
        ingredients: [
            { id: "orange_wool", quantity: 3 },
            { tag: "planks", quantity: 3 },
        ],
        result: 1,
    },
    orange_candle: {
        name: "Orange Candle",
        ingredients: [
            { id: "candle", quantity: 1 },
            { id: "orange_dye", quantity: 1 },
        ],
        result: 1,
    },
    orange_carpet: { name: "Orange Carpet", ingredients: [{ id: "orange_wool", quantity: 2 }], result: 3 },
    orange_concrete: {
        name: "Orange Concrete",
        ingredients: [{ id: "orange_concrete_powder", quantity: 1 }],
        result: 1,
    },
    orange_concrete_powder: {
        name: "Orange Concrete Powder",
        ingredients: [
            { id: "orange_dye", quantity: 1 },
            { id: "gravel", quantity: 4 },
            { id: "sand", quantity: 4 },
        ],
        result: 8,
    },
    orange_glazed_terracotta: {
        name: "Orange Glazed Terracotta",
        ingredients: [{ id: "orange_terracotta", quantity: 1 }],
        result: 1,
    },
    orange_shulker_box: {
        name: "Orange Shulker Box",
        ingredients: [
            { id: "orange_dye", quantity: 1 },
            { tag: "shulker_box", quantity: 1 },
        ],
        result: 1,
    },
    orange_stained_glass: {
        name: "Orange Stained Glass",
        ingredients: [
            { id: "orange_dye", quantity: 1 },
            { id: "glass", quantity: 8 },
        ],
        result: 8,
    },
    orange_stained_glass_pane: {
        name: "Orange Stained Glass Pane",
        ingredients: [
            { id: "orange_dye", quantity: 1 },
            { id: "glass_pane", quantity: 8 },
        ],
        result: 8,
    },
    orange_terracotta: {
        name: "Orange Terracotta",
        ingredients: [
            { id: "orange_dye", quantity: 1 },
            { id: "terracotta", quantity: 8 },
        ],
        result: 8,
    },
    orange_tulip: { name: "Orange Tulip", base_item: true },
    orange_wool: {
        name: "Orange Wool",
        ingredients: [
            { id: "orange_dye", quantity: 1 },
            { tag: "wool", quantity: 1 },
        ],
        result: 1,
    },
    oxeye_daisy: { name: "Oxeye Daisy", base_item: true },
    oxidized_copper: { name: "Oxidized Copper", ingredients: [{ id: "weathered_copper", quantity: 1 }], result: 1 },
    oxidized_cut_copper: {
        name: "Oxidized Cut Copper",
        ingredients: [{ id: "weathered_cut_copper", quantity: 1 }],
        result: 1,
    },
    oxidized_cut_copper_slab: {
        name: "Oxidized Cut Copper Slab",
        ingredients: [{ id: "weathered_cut_copper_slab", quantity: 1 }],
        result: 1,
    },
    oxidized_cut_copper_stairs: {
        name: "Oxidized Cut Copper Stairs",
        ingredients: [{ id: "weathered_cut_copper_stairs", quantity: 1 }],
        result: 1,
    },
    packed_ice: { name: "Packed Ice", base_item: true },
    packed_mud: {
        name: "Packed Mud",
        ingredients: [
            { id: "mud", quantity: 1 },
            { id: "wheat", quantity: 1 },
        ],
        result: 1,
    },
    pearlescent_froglight: { name: "Pearlescent Froglight", base_item: true },
    peony: { name: "Peony", base_item: true },
    petrified_oak_slab: { name: "Petrified Oak Slab", base_item: true },
    piglin_head: { name: "Piglin Head", base_item: true },
    pink_banner: {
        name: "Pink Banner",
        ingredients: [
            { id: "pink_wool", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    pink_bed: {
        name: "Pink Bed",
        ingredients: [
            { id: "pink_wool", quantity: 3 },
            { tag: "planks", quantity: 3 },
        ],
        result: 1,
    },
    pink_candle: {
        name: "Pink Candle",
        ingredients: [
            { id: "candle", quantity: 1 },
            { id: "pink_dye", quantity: 1 },
        ],
        result: 1,
    },
    pink_carpet: { name: "Pink Carpet", ingredients: [{ id: "pink_wool", quantity: 2 }], result: 3 },
    pink_concrete: { name: "Pink Concrete", ingredients: [{ id: "pink_concrete_powder", quantity: 1 }], result: 1 },
    pink_concrete_powder: {
        name: "Pink Concrete Powder",
        ingredients: [
            { id: "pink_dye", quantity: 1 },
            { id: "gravel", quantity: 4 },
            { id: "sand", quantity: 4 },
        ],
        result: 8,
    },
    pink_petals: { name: "Pink Petals", base_item: true },
    pink_glazed_terracotta: {
        name: "Pink Glazed Terracotta",
        ingredients: [{ id: "pink_terracotta", quantity: 1 }],
        result: 1,
    },
    pink_shulker_box: {
        name: "Pink Shulker Box",
        ingredients: [
            { id: "pink_dye", quantity: 1 },
            { tag: "shulker_box", quantity: 1 },
        ],
        result: 1,
    },
    pink_stained_glass: {
        name: "Pink Stained Glass",
        ingredients: [
            { id: "pink_dye", quantity: 1 },
            { id: "glass", quantity: 8 },
        ],
        result: 8,
    },
    pink_stained_glass_pane: {
        name: "Pink Stained Glass Pane",
        ingredients: [
            { id: "pink_dye", quantity: 1 },
            { id: "glass_pane", quantity: 8 },
        ],
        result: 8,
    },
    pink_terracotta: {
        name: "Pink Terracotta",
        ingredients: [
            { id: "pink_dye", quantity: 1 },
            { id: "terracotta", quantity: 8 },
        ],
        result: 8,
    },
    pink_tulip: { name: "Pink Tulip", base_item: true },
    pink_wool: {
        name: "Pink Wool",
        ingredients: [
            { id: "pink_dye", quantity: 1 },
            { tag: "wool", quantity: 1 },
        ],
        result: 1,
    },
    pitcher_crop: { name: "Pitcher Crop", base_item: true },
    pitcher_plant: { name: "Pitcher Plant", base_item: true },
    piston: {
        name: "Piston",
        ingredients: [
            { id: "iron_ingot", quantity: 3 },
            { id: "redstone", quantity: 4 },
            { tag: "planks", quantity: 4 },
            { id: "cobblestone", quantity: 4 },
        ],
        result: 1,
    },
    player_head: { name: "Player Head", base_item: true },
    podzol: { name: "Podzol", base_item: true },
    pointed_dripstone: { name: "Pointed Dripstone", base_item: true },
    polished_andesite: { name: "Polished Andesite", ingredients: [{ id: "andesite", quantity: 4 }], result: 4 },
    polished_andesite_slab: { name: "Polished Andesite Slab", ingredients: [{ id: "polished_andesite", quantity: 3 }], result: 6 },
    polished_andesite_stairs: {
        name: "Polished Andesite Stairs",
        ingredients: [{ id: "polished_andesite", quantity: 6 }],
        result: 4,
    },
    polished_basalt: { name: "Polished Basalt", ingredients: [{ id: "basalt", quantity: 4 }], result: 4 },
    polished_blackstone: { name: "Polished Blackstone", ingredients: [{ id: "blackstone", quantity: 4 }], result: 4 },
    polished_blackstone_brick_slab: {
        name: "Polished Blackstone Brick Slab",
        ingredients: [{ id: "polished_blackstone_bricks", quantity: 3 }],
        result: 6,
    },
    polished_blackstone_brick_stairs: {
        name: "Polished Blackstone Brick Stairs",
        ingredients: [{ id: "polished_blackstone_bricks", quantity: 6 }],
        result: 4,
    },
    polished_blackstone_brick_wall: {
        name: "Polished Blackstone Brick Wall",
        ingredients: [{ id: "polished_blackstone_bricks", quantity: 6 }],
        result: 6,
    },
    polished_blackstone_bricks: { name: "Polished Blackstone Bricks", ingredients: [{ id: "blackstone", quantity: 4 }], result: 4 },
    polished_blackstone_button: {
        name: "Polished Blackstone Button",
        ingredients: [{ id: "polished_blackstone", quantity: 1 }],
        result: 1,
    },
    polished_blackstone_pressure_plate: {
        name: "Polished Blackstone Pressure Plate",
        ingredients: [{ id: "polished_blackstone", quantity: 2 }],
        result: 1,
    },
    polished_blackstone_slab: {
        name: "Polished Blackstone Slab",
        ingredients: [{ id: "polished_blackstone", quantity: 3 }],
        result: 6,
    },
    polished_blackstone_stairs: {
        name: "Polished Blackstone Stairs",
        ingredients: [{ id: "polished_blackstone", quantity: 6 }],
        result: 4,
    },
    polished_blackstone_wall: {
        name: "Polished Blackstone Wall",
        ingredients: [{ id: "polished_blackstone", quantity: 6 }],
        result: 6,
    },
    polished_deepslate: { name: "Polished Deepslate", ingredients: [{ id: "deepslate", quantity: 4 }], result: 4 },
    polished_deepslate_slab: { name: "Polished Deepslate Slab", ingredients: [{ id: "polished_deepslate", quantity: 3 }], result: 6 },
    polished_deepslate_stairs: {
        name: "Polished Deepslate Stairs",
        ingredients: [{ id: "polished_deepslate", quantity: 6 }],
        result: 4,
    },
    polished_deepslate_wall: {
        name: "Polished Deepslate Wall",
        ingredients: [{ id: "polished_deepslate", quantity: 6 }],
        result: 6,
    },
    polished_diorite: { name: "Polished Diorite", ingredients: [{ id: "diorite", quantity: 4 }], result: 4 },
    polished_diorite_slab: { name: "Polished Diorite Slab", ingredients: [{ id: "polished_diorite", quantity: 3 }], result: 6 },
    polished_diorite_stairs: {
        name: "Polished Diorite Stairs",
        ingredients: [{ id: "polished_diorite", quantity: 6 }],
        result: 4,
    },
    polished_granite: { name: "Polished Granite", ingredients: [{ id: "granite", quantity: 4 }], result: 4 },
    polished_granite_slab: { name: "Polished Granite Slab", ingredients: [{ id: "polished_granite", quantity: 3 }], result: 6 },
    polished_granite_stairs: {
        name: "Polished Granite Stairs",
        ingredients: [{ id: "polished_granite", quantity: 6 }],
        result: 4,
    },
    poppy: { name: "Poppy", base_item: true },
    potatoes: { name: "Potatoes", ingredients: [{ id: "potato", quantity: 1 }], result: 1 },
    powder_snow: { name: "Powder Snow", base_item: true },
    powered_rail: {
        name: "Powered Rail",
        ingredients: [
            { id: "gold_ingot", quantity: 6 },
            { id: "stick", quantity: 1 },
            { id: "redstone", quantity: 1 },
        ],
        result: 6,
    },
    prismarine: { name: "Prismarine", ingredients: [{ id: "prismarine_shard", quantity: 4 }], result: 1 },
    prismarine_brick_slab: { name: "Prismarine Brick Slab", ingredients: [{ id: "prismarine_bricks", quantity: 3 }], result: 6 },
    prismarine_brick_stairs: {
        name: "Prismarine Brick Stairs",
        ingredients: [{ id: "prismarine_bricks", quantity: 6 }],
        result: 4,
    },
    prismarine_bricks: { name: "Prismarine Bricks", ingredients: [{ id: "prismarine_shard", quantity: 4 }], result: 4 },
    prismarine_slab: { name: "Prismarine Slab", ingredients: [{ id: "prismarine", quantity: 3 }], result: 6 },
    prismarine_stairs: { name: "Prismarine Stairs", ingredients: [{ id: "prismarine", quantity: 6 }], result: 4 },
    prismarine_wall: { name: "Prismarine Wall", ingredients: [{ id: "prismarine", quantity: 6 }], result: 6 },
    pumpkin: { name: "Pumpkin", base_item: true },
    pumpkin_stem: { name: "Pumpkin Stem", ingredients: [{ id: "pumpkin_seeds", quantity: 1 }], result: 1 },
    purple_banner: {
        name: "Purple Banner",
        ingredients: [
            { id: "purple_wool", quantity: 6 },
            { id: "stick", quantity: 1 },
        ],
        result: 1,
    },
    purple_bed: {
        name: "Purple Bed",
        ingredients: [
            { id: "purple_wool", quantity: 3 },
            { tag: "planks", quantity: 3 },
        ],
        result: 1,
    },
    purple_candle: {
        name: "Purple Candle",
        ingredients: [
            { id: "candle", quantity: 1 },
            { id: "purple_dye", quantity: 1 },
        ],
        result: 1,
    },
    purple_carpet: { name: "Purple Carpet", ingredients: [{ id: "purple_wool", quantity: 2 }], result: 3 },
    purple_concrete: { name: "Purple Concrete", ingredients: [{ id: "purple_concrete_powder", quantity: 1 }], result: 1 },
});

/** @type {Object.<string, string[]}>} */
export const Tags = Object.freeze({
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
    // any wood, log, stem, and stripped variants
    wood: [
        "acacia_log",
        "acacia_wood",
        "birch_log",
        "birch_wood",
        "crimson_stem",
        "crimson_hyphae",
        "dark_oak_log",
        "dark_oak_wood",
        "jungle_log",
        "jungle_wood",
        "oak_log",
        "oak_wood",
        "spruce_log",
        "spruce_wood",
        "warped_stem",
        "warped_hyphae",
        "stripped_acacia_log",
        "stripped_acacia_wood",
        "stripped_birch_log",
        "stripped_birch_wood",
        "stripped_crimson_stem",
        "stripped_crimson_hyphae",
        "stripped_dark_oak_log",
        "stripped_dark_oak_wood",
        "stripped_jungle_log",
        "stripped_jungle_wood",
        "stripped_oak_log",
        "stripped_oak_wood",
        "stripped_spruce_log",
        "stripped_spruce_wood",
        "stripped_warped_stem",
        "stripped_warped_hyphae",
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
