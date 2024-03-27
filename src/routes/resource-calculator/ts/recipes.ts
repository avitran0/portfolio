import type { Item } from "./types";

export const Items: Record<string, Item> = {
    acacia_boat: {
        name: "Acacia Boat",
        id: "acacia_boat",
        recipe: {
            ingredients: [
                {
                    id: "acacia_planks",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    acacia_button: {
        name: "Acacia Button",
        id: "acacia_button",
        recipe: {
            ingredients: [
                {
                    id: "acacia_planks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    acacia_chest_boat: {
        name: "Acacia Chest Boat",
        id: "acacia_chest_boat",
        recipe: {
            ingredients: [
                {
                    id: "acacia_boat",
                    quantity: 1,
                },
                {
                    id: "chest",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    acacia_door: {
        name: "Acacia Door",
        id: "acacia_door",
        recipe: {
            ingredients: [
                {
                    id: "acacia_planks",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    acacia_fence: {
        name: "Acacia Fence",
        id: "acacia_fence",
        recipe: {
            ingredients: [
                {
                    id: "acacia_planks",
                    quantity: 4,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    acacia_fence_gate: {
        name: "Acacia Fence Gate",
        id: "acacia_fence_gate",
        recipe: {
            ingredients: [
                {
                    id: "acacia_planks",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    acacia_hanging_sign: {
        name: "Acacia Hanging Sign",
        id: "acacia_hanging_sign",
        recipe: {
            ingredients: [
                {
                    id: "acacia_log",
                    quantity: 6,
                },
                {
                    id: "chain",
                    quantity: 2,
                },
            ],
            result: 6,
        },
    },
    acacia_leaves: {
        name: "Acacia Leaves",
        id: "acacia_leaves",
        recipe: {
            baseItem: true,
        },
    },
    acacia_log: {
        name: "Acacia Log",
        id: "acacia_log",
        recipe: {
            baseItem: true,
        },
    },
    acacia_planks: {
        name: "Acacia Planks",
        id: "acacia_planks",
        recipe: {
            ingredients: [
                {
                    id: "acacia_log",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    acacia_pressure_plate: {
        name: "Acacia Pressure Plate",
        id: "acacia_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "acacia_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    acacia_sapling: {
        name: "Acacia Sapling",
        id: "acacia_sapling",
        recipe: {
            baseItem: true,
        },
    },
    acacia_sign: {
        name: "Acacia Sign",
        id: "acacia_sign",
        recipe: {
            ingredients: [
                {
                    id: "acacia_planks",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 3,
        },
    },
    acacia_slab: {
        name: "Acacia Slab",
        id: "acacia_slab",
        recipe: {
            ingredients: [
                {
                    id: "acacia_planks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    acacia_stairs: {
        name: "Acacia Stairs",
        id: "acacia_stairs",
        recipe: {
            ingredients: [
                {
                    id: "acacia_planks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    acacia_trapdoor: {
        name: "Acacia Trapdoor",
        id: "acacia_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "acacia_planks",
                    quantity: 6,
                },
            ],
            result: 2,
        },
    },
    acacia_wood: {
        name: "Acacia Wood",
        id: "acacia_wood",
        recipe: {
            ingredients: [
                {
                    id: "acacia_log",
                    quantity: 4,
                },
            ],
            result: 3,
        },
    },
    activator_rail: {
        name: "Activator Rail",
        id: "activator_rail",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 6,
                },
                {
                    id: "redstone_torch",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 6,
        },
    },
    air: {
        name: "Air",
        id: "air",
        recipe: {
            baseItem: true,
        },
    },
    allium: {
        name: "Allium",
        id: "allium",
        recipe: {
            baseItem: true,
        },
    },
    amethyst_block: {
        name: "Block of Amethyst",
        id: "amethyst_block",
        recipe: {
            ingredients: [
                {
                    id: "amethyst_shard",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    amethyst_cluster: {
        name: "Amethyst Cluster",
        id: "amethyst_cluster",
        recipe: {
            baseItem: true,
        },
    },
    amethyst_shard: {
        name: "Amethyst Shard",
        id: "amethyst_shard",
        recipe: {
            ingredients: [
                {
                    id: "amethyst_cluster",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    ancient_debris: {
        name: "Ancient Debris",
        id: "ancient_debris",
        recipe: {
            baseItem: true,
        },
    },
    andesite: {
        name: "Andesite",
        id: "andesite",
        recipe: {
            baseItem: true,
        },
    },
    andesite_slab: {
        name: "Andesite Slab",
        id: "andesite_slab",
        recipe: {
            ingredients: [
                {
                    id: "andesite",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    andesite_stairs: {
        name: "Andesite Stairs",
        id: "andesite_stairs",
        recipe: {
            ingredients: [
                {
                    id: "andesite",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    andesite_wall: {
        name: "Andesite Wall",
        id: "andesite_wall",
        recipe: {
            ingredients: [
                {
                    id: "andesite",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    anvil: {
        name: "Anvil",
        id: "anvil",
        recipe: {
            ingredients: [
                {
                    id: "iron_block",
                    quantity: 3,
                },
                {
                    id: "iron_ingot",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    apple: {
        name: "Apple",
        id: "apple",
        recipe: {
            baseItem: true,
        },
    },
    armor_stand: {
        name: "Armor Stand",
        id: "armor_stand",
        recipe: {
            ingredients: [
                {
                    id: "smooth_stone_slab",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 6,
                },
            ],
            result: 1,
        },
    },
    arrow: {
        name: "Arrow",
        id: "arrow",
        recipe: {
            ingredients: [
                {
                    id: "feather",
                    quantity: 1,
                },
                {
                    id: "flint",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    axolotl_bucket: {
        name: "Bucket of Axolotl",
        id: "axolotl_bucket",
        recipe: {
            ingredients: [
                {
                    id: "bucket",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    azalea: {
        name: "Azalea",
        id: "azalea",
        recipe: {
            baseItem: true,
        },
    },
    azalea_leaves: {
        name: "Azalea Leaves",
        id: "azalea_leaves",
        recipe: {
            baseItem: true,
        },
    },
    azure_bluet: {
        name: "Azure Bluet",
        id: "azure_bluet",
        recipe: {
            baseItem: true,
        },
    },
    baked_potato: {
        name: "Baked Potato",
        id: "baked_potato",
        recipe: {
            ingredients: [
                {
                    id: "potato",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    bamboo: {
        name: "Bamboo",
        id: "bamboo",
        recipe: {
            baseItem: true,
        },
    },
    bamboo_block: {
        name: "Block of Bamboo",
        id: "bamboo_block",
        recipe: {
            ingredients: [
                {
                    id: "bamboo",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    bamboo_button: {
        name: "Bamboo Button",
        id: "bamboo_button",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_planks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    bamboo_chest_raft: {
        name: "Bamboo Chest Raft",
        id: "bamboo_chest_raft",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_raft",
                    quantity: 1,
                },
                {
                    id: "chest",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    bamboo_door: {
        name: "Bamboo Door",
        id: "bamboo_door",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_planks",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    bamboo_fence: {
        name: "Bamboo Fence",
        id: "bamboo_fence",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_planks",
                    quantity: 4,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    bamboo_fence_gate: {
        name: "Bamboo Fence Gate",
        id: "bamboo_fence_gate",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_planks",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    bamboo_hanging_sign: {
        name: "Bamboo Hanging Sign",
        id: "bamboo_hanging_sign",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_block",
                    quantity: 6,
                },
                {
                    id: "chain",
                    quantity: 2,
                },
            ],
            result: 6,
        },
    },
    bamboo_mosaic: {
        name: "Bamboo Mosaic",
        id: "bamboo_mosaic",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_slab",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    bamboo_mosaic_slab: {
        name: "Bamboo Mosaic Slab",
        id: "bamboo_mosaic_slab",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_mosaic",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    bamboo_mosaic_stairs: {
        name: "Bamboo Mosaic Stairs",
        id: "bamboo_mosaic_stairs",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_mosaic",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    bamboo_planks: {
        name: "Bamboo Planks",
        id: "bamboo_planks",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_block",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    bamboo_pressure_plate: {
        name: "Bamboo Pressure Plate",
        id: "bamboo_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    bamboo_raft: {
        name: "Bamboo Raft",
        id: "bamboo_raft",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_planks",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    bamboo_sapling: {
        name: "Bamboo Shoot",
        id: "bamboo_sapling",
        recipe: {
            baseItem: true,
        },
    },
    bamboo_sign: {
        name: "Bamboo Sign",
        id: "bamboo_sign",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_planks",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 3,
        },
    },
    bamboo_slab: {
        name: "Bamboo Slab",
        id: "bamboo_slab",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_planks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    bamboo_stairs: {
        name: "Bamboo Stairs",
        id: "bamboo_stairs",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_planks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    bamboo_trapdoor: {
        name: "Bamboo Trapdoor",
        id: "bamboo_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "bamboo_planks",
                    quantity: 6,
                },
            ],
            result: 2,
        },
    },
    barrel: {
        name: "Barrel",
        id: "barrel",
        recipe: {
            ingredients: [
                {
                    id: "tag_planks",
                    quantity: 6,
                },
                {
                    id: "tag_wood_slabs",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    barrier: {
        name: "Barrier",
        id: "barrier",
        recipe: {
            baseItem: true,
        },
    },
    basalt: {
        name: "Basalt",
        id: "basalt",
        recipe: {
            baseItem: true,
        },
    },
    beacon: {
        name: "Beacon",
        id: "beacon",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 5,
                },
                {
                    id: "nether_star",
                    quantity: 1,
                },
                {
                    id: "obsidian",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    bedrock: {
        name: "Bedrock",
        id: "bedrock",
        recipe: {
            baseItem: true,
        },
    },
    bee_nest: {
        name: "Bee Nest",
        id: "bee_nest",
        recipe: {
            baseItem: true,
        },
    },
    beef: {
        name: "Raw Beef",
        id: "beef",
        recipe: {
            baseItem: true,
        },
    },
    beehive: {
        name: "Beehive",
        id: "beehive",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 6,
                },
            ],
            result: 1,
        },
    },
    beetroot_seeds: {
        name: "Beetroot Seeds",
        id: "beetroot_seeds",
        recipe: {
            baseItem: true,
        },
    },
    beetroots: {
        name: "Beetroots",
        id: "beetroots",
        recipe: {
            ingredients: [
                {
                    id: "beetroot_seeds",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    bell: {
        name: "Bell",
        id: "bell",
        recipe: {
            baseItem: true,
        },
    },
    big_dripleaf: {
        name: "Big Dripleaf",
        id: "big_dripleaf",
        recipe: {
            baseItem: true,
        },
    },
    birch_boat: {
        name: "Birch Boat",
        id: "birch_boat",
        recipe: {
            ingredients: [
                {
                    id: "birch_planks",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    birch_button: {
        name: "Birch Button",
        id: "birch_button",
        recipe: {
            ingredients: [
                {
                    id: "birch_planks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    birch_chest_boat: {
        name: "Birch Chest Boat",
        id: "birch_chest_boat",
        recipe: {
            ingredients: [
                {
                    id: "birch_boat",
                    quantity: 1,
                },
                {
                    id: "chest",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    birch_door: {
        name: "Birch Door",
        id: "birch_door",
        recipe: {
            ingredients: [
                {
                    id: "birch_planks",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    birch_fence: {
        name: "Birch Fence",
        id: "birch_fence",
        recipe: {
            ingredients: [
                {
                    id: "birch_planks",
                    quantity: 4,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    birch_fence_gate: {
        name: "Birch Fence Gate",
        id: "birch_fence_gate",
        recipe: {
            ingredients: [
                {
                    id: "birch_planks",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    birch_hanging_sign: {
        name: "Birch Hanging Sign",
        id: "birch_hanging_sign",
        recipe: {
            ingredients: [
                {
                    id: "birch_log",
                    quantity: 6,
                },
                {
                    id: "chain",
                    quantity: 2,
                },
            ],
            result: 6,
        },
    },
    birch_leaves: {
        name: "Birch Leaves",
        id: "birch_leaves",
        recipe: {
            baseItem: true,
        },
    },
    birch_log: {
        name: "Birch Log",
        id: "birch_log",
        recipe: {
            baseItem: true,
        },
    },
    birch_planks: {
        name: "Birch Planks",
        id: "birch_planks",
        recipe: {
            ingredients: [
                {
                    id: "birch_log",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    birch_pressure_plate: {
        name: "Birch Pressure Plate",
        id: "birch_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "birch_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    birch_sapling: {
        name: "Birch Sapling",
        id: "birch_sapling",
        recipe: {
            baseItem: true,
        },
    },
    birch_sign: {
        name: "Birch Sign",
        id: "birch_sign",
        recipe: {
            ingredients: [
                {
                    id: "birch_planks",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 3,
        },
    },
    birch_slab: {
        name: "Birch Slab",
        id: "birch_slab",
        recipe: {
            ingredients: [
                {
                    id: "birch_planks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    birch_stairs: {
        name: "Birch Stairs",
        id: "birch_stairs",
        recipe: {
            ingredients: [
                {
                    id: "birch_planks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    birch_trapdoor: {
        name: "Birch Trapdoor",
        id: "birch_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "birch_planks",
                    quantity: 6,
                },
            ],
            result: 2,
        },
    },
    birch_wood: {
        name: "Birch Wood",
        id: "birch_wood",
        recipe: {
            ingredients: [
                {
                    id: "birch_log",
                    quantity: 4,
                },
            ],
            result: 3,
        },
    },
    black_banner: {
        name: "Black Banner",
        id: "black_banner",
        recipe: {
            ingredients: [
                {
                    id: "black_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    black_bed: {
        name: "Black Bed",
        id: "black_bed",
        recipe: {
            ingredients: [
                {
                    id: "black_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    black_candle: {
        name: "Black Candle",
        id: "black_candle",
        recipe: {
            ingredients: [
                {
                    id: "black_dye",
                    quantity: 1,
                },
                {
                    id: "candle",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    black_carpet: {
        name: "Black Carpet",
        id: "black_carpet",
        recipe: {
            ingredients: [
                {
                    id: "black_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    black_concrete: {
        name: "Black Concrete",
        id: "black_concrete",
        recipe: {
            ingredients: [
                {
                    id: "black_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    black_concrete_powder: {
        name: "Black Concrete Powder",
        id: "black_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "black_dye",
                    quantity: 1,
                },
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    black_dye: {
        name: "Black Dye",
        id: "black_dye",
        recipe: {
            ingredients: [
                {
                    id: "ink_sac",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    black_glazed_terracotta: {
        name: "Black Glazed Terracotta",
        id: "black_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "black_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    black_shulker_box: {
        name: "Black Shulker Box",
        id: "black_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "black_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    black_stained_glass: {
        name: "Black Stained Glass",
        id: "black_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "black_dye",
                    quantity: 1,
                },
                {
                    id: "glass",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    black_stained_glass_pane: {
        name: "Black Stained Glass Pane",
        id: "black_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "black_dye",
                    quantity: 1,
                },
                {
                    id: "glass_pane",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    black_terracotta: {
        name: "Black Terracotta",
        id: "black_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "black_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    black_wool: {
        name: "Black Wool",
        id: "black_wool",
        recipe: {
            ingredients: [
                {
                    id: "black_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    blackstone: {
        name: "Blackstone",
        id: "blackstone",
        recipe: {
            baseItem: true,
        },
    },
    blackstone_slab: {
        name: "Blackstone Slab",
        id: "blackstone_slab",
        recipe: {
            ingredients: [
                {
                    id: "blackstone",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    blackstone_stairs: {
        name: "Blackstone Stairs",
        id: "blackstone_stairs",
        recipe: {
            ingredients: [
                {
                    id: "blackstone",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    blackstone_wall: {
        name: "Blackstone Wall",
        id: "blackstone_wall",
        recipe: {
            ingredients: [
                {
                    id: "blackstone",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    blast_furnace: {
        name: "Blast Furnace",
        id: "blast_furnace",
        recipe: {
            ingredients: [
                {
                    id: "furnace",
                    quantity: 1,
                },
                {
                    id: "iron_ingot",
                    quantity: 5,
                },
                {
                    id: "smooth_stone",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    blaze_powder: {
        name: "Blaze Powder",
        id: "blaze_powder",
        recipe: {
            ingredients: [
                {
                    id: "blaze_rod",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    blaze_rod: {
        name: "Blaze Rod",
        id: "blaze_rod",
        recipe: {
            baseItem: true,
        },
    },
    blue_banner: {
        name: "Blue Banner",
        id: "blue_banner",
        recipe: {
            ingredients: [
                {
                    id: "blue_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    blue_bed: {
        name: "Blue Bed",
        id: "blue_bed",
        recipe: {
            ingredients: [
                {
                    id: "blue_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    blue_candle: {
        name: "Blue Candle",
        id: "blue_candle",
        recipe: {
            ingredients: [
                {
                    id: "blue_dye",
                    quantity: 1,
                },
                {
                    id: "candle",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    blue_carpet: {
        name: "Blue Carpet",
        id: "blue_carpet",
        recipe: {
            ingredients: [
                {
                    id: "blue_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    blue_concrete: {
        name: "Blue Concrete",
        id: "blue_concrete",
        recipe: {
            ingredients: [
                {
                    id: "blue_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    blue_concrete_powder: {
        name: "Blue Concrete Powder",
        id: "blue_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "blue_dye",
                    quantity: 1,
                },
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    blue_dye: {
        name: "Blue Dye",
        id: "blue_dye",
        recipe: {
            ingredients: [
                {
                    id: "lapis_lazuli",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    blue_glazed_terracotta: {
        name: "Blue Glazed Terracotta",
        id: "blue_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "blue_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    blue_ice: {
        name: "Blue Ice",
        id: "blue_ice",
        recipe: {
            baseItem: true,
        },
    },
    blue_orchid: {
        name: "Blue Orchid",
        id: "blue_orchid",
        recipe: {
            baseItem: true,
        },
    },
    blue_shulker_box: {
        name: "Blue Shulker Box",
        id: "blue_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "blue_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    blue_stained_glass: {
        name: "Blue Stained Glass",
        id: "blue_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "blue_dye",
                    quantity: 1,
                },
                {
                    id: "glass",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    blue_stained_glass_pane: {
        name: "Blue Stained Glass Pane",
        id: "blue_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "blue_dye",
                    quantity: 1,
                },
                {
                    id: "glass_pane",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    blue_terracotta: {
        name: "Blue Terracotta",
        id: "blue_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "blue_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    blue_wool: {
        name: "Blue Wool",
        id: "blue_wool",
        recipe: {
            ingredients: [
                {
                    id: "blue_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    bone: {
        name: "Bone",
        id: "bone",
        recipe: {
            baseItem: true,
        },
    },
    bone_block: {
        name: "Bone Block",
        id: "bone_block",
        recipe: {
            ingredients: [
                {
                    id: "bone_meal",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    bone_meal: {
        name: "Bone Meal",
        id: "bone_meal",
        recipe: {
            ingredients: [
                {
                    id: "bone",
                    quantity: 1,
                },
            ],
            result: 3,
        },
    },
    book: {
        name: "Book",
        id: "book",
        recipe: {
            ingredients: [
                {
                    id: "leather",
                    quantity: 1,
                },
                {
                    id: "paper",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    bookshelf: {
        name: "Bookshelf",
        id: "bookshelf",
        recipe: {
            ingredients: [
                {
                    id: "book",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 6,
                },
            ],
            result: 1,
        },
    },
    bow: {
        name: "Bow",
        id: "bow",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 3,
                },
                {
                    id: "string",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    brain_coral: {
        name: "Brain Coral",
        id: "brain_coral",
        recipe: {
            baseItem: true,
        },
    },
    brain_coral_block: {
        name: "Brain Coral Block",
        id: "brain_coral_block",
        recipe: {
            baseItem: true,
        },
    },
    brain_coral_fan: {
        name: "Brain Coral Fan",
        id: "brain_coral_fan",
        recipe: {
            baseItem: true,
        },
    },
    bread: {
        name: "Bread",
        id: "bread",
        recipe: {
            ingredients: [
                {
                    id: "wheat",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    brewing_stand: {
        name: "Brewing Stand",
        id: "brewing_stand",
        recipe: {
            ingredients: [
                {
                    id: "blaze_rod",
                    quantity: 1,
                },
                {
                    id: "tag_cobblestone",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    brick: {
        name: "Brick",
        id: "brick",
        recipe: {
            ingredients: [
                {
                    id: "clay_ball",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    brick_slab: {
        name: "Brick Slab",
        id: "brick_slab",
        recipe: {
            ingredients: [
                {
                    id: "brick",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    brick_stairs: {
        name: "Brick Stairs",
        id: "brick_stairs",
        recipe: {
            ingredients: [
                {
                    id: "brick",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    brick_wall: {
        name: "Brick Wall",
        id: "brick_wall",
        recipe: {
            ingredients: [
                {
                    id: "brick",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    bricks: {
        name: "Bricks",
        id: "bricks",
        recipe: {
            ingredients: [
                {
                    id: "brick",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    brown_banner: {
        name: "Brown Banner",
        id: "brown_banner",
        recipe: {
            ingredients: [
                {
                    id: "brown_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    brown_bed: {
        name: "Brown Bed",
        id: "brown_bed",
        recipe: {
            ingredients: [
                {
                    id: "brown_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    brown_candle: {
        name: "Brown Candle",
        id: "brown_candle",
        recipe: {
            ingredients: [
                {
                    id: "brown_dye",
                    quantity: 1,
                },
                {
                    id: "candle",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    brown_carpet: {
        name: "Brown Carpet",
        id: "brown_carpet",
        recipe: {
            ingredients: [
                {
                    id: "brown_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    brown_concrete: {
        name: "Brown Concrete",
        id: "brown_concrete",
        recipe: {
            ingredients: [
                {
                    id: "brown_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    brown_concrete_powder: {
        name: "Brown Concrete Powder",
        id: "brown_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "brown_dye",
                    quantity: 1,
                },
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    brown_dye: {
        name: "Brown Dye",
        id: "brown_dye",
        recipe: {
            ingredients: [
                {
                    id: "cocoa_beans",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    brown_glazed_terracotta: {
        name: "Brown Glazed Terracotta",
        id: "brown_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "brown_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    brown_mushroom: {
        name: "Brown Mushroom",
        id: "brown_mushroom",
        recipe: {
            baseItem: true,
        },
    },
    brown_mushroom_block: {
        name: "Brown Mushroom Block",
        id: "brown_mushroom_block",
        recipe: {
            baseItem: true,
        },
    },
    brown_shulker_box: {
        name: "Brown Shulker Box",
        id: "brown_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "brown_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    brown_stained_glass: {
        name: "Brown Stained Glass",
        id: "brown_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "brown_dye",
                    quantity: 1,
                },
                {
                    id: "glass",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    brown_stained_glass_pane: {
        name: "Brown Stained Glass Pane",
        id: "brown_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "brown_dye",
                    quantity: 1,
                },
                {
                    id: "glass_pane",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    brown_terracotta: {
        name: "Brown Terracotta",
        id: "brown_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "brown_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    brown_wool: {
        name: "Brown Wool",
        id: "brown_wool",
        recipe: {
            ingredients: [
                {
                    id: "brown_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    bubble_coral: {
        name: "Bubble Coral",
        id: "bubble_coral",
        recipe: {
            baseItem: true,
        },
    },
    bubble_coral_block: {
        name: "Bubble Coral Block",
        id: "bubble_coral_block",
        recipe: {
            baseItem: true,
        },
    },
    bubble_coral_fan: {
        name: "Bubble Coral Fan",
        id: "bubble_coral_fan",
        recipe: {
            baseItem: true,
        },
    },
    bucket: {
        name: "Bucket",
        id: "bucket",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    budding_amethyst: {
        name: "Budding Amethyst",
        id: "budding_amethyst",
        recipe: {
            baseItem: true,
        },
    },
    cactus: {
        name: "Cactus",
        id: "cactus",
        recipe: {
            baseItem: true,
        },
    },
    cake: {
        name: "Cake",
        id: "cake",
        recipe: {
            ingredients: [
                {
                    id: "egg",
                    quantity: 1,
                },
                {
                    id: "milk_bucket",
                    quantity: 3,
                },
                {
                    id: "sugar",
                    quantity: 2,
                },
                {
                    id: "wheat",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    calcite: {
        name: "Calcite",
        id: "calcite",
        recipe: {
            baseItem: true,
        },
    },
    calibrated_sculk_sensor: {
        name: "Calibrated Sculk Sensor",
        id: "calibrated_sculk_sensor",
        recipe: {
            ingredients: [
                {
                    id: "amethyst_shard",
                    quantity: 3,
                },
                {
                    id: "sculk_sensor",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    campfire: {
        name: "Campfire",
        id: "campfire",
        recipe: {
            ingredients: [
                {
                    id: "coal",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 3,
                },
                {
                    id: "tag_wood",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    candle: {
        name: "Candle",
        id: "candle",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "string",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    carrot: {
        name: "Carrot",
        id: "carrot",
        recipe: {
            baseItem: true,
        },
    },
    carrot_on_a_stick: {
        name: "Carrot on a Stick",
        id: "carrot_on_a_stick",
        recipe: {
            ingredients: [
                {
                    id: "carrot",
                    quantity: 1,
                },
                {
                    id: "fishing_rod",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    carrots: {
        name: "Carrots",
        id: "carrots",
        recipe: {
            ingredients: [
                {
                    id: "carrot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cartography_table: {
        name: "Cartography Table",
        id: "cartography_table",
        recipe: {
            ingredients: [
                {
                    id: "paper",
                    quantity: 2,
                },
                {
                    id: "tag_planks",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    carved_pumpkin: {
        name: "Carved Pumpkin",
        id: "carved_pumpkin",
        recipe: {
            ingredients: [
                {
                    id: "pumpkin",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cauldron: {
        name: "Cauldron",
        id: "cauldron",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 7,
                },
            ],
            result: 1,
        },
    },
    cave_vines: {
        name: "Cave Vines",
        id: "cave_vines",
        recipe: {
            baseItem: true,
        },
    },
    chain: {
        name: "Chain",
        id: "chain",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 1,
                },
                {
                    id: "iron_nugget",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    chain_command_block: {
        name: "Chain Command Block",
        id: "chain_command_block",
        recipe: {
            baseItem: true,
        },
    },
    charcoal: {
        name: "Charcoal",
        id: "charcoal",
        recipe: {
            ingredients: [
                {
                    id: "tag_logs",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cherry_boat: {
        name: "Cherry Boat",
        id: "cherry_boat",
        recipe: {
            ingredients: [
                {
                    id: "cherry_planks",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    cherry_button: {
        name: "Cherry Button",
        id: "cherry_button",
        recipe: {
            ingredients: [
                {
                    id: "cherry_planks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cherry_chest_boat: {
        name: "Cherry Chest Boat",
        id: "cherry_chest_boat",
        recipe: {
            ingredients: [
                {
                    id: "cherry_boat",
                    quantity: 1,
                },
                {
                    id: "chest",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cherry_door: {
        name: "Cherry Door",
        id: "cherry_door",
        recipe: {
            ingredients: [
                {
                    id: "cherry_planks",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    cherry_fence: {
        name: "Cherry Fence",
        id: "cherry_fence",
        recipe: {
            ingredients: [
                {
                    id: "cherry_planks",
                    quantity: 4,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    cherry_fence_gate: {
        name: "Cherry Fence Gate",
        id: "cherry_fence_gate",
        recipe: {
            ingredients: [
                {
                    id: "cherry_planks",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    cherry_hanging_sign: {
        name: "Cherry Hanging Sign",
        id: "cherry_hanging_sign",
        recipe: {
            ingredients: [
                {
                    id: "chain",
                    quantity: 2,
                },
                {
                    id: "cherry_log",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    cherry_leaves: {
        name: "Cherry Leaves",
        id: "cherry_leaves",
        recipe: {
            baseItem: true,
        },
    },
    cherry_log: {
        name: "Cherry Log",
        id: "cherry_log",
        recipe: {
            baseItem: true,
        },
    },
    cherry_planks: {
        name: "Cherry Planks",
        id: "cherry_planks",
        recipe: {
            ingredients: [
                {
                    id: "cherry_log",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    cherry_pressure_plate: {
        name: "Cherry Pressure Plate",
        id: "cherry_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "cherry_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    cherry_sapling: {
        name: "Cherry Sapling",
        id: "cherry_sapling",
        recipe: {
            baseItem: true,
        },
    },
    cherry_sign: {
        name: "Cherry Sign",
        id: "cherry_sign",
        recipe: {
            ingredients: [
                {
                    id: "cherry_planks",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 3,
        },
    },
    cherry_slab: {
        name: "Cherry Slab",
        id: "cherry_slab",
        recipe: {
            ingredients: [
                {
                    id: "cherry_planks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    cherry_stairs: {
        name: "Cherry Stairs",
        id: "cherry_stairs",
        recipe: {
            ingredients: [
                {
                    id: "cherry_planks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    cherry_trapdoor: {
        name: "Cherry Trapdoor",
        id: "cherry_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "cherry_planks",
                    quantity: 6,
                },
            ],
            result: 2,
        },
    },
    cherry_wood: {
        name: "Cherry Wood",
        id: "cherry_wood",
        recipe: {
            ingredients: [
                {
                    id: "cherry_log",
                    quantity: 4,
                },
            ],
            result: 3,
        },
    },
    chest: {
        name: "Chest",
        id: "chest",
        recipe: {
            ingredients: [
                {
                    id: "tag_planks",
                    quantity: 8,
                },
            ],
            result: 1,
        },
    },
    chest_minecart: {
        name: "Minecart with Chest",
        id: "chest_minecart",
        recipe: {
            ingredients: [
                {
                    id: "chest",
                    quantity: 1,
                },
                {
                    id: "minecart",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    chicken: {
        name: "Raw Chicken",
        id: "chicken",
        recipe: {
            baseItem: true,
        },
    },
    chiseled_bookshelf: {
        name: "Chiseled Bookshelf",
        id: "chiseled_bookshelf",
        recipe: {
            ingredients: [
                {
                    id: "tag_planks",
                    quantity: 6,
                },
                {
                    id: "tag_wood_slabs",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    chiseled_copper: {
        name: "Chiseled Copper",
        id: "chiseled_copper",
        recipe: {
            ingredients: [
                {
                    id: "cut_copper_slab",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    chiseled_deepslate: {
        name: "Chiseled Deepslate",
        id: "chiseled_deepslate",
        recipe: {
            ingredients: [
                {
                    id: "cobbled_deepslate_slab",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    chiseled_nether_bricks: {
        name: "Chiseled Nether Bricks",
        id: "chiseled_nether_bricks",
        recipe: {
            ingredients: [
                {
                    id: "nether_brick_slab",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    chiseled_polished_blackstone: {
        name: "Chiseled Polished Blackstone",
        id: "chiseled_polished_blackstone",
        recipe: {
            ingredients: [
                {
                    id: "polished_blackstone_slab",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    chiseled_quartz_block: {
        name: "Chiseled Quartz Block",
        id: "chiseled_quartz_block",
        recipe: {
            ingredients: [
                {
                    id: "quartz_slab",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    chiseled_red_sandstone: {
        name: "Chiseled Red Sandstone",
        id: "chiseled_red_sandstone",
        recipe: {
            ingredients: [
                {
                    id: "red_sandstone_slab",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    chiseled_sandstone: {
        name: "Chiseled Sandstone",
        id: "chiseled_sandstone",
        recipe: {
            ingredients: [
                {
                    id: "sandstone_slab",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    chiseled_stone_bricks: {
        name: "Chiseled Stone Bricks",
        id: "chiseled_stone_bricks",
        recipe: {
            ingredients: [
                {
                    id: "stone_brick_slab",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    chiseled_tuff: {
        name: "Chiseled Tuff",
        id: "chiseled_tuff",
        recipe: {
            ingredients: [
                {
                    id: "tuff_slab",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    chiseled_tuff_bricks: {
        name: "Chiseled Tuff Bricks",
        id: "chiseled_tuff_bricks",
        recipe: {
            ingredients: [
                {
                    id: "tuff_brick_slab",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    chorus_flower: {
        name: "Chorus Flower",
        id: "chorus_flower",
        recipe: {
            baseItem: true,
        },
    },
    chorus_fruit: {
        name: "Chorus Fruit",
        id: "chorus_fruit",
        recipe: {
            ingredients: [
                {
                    id: "chorus_plant",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    chorus_plant: {
        name: "Chorus Plant",
        id: "chorus_plant",
        recipe: {
            baseItem: true,
        },
    },
    clay: {
        name: "Clay",
        id: "clay",
        recipe: {
            baseItem: true,
        },
    },
    clay_ball: {
        name: "Clay Ball",
        id: "clay_ball",
        recipe: {
            ingredients: [
                {
                    id: "clay",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    coal: {
        name: "Coal",
        id: "coal",
        recipe: {
            ingredients: [
                {
                    id: "coal_ore",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    coal_block: {
        name: "Block of Coal",
        id: "coal_block",
        recipe: {
            ingredients: [
                {
                    id: "coal",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    coal_ore: {
        name: "Coal Ore",
        id: "coal_ore",
        recipe: {
            baseItem: true,
        },
    },
    coarse_dirt: {
        name: "Coarse Dirt",
        id: "coarse_dirt",
        recipe: {
            baseItem: true,
        },
    },
    cobbled_deepslate: {
        name: "Cobbled Deepslate",
        id: "cobbled_deepslate",
        recipe: {
            baseItem: true,
        },
    },
    cobbled_deepslate_slab: {
        name: "Cobbled Deepslate Slab",
        id: "cobbled_deepslate_slab",
        recipe: {
            ingredients: [
                {
                    id: "cobbled_deepslate",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    cobbled_deepslate_stairs: {
        name: "Cobbled Deepslate Stairs",
        id: "cobbled_deepslate_stairs",
        recipe: {
            ingredients: [
                {
                    id: "cobbled_deepslate",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    cobbled_deepslate_wall: {
        name: "Cobbled Deepslate Wall",
        id: "cobbled_deepslate_wall",
        recipe: {
            ingredients: [
                {
                    id: "cobbled_deepslate",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    cobblestone: {
        name: "Cobblestone",
        id: "cobblestone",
        recipe: {
            baseItem: true,
        },
    },
    cobblestone_slab: {
        name: "Cobblestone Slab",
        id: "cobblestone_slab",
        recipe: {
            ingredients: [
                {
                    id: "cobblestone",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    cobblestone_stairs: {
        name: "Cobblestone Stairs",
        id: "cobblestone_stairs",
        recipe: {
            ingredients: [
                {
                    id: "cobblestone",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    cobblestone_wall: {
        name: "Cobblestone Wall",
        id: "cobblestone_wall",
        recipe: {
            ingredients: [
                {
                    id: "cobblestone",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    cobweb: {
        name: "Cobweb",
        id: "cobweb",
        recipe: {
            baseItem: true,
        },
    },
    cocoa: {
        name: "Cocoa",
        id: "cocoa",
        recipe: {
            ingredients: [
                {
                    id: "cocoa_beans",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cocoa_beans: {
        name: "Cocoa Beans",
        id: "cocoa_beans",
        recipe: {
            baseItem: true,
        },
    },
    cod: {
        name: "Raw Cod",
        id: "cod",
        recipe: {
            baseItem: true,
        },
    },
    cod_bucket: {
        name: "Bucket of Cod",
        id: "cod_bucket",
        recipe: {
            ingredients: [
                {
                    id: "bucket",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    command_block: {
        name: "Command Block",
        id: "command_block",
        recipe: {
            baseItem: true,
        },
    },
    command_block_minecart: {
        name: "Command Block Minecart",
        id: "command_block_minecart",
        recipe: {
            baseItem: true,
        },
    },
    comparator: {
        name: "Redstone Comparator",
        id: "comparator",
        recipe: {
            ingredients: [
                {
                    id: "quartz",
                    quantity: 3,
                },
                {
                    id: "redstone_torch",
                    quantity: 3,
                },
                {
                    id: "stone",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    composter: {
        name: "Composter",
        id: "composter",
        recipe: {
            ingredients: [
                {
                    id: "tag_wood_slabs",
                    quantity: 7,
                },
            ],
            result: 1,
        },
    },
    conduit: {
        name: "Conduit",
        id: "conduit",
        recipe: {
            ingredients: [
                {
                    id: "heart_of_the_sea",
                    quantity: 1,
                },
                {
                    id: "nautilus_shell",
                    quantity: 8,
                },
            ],
            result: 1,
        },
    },
    cooked_beef: {
        name: "Steak",
        id: "cooked_beef",
        recipe: {
            ingredients: [
                {
                    id: "beef",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cooked_chicken: {
        name: "Cooked Chicken",
        id: "cooked_chicken",
        recipe: {
            ingredients: [
                {
                    id: "chicken",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cooked_cod: {
        name: "Cooked Cod",
        id: "cooked_cod",
        recipe: {
            ingredients: [
                {
                    id: "cod",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cooked_mutton: {
        name: "Cooked Mutton",
        id: "cooked_mutton",
        recipe: {
            ingredients: [
                {
                    id: "mutton",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cooked_porkchop: {
        name: "Cooked Porkchop",
        id: "cooked_porkchop",
        recipe: {
            ingredients: [
                {
                    id: "porkchop",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cooked_rabbit: {
        name: "Cooked Rabbit",
        id: "cooked_rabbit",
        recipe: {
            ingredients: [
                {
                    id: "rabbit",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cooked_salmon: {
        name: "Cooked Salmon",
        id: "cooked_salmon",
        recipe: {
            ingredients: [
                {
                    id: "salmon",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cookie: {
        name: "Cookie",
        id: "cookie",
        recipe: {
            ingredients: [
                {
                    id: "cocoa_beans",
                    quantity: 1,
                },
                {
                    id: "wheat",
                    quantity: 2,
                },
            ],
            result: 8,
        },
    },
    copper_block: {
        name: "Block of Copper",
        id: "copper_block",
        recipe: {
            ingredients: [
                {
                    id: "copper_ingot",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    copper_bulb: {
        name: "Copper Bulb",
        id: "copper_bulb",
        recipe: {
            ingredients: [
                {
                    id: "blaze_rod",
                    quantity: 1,
                },
                {
                    id: "copper_block",
                    quantity: 3,
                },
                {
                    id: "redstone",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    copper_door: {
        name: "Copper Door",
        id: "copper_door",
        recipe: {
            ingredients: [
                {
                    id: "copper_block",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    copper_grate: {
        name: "Copper Grate",
        id: "copper_grate",
        recipe: {
            ingredients: [
                {
                    id: "copper_block",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    copper_ingot: {
        name: "Copper Ingot",
        id: "copper_ingot",
        recipe: {
            ingredients: [
                {
                    id: "raw_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    copper_ore: {
        name: "Copper Ore",
        id: "copper_ore",
        recipe: {
            baseItem: true,
        },
    },
    copper_trapdoor: {
        name: "Copper Trapdoor",
        id: "copper_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "copper_block",
                    quantity: 6,
                },
            ],
            result: 2,
        },
    },
    cornflower: {
        name: "Cornflower",
        id: "cornflower",
        recipe: {
            baseItem: true,
        },
    },
    cracked_deepslate_bricks: {
        name: "Cracked Deepslate Bricks",
        id: "cracked_deepslate_bricks",
        recipe: {
            ingredients: [
                {
                    id: "deepslate_bricks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cracked_deepslate_tiles: {
        name: "Cracked Deepslate Tiles",
        id: "cracked_deepslate_tiles",
        recipe: {
            ingredients: [
                {
                    id: "deepslate_tiles",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cracked_nether_bricks: {
        name: "Cracked Nether Bricks",
        id: "cracked_nether_bricks",
        recipe: {
            ingredients: [
                {
                    id: "nether_bricks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cracked_polished_blackstone_bricks: {
        name: "Cracked Polished Blackstone Bricks",
        id: "cracked_polished_blackstone_bricks",
        recipe: {
            ingredients: [
                {
                    id: "polished_blackstone_bricks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cracked_stone_bricks: {
        name: "Cracked Stone Bricks",
        id: "cracked_stone_bricks",
        recipe: {
            ingredients: [
                {
                    id: "stone_bricks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    crafter: {
        name: "Crafter",
        id: "crafter",
        recipe: {
            ingredients: [
                {
                    id: "crafting_table",
                    quantity: 1,
                },
                {
                    id: "dropper",
                    quantity: 1,
                },
                {
                    id: "iron_ingot",
                    quantity: 5,
                },
                {
                    id: "redstone",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    crafting_table: {
        name: "Crafting Table",
        id: "crafting_table",
        recipe: {
            ingredients: [
                {
                    id: "tag_planks",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    creeper_head: {
        name: "Creeper Head",
        id: "creeper_head",
        recipe: {
            baseItem: true,
        },
    },
    crimson_button: {
        name: "Crimson Button",
        id: "crimson_button",
        recipe: {
            ingredients: [
                {
                    id: "crimson_planks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    crimson_door: {
        name: "Crimson Door",
        id: "crimson_door",
        recipe: {
            ingredients: [
                {
                    id: "crimson_planks",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    crimson_fence: {
        name: "Crimson Fence",
        id: "crimson_fence",
        recipe: {
            ingredients: [
                {
                    id: "crimson_planks",
                    quantity: 4,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    crimson_fence_gate: {
        name: "Crimson Fence Gate",
        id: "crimson_fence_gate",
        recipe: {
            ingredients: [
                {
                    id: "crimson_planks",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    crimson_fungus: {
        name: "Crimson Fungus",
        id: "crimson_fungus",
        recipe: {
            baseItem: true,
        },
    },
    crimson_hanging_sign: {
        name: "Crimson Hanging Sign",
        id: "crimson_hanging_sign",
        recipe: {
            ingredients: [
                {
                    id: "chain",
                    quantity: 2,
                },
                {
                    id: "crimson_stem",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    crimson_hyphae: {
        name: "Crimson Hyphae",
        id: "crimson_hyphae",
        recipe: {
            baseItem: true,
        },
    },
    crimson_nylium: {
        name: "Crimson Nylium",
        id: "crimson_nylium",
        recipe: {
            baseItem: true,
        },
    },
    crimson_planks: {
        name: "Crimson Planks",
        id: "crimson_planks",
        recipe: {
            ingredients: [
                {
                    id: "crimson_stem",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    crimson_pressure_plate: {
        name: "Crimson Pressure Plate",
        id: "crimson_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "crimson_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    crimson_roots: {
        name: "Crimson Roots",
        id: "crimson_roots",
        recipe: {
            baseItem: true,
        },
    },
    crimson_sign: {
        name: "Crimson Sign",
        id: "crimson_sign",
        recipe: {
            ingredients: [
                {
                    id: "crimson_planks",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 3,
        },
    },
    crimson_slab: {
        name: "Crimson Slab",
        id: "crimson_slab",
        recipe: {
            ingredients: [
                {
                    id: "crimson_planks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    crimson_stairs: {
        name: "Crimson Stairs",
        id: "crimson_stairs",
        recipe: {
            ingredients: [
                {
                    id: "crimson_planks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    crimson_stem: {
        name: "Crimson Stem",
        id: "crimson_stem",
        recipe: {
            baseItem: true,
        },
    },
    crimson_trapdoor: {
        name: "Crimson Trapdoor",
        id: "crimson_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "crimson_planks",
                    quantity: 6,
                },
            ],
            result: 2,
        },
    },
    crossbow: {
        name: "Crossbow",
        id: "crossbow",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 3,
                },
                {
                    id: "stick",
                    quantity: 4,
                },
                {
                    id: "string",
                    quantity: 1,
                },
                {
                    id: "tripwire_hook",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    crying_obsidian: {
        name: "Crying Obsidian",
        id: "crying_obsidian",
        recipe: {
            baseItem: true,
        },
    },
    cut_copper: {
        name: "Cut Copper",
        id: "cut_copper",
        recipe: {
            ingredients: [
                {
                    id: "copper_block",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    cut_copper_slab: {
        name: "Cut Copper Slab",
        id: "cut_copper_slab",
        recipe: {
            ingredients: [
                {
                    id: "cut_copper",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    cut_copper_stairs: {
        name: "Cut Copper Stairs",
        id: "cut_copper_stairs",
        recipe: {
            ingredients: [
                {
                    id: "cut_copper",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    cut_red_sandstone: {
        name: "Cut Red Sandstone",
        id: "cut_red_sandstone",
        recipe: {
            ingredients: [
                {
                    id: "red_sandstone",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    cut_red_sandstone_slab: {
        name: "Cut Red Sandstone Slab",
        id: "cut_red_sandstone_slab",
        recipe: {
            ingredients: [
                {
                    id: "cut_red_sandstone",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    cut_sandstone: {
        name: "Cut Sandstone",
        id: "cut_sandstone",
        recipe: {
            ingredients: [
                {
                    id: "sandstone",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    cut_sandstone_slab: {
        name: "Cut Sandstone Slab",
        id: "cut_sandstone_slab",
        recipe: {
            ingredients: [
                {
                    id: "cut_sandstone",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    cyan_banner: {
        name: "Cyan Banner",
        id: "cyan_banner",
        recipe: {
            ingredients: [
                {
                    id: "cyan_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cyan_bed: {
        name: "Cyan Bed",
        id: "cyan_bed",
        recipe: {
            ingredients: [
                {
                    id: "cyan_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    cyan_candle: {
        name: "Cyan Candle",
        id: "cyan_candle",
        recipe: {
            ingredients: [
                {
                    id: "candle",
                    quantity: 1,
                },
                {
                    id: "cyan_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cyan_carpet: {
        name: "Cyan Carpet",
        id: "cyan_carpet",
        recipe: {
            ingredients: [
                {
                    id: "cyan_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    cyan_concrete: {
        name: "Cyan Concrete",
        id: "cyan_concrete",
        recipe: {
            ingredients: [
                {
                    id: "cyan_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cyan_concrete_powder: {
        name: "Cyan Concrete Powder",
        id: "cyan_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "cyan_dye",
                    quantity: 1,
                },
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    cyan_dye: {
        name: "Cyan Dye",
        id: "cyan_dye",
        recipe: {
            ingredients: [
                {
                    id: "blue_dye",
                    quantity: 1,
                },
                {
                    id: "green_dye",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    cyan_glazed_terracotta: {
        name: "Cyan Glazed Terracotta",
        id: "cyan_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "cyan_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cyan_shulker_box: {
        name: "Cyan Shulker Box",
        id: "cyan_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "cyan_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    cyan_stained_glass: {
        name: "Cyan Stained Glass",
        id: "cyan_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "cyan_dye",
                    quantity: 1,
                },
                {
                    id: "glass",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    cyan_stained_glass_pane: {
        name: "Cyan Stained Glass Pane",
        id: "cyan_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "cyan_dye",
                    quantity: 1,
                },
                {
                    id: "glass_pane",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    cyan_terracotta: {
        name: "Cyan Terracotta",
        id: "cyan_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "cyan_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    cyan_wool: {
        name: "Cyan Wool",
        id: "cyan_wool",
        recipe: {
            ingredients: [
                {
                    id: "cyan_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    dandelion: {
        name: "Dandelion",
        id: "dandelion",
        recipe: {
            baseItem: true,
        },
    },
    dark_oak_boat: {
        name: "Dark Oak Boat",
        id: "dark_oak_boat",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_planks",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    dark_oak_button: {
        name: "Dark Oak Button",
        id: "dark_oak_button",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_planks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    dark_oak_chest_boat: {
        name: "Dark Oak Chest Boat",
        id: "dark_oak_chest_boat",
        recipe: {
            ingredients: [
                {
                    id: "chest",
                    quantity: 1,
                },
                {
                    id: "dark_oak_boat",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    dark_oak_door: {
        name: "Dark Oak Door",
        id: "dark_oak_door",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_planks",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    dark_oak_fence: {
        name: "Dark Oak Fence",
        id: "dark_oak_fence",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_planks",
                    quantity: 4,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    dark_oak_fence_gate: {
        name: "Dark Oak Fence Gate",
        id: "dark_oak_fence_gate",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_planks",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    dark_oak_hanging_sign: {
        name: "Dark Oak Hanging Sign",
        id: "dark_oak_hanging_sign",
        recipe: {
            ingredients: [
                {
                    id: "chain",
                    quantity: 2,
                },
                {
                    id: "dark_oak_log",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    dark_oak_leaves: {
        name: "Dark Oak Leaves",
        id: "dark_oak_leaves",
        recipe: {
            baseItem: true,
        },
    },
    dark_oak_log: {
        name: "Dark Oak Log",
        id: "dark_oak_log",
        recipe: {
            baseItem: true,
        },
    },
    dark_oak_planks: {
        name: "Dark Oak Planks",
        id: "dark_oak_planks",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_log",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    dark_oak_pressure_plate: {
        name: "Dark Oak Pressure Plate",
        id: "dark_oak_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    dark_oak_sapling: {
        name: "Dark Oak Sapling",
        id: "dark_oak_sapling",
        recipe: {
            baseItem: true,
        },
    },
    dark_oak_sign: {
        name: "Dark Oak Sign",
        id: "dark_oak_sign",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_planks",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 3,
        },
    },
    dark_oak_slab: {
        name: "Dark Oak Slab",
        id: "dark_oak_slab",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_planks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    dark_oak_stairs: {
        name: "Dark Oak Stairs",
        id: "dark_oak_stairs",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_planks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    dark_oak_trapdoor: {
        name: "Dark Oak Trapdoor",
        id: "dark_oak_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_planks",
                    quantity: 6,
                },
            ],
            result: 2,
        },
    },
    dark_oak_wood: {
        name: "Dark Oak Wood",
        id: "dark_oak_wood",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_log",
                    quantity: 4,
                },
            ],
            result: 3,
        },
    },
    dark_prismarine: {
        name: "Dark Prismarine",
        id: "dark_prismarine",
        recipe: {
            ingredients: [
                {
                    id: "black_dye",
                    quantity: 1,
                },
                {
                    id: "prismarine_shard",
                    quantity: 8,
                },
            ],
            result: 1,
        },
    },
    dark_prismarine_slab: {
        name: "Dark Prismarine Slab",
        id: "dark_prismarine_slab",
        recipe: {
            ingredients: [
                {
                    id: "dark_prismarine",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    dark_prismarine_stairs: {
        name: "Dark Prismarine Stairs",
        id: "dark_prismarine_stairs",
        recipe: {
            ingredients: [
                {
                    id: "dark_prismarine",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    daylight_detector: {
        name: "Daylight Detector",
        id: "daylight_detector",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 3,
                },
                {
                    id: "quartz",
                    quantity: 3,
                },
                {
                    id: "tag_wood_slabs",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    dead_brain_coral: {
        name: "Dead Brain Coral",
        id: "dead_brain_coral",
        recipe: {
            baseItem: true,
        },
    },
    dead_brain_coral_block: {
        name: "Dead Brain Coral Block",
        id: "dead_brain_coral_block",
        recipe: {
            baseItem: true,
        },
    },
    dead_brain_coral_fan: {
        name: "Dead Brain Coral Fan",
        id: "dead_brain_coral_fan",
        recipe: {
            baseItem: true,
        },
    },
    dead_bubble_coral: {
        name: "Dead Bubble Coral",
        id: "dead_bubble_coral",
        recipe: {
            baseItem: true,
        },
    },
    dead_bubble_coral_block: {
        name: "Dead Bubble Coral Block",
        id: "dead_bubble_coral_block",
        recipe: {
            baseItem: true,
        },
    },
    dead_bubble_coral_fan: {
        name: "Dead Bubble Coral Fan",
        id: "dead_bubble_coral_fan",
        recipe: {
            baseItem: true,
        },
    },
    dead_bush: {
        name: "Dead Bush",
        id: "dead_bush",
        recipe: {
            baseItem: true,
        },
    },
    dead_fire_coral: {
        name: "Dead Fire Coral",
        id: "dead_fire_coral",
        recipe: {
            baseItem: true,
        },
    },
    dead_fire_coral_block: {
        name: "Dead Fire Coral Block",
        id: "dead_fire_coral_block",
        recipe: {
            baseItem: true,
        },
    },
    dead_fire_coral_fan: {
        name: "Dead Fire Coral Fan",
        id: "dead_fire_coral_fan",
        recipe: {
            baseItem: true,
        },
    },
    dead_horn_coral: {
        name: "Dead Horn Coral",
        id: "dead_horn_coral",
        recipe: {
            baseItem: true,
        },
    },
    dead_horn_coral_block: {
        name: "Dead Horn Coral Block",
        id: "dead_horn_coral_block",
        recipe: {
            baseItem: true,
        },
    },
    dead_horn_coral_fan: {
        name: "Dead Horn Coral Fan",
        id: "dead_horn_coral_fan",
        recipe: {
            baseItem: true,
        },
    },
    dead_tube_coral: {
        name: "Dead Tube Coral",
        id: "dead_tube_coral",
        recipe: {
            baseItem: true,
        },
    },
    dead_tube_coral_block: {
        name: "Dead Tube Coral Block",
        id: "dead_tube_coral_block",
        recipe: {
            baseItem: true,
        },
    },
    dead_tube_coral_fan: {
        name: "Dead Tube Coral Fan",
        id: "dead_tube_coral_fan",
        recipe: {
            baseItem: true,
        },
    },
    decorated_pot: {
        name: "Decorated Pot",
        id: "decorated_pot",
        recipe: {
            ingredients: [
                {
                    id: "brick",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    deepslate: {
        name: "Deepslate",
        id: "deepslate",
        recipe: {
            baseItem: true,
        },
    },
    deepslate_brick_slab: {
        name: "Deepslate Brick Slab",
        id: "deepslate_brick_slab",
        recipe: {
            ingredients: [
                {
                    id: "deepslate_bricks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    deepslate_brick_stairs: {
        name: "Deepslate Brick Stairs",
        id: "deepslate_brick_stairs",
        recipe: {
            ingredients: [
                {
                    id: "deepslate_bricks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    deepslate_brick_wall: {
        name: "Deepslate Brick Wall",
        id: "deepslate_brick_wall",
        recipe: {
            ingredients: [
                {
                    id: "deepslate_bricks",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    deepslate_bricks: {
        name: "Deepslate Bricks",
        id: "deepslate_bricks",
        recipe: {
            ingredients: [
                {
                    id: "polished_deepslate",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    deepslate_coal_ore: {
        name: "Deepslate Coal Ore",
        id: "deepslate_coal_ore",
        recipe: {
            baseItem: true,
        },
    },
    deepslate_copper_ore: {
        name: "Deepslate Copper Ore",
        id: "deepslate_copper_ore",
        recipe: {
            baseItem: true,
        },
    },
    deepslate_diamond_ore: {
        name: "Deepslate Diamond Ore",
        id: "deepslate_diamond_ore",
        recipe: {
            baseItem: true,
        },
    },
    deepslate_emerald_ore: {
        name: "Deepslate Emerald Ore",
        id: "deepslate_emerald_ore",
        recipe: {
            baseItem: true,
        },
    },
    deepslate_gold_ore: {
        name: "Deepslate Gold Ore",
        id: "deepslate_gold_ore",
        recipe: {
            baseItem: true,
        },
    },
    deepslate_iron_ore: {
        name: "Deepslate Iron Ore",
        id: "deepslate_iron_ore",
        recipe: {
            baseItem: true,
        },
    },
    deepslate_lapis_ore: {
        name: "Deepslate Lapis Lazuli Ore",
        id: "deepslate_lapis_ore",
        recipe: {
            baseItem: true,
        },
    },
    deepslate_redstone_ore: {
        name: "Deepslate Redstone Ore",
        id: "deepslate_redstone_ore",
        recipe: {
            baseItem: true,
        },
    },
    deepslate_tile_slab: {
        name: "Deepslate Tile Slab",
        id: "deepslate_tile_slab",
        recipe: {
            ingredients: [
                {
                    id: "deepslate_tiles",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    deepslate_tile_stairs: {
        name: "Deepslate Tile Stairs",
        id: "deepslate_tile_stairs",
        recipe: {
            ingredients: [
                {
                    id: "deepslate_tiles",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    deepslate_tile_wall: {
        name: "Deepslate Tile Wall",
        id: "deepslate_tile_wall",
        recipe: {
            ingredients: [
                {
                    id: "deepslate_tiles",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    deepslate_tiles: {
        name: "Deepslate Tiles",
        id: "deepslate_tiles",
        recipe: {
            ingredients: [
                {
                    id: "deepslate_bricks",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    detector_rail: {
        name: "Detector Rail",
        id: "detector_rail",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 6,
                },
                {
                    id: "redstone",
                    quantity: 1,
                },
                {
                    id: "stone_pressure_plate",
                    quantity: 1,
                },
            ],
            result: 6,
        },
    },
    diamond: {
        name: "Diamond",
        id: "diamond",
        recipe: {
            ingredients: [
                {
                    id: "diamond_ore",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    diamond_axe: {
        name: "Diamond Axe",
        id: "diamond_axe",
        recipe: {
            ingredients: [
                {
                    id: "diamond",
                    quantity: 3,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    diamond_block: {
        name: "Block of Diamond",
        id: "diamond_block",
        recipe: {
            ingredients: [
                {
                    id: "diamond",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    diamond_boots: {
        name: "Diamond Boots",
        id: "diamond_boots",
        recipe: {
            ingredients: [
                {
                    id: "diamond",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    diamond_chestplate: {
        name: "Diamond Chestplate",
        id: "diamond_chestplate",
        recipe: {
            ingredients: [
                {
                    id: "diamond",
                    quantity: 8,
                },
            ],
            result: 1,
        },
    },
    diamond_helmet: {
        name: "Diamond Helmet",
        id: "diamond_helmet",
        recipe: {
            ingredients: [
                {
                    id: "diamond",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    diamond_hoe: {
        name: "Diamond Hoe",
        id: "diamond_hoe",
        recipe: {
            ingredients: [
                {
                    id: "diamond",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    diamond_horse_armor: {
        name: "Diamond Horse Armor",
        id: "diamond_horse_armor",
        recipe: {
            baseItem: true,
        },
    },
    diamond_leggings: {
        name: "Diamond Leggings",
        id: "diamond_leggings",
        recipe: {
            ingredients: [
                {
                    id: "diamond",
                    quantity: 7,
                },
            ],
            result: 1,
        },
    },
    diamond_ore: {
        name: "Diamond Ore",
        id: "diamond_ore",
        recipe: {
            baseItem: true,
        },
    },
    diamond_pickaxe: {
        name: "Diamond Pickaxe",
        id: "diamond_pickaxe",
        recipe: {
            ingredients: [
                {
                    id: "diamond",
                    quantity: 3,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    diamond_shovel: {
        name: "Diamond Shovel",
        id: "diamond_shovel",
        recipe: {
            ingredients: [
                {
                    id: "diamond",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    diamond_sword: {
        name: "Diamond Sword",
        id: "diamond_sword",
        recipe: {
            ingredients: [
                {
                    id: "diamond",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    diorite: {
        name: "Diorite",
        id: "diorite",
        recipe: {
            baseItem: true,
        },
    },
    diorite_slab: {
        name: "Diorite Slab",
        id: "diorite_slab",
        recipe: {
            ingredients: [
                {
                    id: "diorite",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    diorite_stairs: {
        name: "Diorite Stairs",
        id: "diorite_stairs",
        recipe: {
            ingredients: [
                {
                    id: "diorite",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    diorite_wall: {
        name: "Diorite Wall",
        id: "diorite_wall",
        recipe: {
            ingredients: [
                {
                    id: "diorite",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    dirt: {
        name: "Dirt",
        id: "dirt",
        recipe: {
            baseItem: true,
        },
    },
    dirt_path: {
        name: "Dirt Path",
        id: "dirt_path",
        recipe: {
            ingredients: [
                {
                    id: "dirt",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    dispenser: {
        name: "Dispenser",
        id: "dispenser",
        recipe: {
            ingredients: [
                {
                    id: "bow",
                    quantity: 1,
                },
                {
                    id: "cobblestone",
                    quantity: 7,
                },
                {
                    id: "redstone",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    dragon_egg: {
        name: "Dragon Egg",
        id: "dragon_egg",
        recipe: {
            baseItem: true,
        },
    },
    dragon_head: {
        name: "Dragon Head",
        id: "dragon_head",
        recipe: {
            baseItem: true,
        },
    },
    dried_kelp: {
        name: "Dried Kelp",
        id: "dried_kelp",
        recipe: {
            ingredients: [
                {
                    id: "kelp",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    dried_kelp_block: {
        name: "Dried Kelp Block",
        id: "dried_kelp_block",
        recipe: {
            ingredients: [
                {
                    id: "dried_kelp",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    dripstone_block: {
        name: "Dripstone Block",
        id: "dripstone_block",
        recipe: {
            baseItem: true,
        },
    },
    dropper: {
        name: "Dropper",
        id: "dropper",
        recipe: {
            ingredients: [
                {
                    id: "cobblestone",
                    quantity: 7,
                },
                {
                    id: "redstone",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    egg: {
        name: "Egg",
        id: "egg",
        recipe: {
            baseItem: true,
        },
    },
    elytra: {
        name: "Elytra",
        id: "elytra",
        recipe: {
            baseItem: true,
        },
    },
    emerald: {
        name: "Emerald",
        id: "emerald",
        recipe: {
            ingredients: [
                {
                    id: "emerald_ore",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    emerald_block: {
        name: "Block of Emerald",
        id: "emerald_block",
        recipe: {
            ingredients: [
                {
                    id: "emerald",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    emerald_ore: {
        name: "Emerald Ore",
        id: "emerald_ore",
        recipe: {
            baseItem: true,
        },
    },
    enchanting_table: {
        name: "Enchanting Table",
        id: "enchanting_table",
        recipe: {
            ingredients: [
                {
                    id: "book",
                    quantity: 1,
                },
                {
                    id: "diamond",
                    quantity: 2,
                },
                {
                    id: "obsidian",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    end_portal_frame: {
        name: "End Portal Frame",
        id: "end_portal_frame",
        recipe: {
            baseItem: true,
        },
    },
    end_rod: {
        name: "End Rod",
        id: "end_rod",
        recipe: {
            ingredients: [
                {
                    id: "blaze_rod",
                    quantity: 1,
                },
                {
                    id: "popped_chorus_fruit",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    end_stone: {
        name: "End Stone",
        id: "end_stone",
        recipe: {
            baseItem: true,
        },
    },
    end_stone_brick_slab: {
        name: "End Stone Brick Slab",
        id: "end_stone_brick_slab",
        recipe: {
            ingredients: [
                {
                    id: "end_stone_bricks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    end_stone_brick_stairs: {
        name: "End Stone Brick Stairs",
        id: "end_stone_brick_stairs",
        recipe: {
            ingredients: [
                {
                    id: "end_stone_bricks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    end_stone_brick_wall: {
        name: "End Stone Brick Wall",
        id: "end_stone_brick_wall",
        recipe: {
            ingredients: [
                {
                    id: "end_stone_bricks",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    end_stone_bricks: {
        name: "End Stone Bricks",
        id: "end_stone_bricks",
        recipe: {
            ingredients: [
                {
                    id: "end_stone",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    ender_chest: {
        name: "Ender Chest",
        id: "ender_chest",
        recipe: {
            ingredients: [
                {
                    id: "ender_eye",
                    quantity: 1,
                },
                {
                    id: "obsidian",
                    quantity: 8,
                },
            ],
            result: 1,
        },
    },
    ender_eye: {
        name: "Eye of Ender",
        id: "ender_eye",
        recipe: {
            ingredients: [
                {
                    id: "blaze_powder",
                    quantity: 1,
                },
                {
                    id: "ender_pearl",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    ender_pearl: {
        name: "Ender Pearl",
        id: "ender_pearl",
        recipe: {
            baseItem: true,
        },
    },
    experience_bottle: {
        name: "Bottle o' Enchanting",
        id: "experience_bottle",
        recipe: {
            baseItem: true,
        },
    },
    exposed_chiseled_copper: {
        name: "Exposed Chiseled Copper",
        id: "exposed_chiseled_copper",
        recipe: {
            ingredients: [
                {
                    id: "chiseled_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    exposed_copper: {
        name: "Exposed Copper",
        id: "exposed_copper",
        recipe: {
            ingredients: [
                {
                    id: "copper_block",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    exposed_copper_bulb: {
        name: "Exposed Copper Bulb",
        id: "exposed_copper_bulb",
        recipe: {
            ingredients: [
                {
                    id: "copper_bulb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    exposed_copper_door: {
        name: "Exposed Copper Door",
        id: "exposed_copper_door",
        recipe: {
            ingredients: [
                {
                    id: "copper_door",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    exposed_copper_grate: {
        name: "Exposed Copper Grate",
        id: "exposed_copper_grate",
        recipe: {
            ingredients: [
                {
                    id: "copper_grate",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    exposed_copper_trapdoor: {
        name: "Exposed Copper Trapdoor",
        id: "exposed_copper_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "copper_trapdoor",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    exposed_cut_copper: {
        name: "Exposed Cut Copper",
        id: "exposed_cut_copper",
        recipe: {
            ingredients: [
                {
                    id: "cut_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    exposed_cut_copper_slab: {
        name: "Exposed Cut Copper Slab",
        id: "exposed_cut_copper_slab",
        recipe: {
            ingredients: [
                {
                    id: "cut_copper_slab",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    exposed_cut_copper_stairs: {
        name: "Exposed Cut Copper Stairs",
        id: "exposed_cut_copper_stairs",
        recipe: {
            ingredients: [
                {
                    id: "cut_copper_stairs",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    farmland: {
        name: "Farmland",
        id: "farmland",
        recipe: {
            ingredients: [
                {
                    id: "dirt",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    feather: {
        name: "Feather",
        id: "feather",
        recipe: {
            baseItem: true,
        },
    },
    fern: {
        name: "Fern",
        id: "fern",
        recipe: {
            baseItem: true,
        },
    },
    fire_charge: {
        name: "Fire Charge",
        id: "fire_charge",
        recipe: {
            ingredients: [
                {
                    id: "blaze_powder",
                    quantity: 1,
                },
                {
                    id: "coal",
                    quantity: 1,
                },
                {
                    id: "gunpowder",
                    quantity: 1,
                },
            ],
            result: 3,
        },
    },
    fire_coral: {
        name: "Fire Coral",
        id: "fire_coral",
        recipe: {
            baseItem: true,
        },
    },
    fire_coral_block: {
        name: "Fire Coral Block",
        id: "fire_coral_block",
        recipe: {
            baseItem: true,
        },
    },
    fire_coral_fan: {
        name: "Fire Coral Fan",
        id: "fire_coral_fan",
        recipe: {
            baseItem: true,
        },
    },
    firework_rocket: {
        name: "Firework Rocket",
        id: "firework_rocket",
        recipe: {
            ingredients: [
                {
                    id: "gunpowder",
                    quantity: 1,
                },
                {
                    id: "paper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    fishing_rod: {
        name: "Fishing Rod",
        id: "fishing_rod",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 3,
                },
                {
                    id: "string",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    fletching_table: {
        name: "Fletching Table",
        id: "fletching_table",
        recipe: {
            ingredients: [
                {
                    id: "flint",
                    quantity: 2,
                },
                {
                    id: "tag_planks",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    flint: {
        name: "Flint",
        id: "flint",
        recipe: {
            ingredients: [
                {
                    id: "gravel",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    flint_and_steel: {
        name: "Flint and Steel",
        id: "flint_and_steel",
        recipe: {
            ingredients: [
                {
                    id: "flint",
                    quantity: 1,
                },
                {
                    id: "iron_ingot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    flower_pot: {
        name: "Flower Pot",
        id: "flower_pot",
        recipe: {
            ingredients: [
                {
                    id: "brick",
                    quantity: 3,
                },
            ],
            result: 3,
        },
    },
    flowering_azalea: {
        name: "Flowering Azalea",
        id: "flowering_azalea",
        recipe: {
            baseItem: true,
        },
    },
    flowering_azalea_leaves: {
        name: "Flowering Azalea Leaves",
        id: "flowering_azalea_leaves",
        recipe: {
            baseItem: true,
        },
    },
    frogspawn: {
        name: "Frogspawn",
        id: "frogspawn",
        recipe: {
            baseItem: true,
        },
    },
    furnace: {
        name: "Furnace",
        id: "furnace",
        recipe: {
            ingredients: [
                {
                    id: "cobblestone",
                    quantity: 8,
                },
            ],
            result: 1,
        },
    },
    furnace_minecart: {
        name: "Minecart with Furnace",
        id: "furnace_minecart",
        recipe: {
            ingredients: [
                {
                    id: "furnace",
                    quantity: 1,
                },
                {
                    id: "minecart",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    gilded_blackstone: {
        name: "Gilded Blackstone",
        id: "gilded_blackstone",
        recipe: {
            baseItem: true,
        },
    },
    glass: {
        name: "Glass",
        id: "glass",
        recipe: {
            ingredients: [
                {
                    id: "sand",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    glass_bottle: {
        name: "Glass Bottle",
        id: "glass_bottle",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 3,
                },
            ],
            result: 3,
        },
    },
    glass_pane: {
        name: "Glass Pane",
        id: "glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 6,
                },
            ],
            result: 16,
        },
    },
    glow_ink_sac: {
        name: "Glow Ink Sac",
        id: "glow_ink_sac",
        recipe: {
            baseItem: true,
        },
    },
    glow_item_frame: {
        name: "Glow Item Frame",
        id: "glow_item_frame",
        recipe: {
            ingredients: [
                {
                    id: "glow_ink_sac",
                    quantity: 1,
                },
                {
                    id: "item_frame",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    glow_lichen: {
        name: "Glow Lichen",
        id: "glow_lichen",
        recipe: {
            baseItem: true,
        },
    },
    glowstone: {
        name: "Glowstone",
        id: "glowstone",
        recipe: {
            baseItem: true,
        },
    },
    glowstone_dust: {
        name: "Glowstone Dust",
        id: "glowstone_dust",
        recipe: {
            ingredients: [
                {
                    id: "glowstone",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    gold_block: {
        name: "Block of Gold",
        id: "gold_block",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    gold_ingot: {
        name: "Gold Ingot",
        id: "gold_ingot",
        recipe: {
            ingredients: [
                {
                    id: "raw_gold",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    gold_nugget: {
        name: "Gold Nugget",
        id: "gold_nugget",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 1,
                },
            ],
            result: 9,
        },
    },
    gold_ore: {
        name: "Gold Ore",
        id: "gold_ore",
        recipe: {
            baseItem: true,
        },
    },
    golden_apple: {
        name: "Golden Apple",
        id: "golden_apple",
        recipe: {
            ingredients: [
                {
                    id: "apple",
                    quantity: 1,
                },
                {
                    id: "gold_ingot",
                    quantity: 8,
                },
            ],
            result: 1,
        },
    },
    golden_axe: {
        name: "Golden Axe",
        id: "golden_axe",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 3,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    golden_boots: {
        name: "Golden Boots",
        id: "golden_boots",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    golden_carrot: {
        name: "Golden Carrot",
        id: "golden_carrot",
        recipe: {
            ingredients: [
                {
                    id: "carrot",
                    quantity: 1,
                },
                {
                    id: "gold_nugget",
                    quantity: 8,
                },
            ],
            result: 1,
        },
    },
    golden_chestplate: {
        name: "Golden Chestplate",
        id: "golden_chestplate",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 8,
                },
            ],
            result: 1,
        },
    },
    golden_helmet: {
        name: "Golden Helmet",
        id: "golden_helmet",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    golden_hoe: {
        name: "Golden Hoe",
        id: "golden_hoe",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    golden_horse_armor: {
        name: "Golden Horse Armor",
        id: "golden_horse_armor",
        recipe: {
            baseItem: true,
        },
    },
    golden_leggings: {
        name: "Golden Leggings",
        id: "golden_leggings",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 7,
                },
            ],
            result: 1,
        },
    },
    golden_pickaxe: {
        name: "Golden Pickaxe",
        id: "golden_pickaxe",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 3,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    golden_shovel: {
        name: "Golden Shovel",
        id: "golden_shovel",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    golden_sword: {
        name: "Golden Sword",
        id: "golden_sword",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    granite: {
        name: "Granite",
        id: "granite",
        recipe: {
            baseItem: true,
        },
    },
    granite_slab: {
        name: "Granite Slab",
        id: "granite_slab",
        recipe: {
            ingredients: [
                {
                    id: "granite",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    granite_stairs: {
        name: "Granite Stairs",
        id: "granite_stairs",
        recipe: {
            ingredients: [
                {
                    id: "granite",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    granite_wall: {
        name: "Granite Wall",
        id: "granite_wall",
        recipe: {
            ingredients: [
                {
                    id: "granite",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    grass_block: {
        name: "Grass Block",
        id: "grass_block",
        recipe: {
            baseItem: true,
        },
    },
    gravel: {
        name: "Gravel",
        id: "gravel",
        recipe: {
            baseItem: true,
        },
    },
    gray_banner: {
        name: "Gray Banner",
        id: "gray_banner",
        recipe: {
            ingredients: [
                {
                    id: "gray_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    gray_bed: {
        name: "Gray Bed",
        id: "gray_bed",
        recipe: {
            ingredients: [
                {
                    id: "gray_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    gray_candle: {
        name: "Gray Candle",
        id: "gray_candle",
        recipe: {
            ingredients: [
                {
                    id: "candle",
                    quantity: 1,
                },
                {
                    id: "gray_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    gray_carpet: {
        name: "Gray Carpet",
        id: "gray_carpet",
        recipe: {
            ingredients: [
                {
                    id: "gray_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    gray_concrete: {
        name: "Gray Concrete",
        id: "gray_concrete",
        recipe: {
            ingredients: [
                {
                    id: "gray_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    gray_concrete_powder: {
        name: "Gray Concrete Powder",
        id: "gray_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "gray_dye",
                    quantity: 1,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    gray_dye: {
        name: "Gray Dye",
        id: "gray_dye",
        recipe: {
            ingredients: [
                {
                    id: "black_dye",
                    quantity: 1,
                },
                {
                    id: "white_dye",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    gray_glazed_terracotta: {
        name: "Gray Glazed Terracotta",
        id: "gray_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "gray_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    gray_shulker_box: {
        name: "Gray Shulker Box",
        id: "gray_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "gray_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    gray_stained_glass: {
        name: "Gray Stained Glass",
        id: "gray_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 8,
                },
                {
                    id: "gray_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    gray_stained_glass_pane: {
        name: "Gray Stained Glass Pane",
        id: "gray_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "glass_pane",
                    quantity: 8,
                },
                {
                    id: "gray_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    gray_terracotta: {
        name: "Gray Terracotta",
        id: "gray_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "gray_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    gray_wool: {
        name: "Gray Wool",
        id: "gray_wool",
        recipe: {
            ingredients: [
                {
                    id: "gray_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    green_banner: {
        name: "Green Banner",
        id: "green_banner",
        recipe: {
            ingredients: [
                {
                    id: "green_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    green_bed: {
        name: "Green Bed",
        id: "green_bed",
        recipe: {
            ingredients: [
                {
                    id: "green_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    green_candle: {
        name: "Green Candle",
        id: "green_candle",
        recipe: {
            ingredients: [
                {
                    id: "candle",
                    quantity: 1,
                },
                {
                    id: "green_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    green_carpet: {
        name: "Green Carpet",
        id: "green_carpet",
        recipe: {
            ingredients: [
                {
                    id: "green_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    green_concrete: {
        name: "Green Concrete",
        id: "green_concrete",
        recipe: {
            ingredients: [
                {
                    id: "green_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    green_concrete_powder: {
        name: "Green Concrete Powder",
        id: "green_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "green_dye",
                    quantity: 1,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    green_dye: {
        name: "Green Dye",
        id: "green_dye",
        recipe: {
            ingredients: [
                {
                    id: "cactus",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    green_glazed_terracotta: {
        name: "Green Glazed Terracotta",
        id: "green_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "green_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    green_shulker_box: {
        name: "Green Shulker Box",
        id: "green_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "green_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    green_stained_glass: {
        name: "Green Stained Glass",
        id: "green_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 8,
                },
                {
                    id: "green_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    green_stained_glass_pane: {
        name: "Green Stained Glass Pane",
        id: "green_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "glass_pane",
                    quantity: 8,
                },
                {
                    id: "green_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    green_terracotta: {
        name: "Green Terracotta",
        id: "green_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "green_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    green_wool: {
        name: "Green Wool",
        id: "green_wool",
        recipe: {
            ingredients: [
                {
                    id: "green_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    grindstone: {
        name: "Grindstone",
        id: "grindstone",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 2,
                },
                {
                    id: "stone_slab",
                    quantity: 1,
                },
                {
                    id: "tag_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    gunpowder: {
        name: "Gunpowder",
        id: "gunpowder",
        recipe: {
            baseItem: true,
        },
    },
    hanging_roots: {
        name: "Hanging Roots",
        id: "hanging_roots",
        recipe: {
            baseItem: true,
        },
    },
    hay_block: {
        name: "Hay Bale",
        id: "hay_block",
        recipe: {
            ingredients: [
                {
                    id: "wheat",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    heart_of_the_sea: {
        name: "Heart of the Sea",
        id: "heart_of_the_sea",
        recipe: {
            baseItem: true,
        },
    },
    heavy_core: {
        name: "Heavy Core",
        id: "heavy_core",
        recipe: {
            baseItem: true,
        },
    },
    heavy_weighted_pressure_plate: {
        name: "Heavy Weighted Pressure Plate",
        id: "heavy_weighted_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    honey_block: {
        name: "Honey Block",
        id: "honey_block",
        recipe: {
            ingredients: [
                {
                    id: "honey_bottle",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    honey_bottle: {
        name: "Honey Bottle",
        id: "honey_bottle",
        recipe: {
            ingredients: [
                {
                    id: "glass_bottle",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    honeycomb: {
        name: "Honeycomb",
        id: "honeycomb",
        recipe: {
            baseItem: true,
        },
    },
    honeycomb_block: {
        name: "Honeycomb Block",
        id: "honeycomb_block",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    hopper: {
        name: "Hopper",
        id: "hopper",
        recipe: {
            ingredients: [
                {
                    id: "chest",
                    quantity: 1,
                },
                {
                    id: "iron_ingot",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    hopper_minecart: {
        name: "Minecart with Hopper",
        id: "hopper_minecart",
        recipe: {
            ingredients: [
                {
                    id: "hopper",
                    quantity: 1,
                },
                {
                    id: "minecart",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    horn_coral: {
        name: "Horn Coral",
        id: "horn_coral",
        recipe: {
            baseItem: true,
        },
    },
    horn_coral_block: {
        name: "Horn Coral Block",
        id: "horn_coral_block",
        recipe: {
            baseItem: true,
        },
    },
    horn_coral_fan: {
        name: "Horn Coral Fan",
        id: "horn_coral_fan",
        recipe: {
            baseItem: true,
        },
    },
    ice: {
        name: "Ice",
        id: "ice",
        recipe: {
            baseItem: true,
        },
    },
    infested_chiseled_stone_bricks: {
        name: "Infested Chiseled Stone Bricks",
        id: "infested_chiseled_stone_bricks",
        recipe: {
            baseItem: true,
        },
    },
    infested_cobblestone: {
        name: "Infested Cobblestone",
        id: "infested_cobblestone",
        recipe: {
            baseItem: true,
        },
    },
    infested_cracked_stone_bricks: {
        name: "Infested Cracked Stone Bricks",
        id: "infested_cracked_stone_bricks",
        recipe: {
            baseItem: true,
        },
    },
    infested_deepslate: {
        name: "Infested Deepslate",
        id: "infested_deepslate",
        recipe: {
            baseItem: true,
        },
    },
    infested_mossy_stone_bricks: {
        name: "Infested Mossy Stone Bricks",
        id: "infested_mossy_stone_bricks",
        recipe: {
            baseItem: true,
        },
    },
    infested_stone: {
        name: "Infested Stone",
        id: "infested_stone",
        recipe: {
            baseItem: true,
        },
    },
    infested_stone_bricks: {
        name: "Infested Stone Bricks",
        id: "infested_stone_bricks",
        recipe: {
            baseItem: true,
        },
    },
    ink_sac: {
        name: "Ink Sac",
        id: "ink_sac",
        recipe: {
            baseItem: true,
        },
    },
    iron_bars: {
        name: "Iron Bars",
        id: "iron_bars",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 6,
                },
            ],
            result: 16,
        },
    },
    iron_block: {
        name: "Block of Iron",
        id: "iron_block",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    iron_door: {
        name: "Iron Door",
        id: "iron_door",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    iron_ingot: {
        name: "Iron Ingot",
        id: "iron_ingot",
        recipe: {
            ingredients: [
                {
                    id: "raw_iron",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    iron_nugget: {
        name: "Iron Nugget",
        id: "iron_nugget",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 1,
                },
            ],
            result: 9,
        },
    },
    iron_ore: {
        name: "Iron Ore",
        id: "iron_ore",
        recipe: {
            baseItem: true,
        },
    },
    iron_trapdoor: {
        name: "Iron Trapdoor",
        id: "iron_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 4,
                },
            ],
            result: 2,
        },
    },
    item_frame: {
        name: "Item Frame",
        id: "item_frame",
        recipe: {
            ingredients: [
                {
                    id: "leather",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 8,
                },
            ],
            result: 1,
        },
    },
    jack_o_lantern: {
        name: "Jack o'Lantern",
        id: "jack_o_lantern",
        recipe: {
            ingredients: [
                {
                    id: "carved_pumpkin",
                    quantity: 1,
                },
                {
                    id: "torch",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    jigsaw: {
        name: "Jigsaw Block",
        id: "jigsaw",
        recipe: {
            baseItem: true,
        },
    },
    jukebox: {
        name: "Jukebox",
        id: "jukebox",
        recipe: {
            ingredients: [
                {
                    id: "diamond",
                    quantity: 1,
                },
                {
                    id: "tag_planks",
                    quantity: 8,
                },
            ],
            result: 1,
        },
    },
    jungle_boat: {
        name: "Jungle Boat",
        id: "jungle_boat",
        recipe: {
            ingredients: [
                {
                    id: "jungle_planks",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    jungle_button: {
        name: "Jungle Button",
        id: "jungle_button",
        recipe: {
            ingredients: [
                {
                    id: "jungle_planks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    jungle_chest_boat: {
        name: "Jungle Chest Boat",
        id: "jungle_chest_boat",
        recipe: {
            ingredients: [
                {
                    id: "chest",
                    quantity: 1,
                },
                {
                    id: "jungle_boat",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    jungle_door: {
        name: "Jungle Door",
        id: "jungle_door",
        recipe: {
            ingredients: [
                {
                    id: "jungle_planks",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    jungle_fence: {
        name: "Jungle Fence",
        id: "jungle_fence",
        recipe: {
            ingredients: [
                {
                    id: "jungle_planks",
                    quantity: 4,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    jungle_fence_gate: {
        name: "Jungle Fence Gate",
        id: "jungle_fence_gate",
        recipe: {
            ingredients: [
                {
                    id: "jungle_planks",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    jungle_hanging_sign: {
        name: "Jungle Hanging Sign",
        id: "jungle_hanging_sign",
        recipe: {
            ingredients: [
                {
                    id: "chain",
                    quantity: 2,
                },
                {
                    id: "jungle_log",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    jungle_leaves: {
        name: "Jungle Leaves",
        id: "jungle_leaves",
        recipe: {
            baseItem: true,
        },
    },
    jungle_log: {
        name: "Jungle Log",
        id: "jungle_log",
        recipe: {
            baseItem: true,
        },
    },
    jungle_planks: {
        name: "Jungle Planks",
        id: "jungle_planks",
        recipe: {
            ingredients: [
                {
                    id: "jungle_log",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    jungle_pressure_plate: {
        name: "Jungle Pressure Plate",
        id: "jungle_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "jungle_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    jungle_sapling: {
        name: "Jungle Sapling",
        id: "jungle_sapling",
        recipe: {
            baseItem: true,
        },
    },
    jungle_sign: {
        name: "Jungle Sign",
        id: "jungle_sign",
        recipe: {
            ingredients: [
                {
                    id: "jungle_planks",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 3,
        },
    },
    jungle_slab: {
        name: "Jungle Slab",
        id: "jungle_slab",
        recipe: {
            ingredients: [
                {
                    id: "jungle_planks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    jungle_stairs: {
        name: "Jungle Stairs",
        id: "jungle_stairs",
        recipe: {
            ingredients: [
                {
                    id: "jungle_planks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    jungle_trapdoor: {
        name: "Jungle Trapdoor",
        id: "jungle_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "jungle_planks",
                    quantity: 6,
                },
            ],
            result: 2,
        },
    },
    jungle_wood: {
        name: "Jungle Wood",
        id: "jungle_wood",
        recipe: {
            ingredients: [
                {
                    id: "jungle_log",
                    quantity: 4,
                },
            ],
            result: 3,
        },
    },
    kelp: {
        name: "Kelp",
        id: "kelp",
        recipe: {
            baseItem: true,
        },
    },
    ladder: {
        name: "Ladder",
        id: "ladder",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 7,
                },
            ],
            result: 3,
        },
    },
    lantern: {
        name: "Lantern",
        id: "lantern",
        recipe: {
            ingredients: [
                {
                    id: "iron_nugget",
                    quantity: 8,
                },
                {
                    id: "torch",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    lapis_block: {
        name: "Block of Lapis Lazuli",
        id: "lapis_block",
        recipe: {
            ingredients: [
                {
                    id: "lapis_lazuli",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    lapis_lazuli: {
        name: "Lapis Lazuli",
        id: "lapis_lazuli",
        recipe: {
            ingredients: [
                {
                    id: "lapis_ore",
                    quantity: 1,
                },
            ],
            result: 14,
        },
    },
    lapis_ore: {
        name: "Lapis Lazuli Ore",
        id: "lapis_ore",
        recipe: {
            baseItem: true,
        },
    },
    large_amethyst_bud: {
        name: "Large Amethyst Bud",
        id: "large_amethyst_bud",
        recipe: {
            baseItem: true,
        },
    },
    large_fern: {
        name: "Large Fern",
        id: "large_fern",
        recipe: {
            baseItem: true,
        },
    },
    lava: {
        name: "Lava",
        id: "lava",
        recipe: {
            baseItem: true,
        },
    },
    lava_bucket: {
        name: "Lava Bucket",
        id: "lava_bucket",
        recipe: {
            ingredients: [
                {
                    id: "bucket",
                    quantity: 1,
                },
                {
                    id: "lava",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    lava_cauldron: {
        name: "Lava Cauldron",
        id: "lava_cauldron",
        recipe: {
            ingredients: [
                {
                    id: "cauldron",
                    quantity: 1,
                },
                {
                    id: "lava_bucket",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    lead: {
        name: "Lead",
        id: "lead",
        recipe: {
            ingredients: [
                {
                    id: "slime_ball",
                    quantity: 1,
                },
                {
                    id: "string",
                    quantity: 4,
                },
            ],
            result: 2,
        },
    },
    leather: {
        name: "Leather",
        id: "leather",
        recipe: {
            baseItem: true,
        },
    },
    lectern: {
        name: "Lectern",
        id: "lectern",
        recipe: {
            ingredients: [
                {
                    id: "bookshelf",
                    quantity: 1,
                },
                {
                    id: "tag_wood_slabs",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    lever: {
        name: "Lever",
        id: "lever",
        recipe: {
            ingredients: [
                {
                    id: "cobblestone",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    light: {
        name: "Light Block",
        id: "light",
        recipe: {
            baseItem: true,
        },
    },
    light_blue_banner: {
        name: "Light Blue Banner",
        id: "light_blue_banner",
        recipe: {
            ingredients: [
                {
                    id: "light_blue_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    light_blue_bed: {
        name: "Light Blue Bed",
        id: "light_blue_bed",
        recipe: {
            ingredients: [
                {
                    id: "light_blue_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    light_blue_candle: {
        name: "Light Blue Candle",
        id: "light_blue_candle",
        recipe: {
            ingredients: [
                {
                    id: "candle",
                    quantity: 1,
                },
                {
                    id: "light_blue_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    light_blue_carpet: {
        name: "Light Blue Carpet",
        id: "light_blue_carpet",
        recipe: {
            ingredients: [
                {
                    id: "light_blue_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    light_blue_concrete: {
        name: "Light Blue Concrete",
        id: "light_blue_concrete",
        recipe: {
            ingredients: [
                {
                    id: "light_blue_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    light_blue_concrete_powder: {
        name: "Light Blue Concrete Powder",
        id: "light_blue_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "light_blue_dye",
                    quantity: 1,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    light_blue_dye: {
        name: "Light Blue Dye",
        id: "light_blue_dye",
        recipe: {
            ingredients: [
                {
                    id: "blue_dye",
                    quantity: 1,
                },
                {
                    id: "white_dye",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    light_blue_glazed_terracotta: {
        name: "Light Blue Glazed Terracotta",
        id: "light_blue_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "light_blue_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    light_blue_shulker_box: {
        name: "Light Blue Shulker Box",
        id: "light_blue_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "light_blue_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    light_blue_stained_glass: {
        name: "Light Blue Stained Glass",
        id: "light_blue_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 8,
                },
                {
                    id: "light_blue_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    light_blue_stained_glass_pane: {
        name: "Light Blue Stained Glass Pane",
        id: "light_blue_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "glass_pane",
                    quantity: 8,
                },
                {
                    id: "light_blue_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    light_blue_terracotta: {
        name: "Light Blue Terracotta",
        id: "light_blue_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "light_blue_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    light_blue_wool: {
        name: "Light Blue Wool",
        id: "light_blue_wool",
        recipe: {
            ingredients: [
                {
                    id: "light_blue_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    light_gray_banner: {
        name: "Light Gray Banner",
        id: "light_gray_banner",
        recipe: {
            ingredients: [
                {
                    id: "light_gray_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    light_gray_bed: {
        name: "Light Gray Bed",
        id: "light_gray_bed",
        recipe: {
            ingredients: [
                {
                    id: "light_gray_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    light_gray_candle: {
        name: "Light Gray Candle",
        id: "light_gray_candle",
        recipe: {
            ingredients: [
                {
                    id: "candle",
                    quantity: 1,
                },
                {
                    id: "light_gray_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    light_gray_carpet: {
        name: "Light Gray Carpet",
        id: "light_gray_carpet",
        recipe: {
            ingredients: [
                {
                    id: "light_gray_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    light_gray_concrete: {
        name: "Light Gray Concrete",
        id: "light_gray_concrete",
        recipe: {
            ingredients: [
                {
                    id: "light_gray_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    light_gray_concrete_powder: {
        name: "Light Gray Concrete Powder",
        id: "light_gray_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "light_gray_dye",
                    quantity: 1,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    light_gray_dye: {
        name: "Light Gray Dye",
        id: "light_gray_dye",
        recipe: {
            ingredients: [
                {
                    id: "gray_dye",
                    quantity: 1,
                },
                {
                    id: "white_dye",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    light_gray_glazed_terracotta: {
        name: "Light Gray Glazed Terracotta",
        id: "light_gray_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "light_gray_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    light_gray_shulker_box: {
        name: "Light Gray Shulker Box",
        id: "light_gray_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "light_gray_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    light_gray_stained_glass: {
        name: "Light Gray Stained Glass",
        id: "light_gray_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 8,
                },
                {
                    id: "light_gray_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    light_gray_stained_glass_pane: {
        name: "Light Gray Stained Glass Pane",
        id: "light_gray_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "glass_pane",
                    quantity: 8,
                },
                {
                    id: "light_gray_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    light_gray_terracotta: {
        name: "Light Gray Terracotta",
        id: "light_gray_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "light_gray_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    light_gray_wool: {
        name: "Light Gray Wool",
        id: "light_gray_wool",
        recipe: {
            ingredients: [
                {
                    id: "light_gray_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    light_weighted_pressure_plate: {
        name: "Light Weighted Pressure Plate",
        id: "light_weighted_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    lightning_rod: {
        name: "Lightning Rod",
        id: "lightning_rod",
        recipe: {
            ingredients: [
                {
                    id: "copper_ingot",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    lilac: {
        name: "Lilac",
        id: "lilac",
        recipe: {
            baseItem: true,
        },
    },
    lily_of_the_valley: {
        name: "Lily of the Valley",
        id: "lily_of_the_valley",
        recipe: {
            baseItem: true,
        },
    },
    lily_pad: {
        name: "Lily Pad",
        id: "lily_pad",
        recipe: {
            baseItem: true,
        },
    },
    lime_banner: {
        name: "Lime Banner",
        id: "lime_banner",
        recipe: {
            ingredients: [
                {
                    id: "lime_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    lime_bed: {
        name: "Lime Bed",
        id: "lime_bed",
        recipe: {
            ingredients: [
                {
                    id: "lime_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    lime_candle: {
        name: "Lime Candle",
        id: "lime_candle",
        recipe: {
            ingredients: [
                {
                    id: "candle",
                    quantity: 1,
                },
                {
                    id: "lime_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    lime_carpet: {
        name: "Lime Carpet",
        id: "lime_carpet",
        recipe: {
            ingredients: [
                {
                    id: "lime_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    lime_concrete: {
        name: "Lime Concrete",
        id: "lime_concrete",
        recipe: {
            ingredients: [
                {
                    id: "lime_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    lime_concrete_powder: {
        name: "Lime Concrete Powder",
        id: "lime_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "lime_dye",
                    quantity: 1,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    lime_dye: {
        name: "Lime Dye",
        id: "lime_dye",
        recipe: {
            ingredients: [
                {
                    id: "green_dye",
                    quantity: 1,
                },
                {
                    id: "white_dye",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    lime_glazed_terracotta: {
        name: "Lime Glazed Terracotta",
        id: "lime_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "lime_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    lime_shulker_box: {
        name: "Lime Shulker Box",
        id: "lime_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "lime_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    lime_stained_glass: {
        name: "Lime Stained Glass",
        id: "lime_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 8,
                },
                {
                    id: "lime_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    lime_stained_glass_pane: {
        name: "Lime Stained Glass Pane",
        id: "lime_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "glass_pane",
                    quantity: 8,
                },
                {
                    id: "lime_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    lime_terracotta: {
        name: "Lime Terracotta",
        id: "lime_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "lime_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    lime_wool: {
        name: "Lime Wool",
        id: "lime_wool",
        recipe: {
            ingredients: [
                {
                    id: "lime_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    lodestone: {
        name: "Lodestone",
        id: "lodestone",
        recipe: {
            ingredients: [
                {
                    id: "chiseled_stone_bricks",
                    quantity: 8,
                },
                {
                    id: "netherite_ingot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    loom: {
        name: "Loom",
        id: "loom",
        recipe: {
            ingredients: [
                {
                    id: "string",
                    quantity: 2,
                },
                {
                    id: "tag_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    magenta_banner: {
        name: "Magenta Banner",
        id: "magenta_banner",
        recipe: {
            ingredients: [
                {
                    id: "magenta_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    magenta_bed: {
        name: "Magenta Bed",
        id: "magenta_bed",
        recipe: {
            ingredients: [
                {
                    id: "magenta_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    magenta_candle: {
        name: "Magenta Candle",
        id: "magenta_candle",
        recipe: {
            ingredients: [
                {
                    id: "candle",
                    quantity: 1,
                },
                {
                    id: "magenta_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    magenta_carpet: {
        name: "Magenta Carpet",
        id: "magenta_carpet",
        recipe: {
            ingredients: [
                {
                    id: "magenta_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    magenta_concrete: {
        name: "Magenta Concrete",
        id: "magenta_concrete",
        recipe: {
            ingredients: [
                {
                    id: "magenta_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    magenta_concrete_powder: {
        name: "Magenta Concrete Powder",
        id: "magenta_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "magenta_dye",
                    quantity: 1,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    magenta_dye: {
        name: "Magenta Dye",
        id: "magenta_dye",
        recipe: {
            ingredients: [
                {
                    id: "blue_dye",
                    quantity: 1,
                },
                {
                    id: "red_dye",
                    quantity: 2,
                },
                {
                    id: "white_dye",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    magenta_glazed_terracotta: {
        name: "Magenta Glazed Terracotta",
        id: "magenta_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "magenta_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    magenta_shulker_box: {
        name: "Magenta Shulker Box",
        id: "magenta_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "magenta_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    magenta_stained_glass: {
        name: "Magenta Stained Glass",
        id: "magenta_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 8,
                },
                {
                    id: "magenta_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    magenta_stained_glass_pane: {
        name: "Magenta Stained Glass Pane",
        id: "magenta_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "glass_pane",
                    quantity: 8,
                },
                {
                    id: "magenta_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    magenta_terracotta: {
        name: "Magenta Terracotta",
        id: "magenta_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "magenta_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    magenta_wool: {
        name: "Magenta Wool",
        id: "magenta_wool",
        recipe: {
            ingredients: [
                {
                    id: "magenta_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    magma_block: {
        name: "Magma Block",
        id: "magma_block",
        recipe: {
            baseItem: true,
        },
    },
    mangrove_boat: {
        name: "Mangrove Boat",
        id: "mangrove_boat",
        recipe: {
            ingredients: [
                {
                    id: "mangrove_planks",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    mangrove_button: {
        name: "Mangrove Button",
        id: "mangrove_button",
        recipe: {
            ingredients: [
                {
                    id: "mangrove_planks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    mangrove_chest_boat: {
        name: "Mangrove Chest Boat",
        id: "mangrove_chest_boat",
        recipe: {
            ingredients: [
                {
                    id: "chest",
                    quantity: 1,
                },
                {
                    id: "mangrove_boat",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    mangrove_door: {
        name: "Mangrove Door",
        id: "mangrove_door",
        recipe: {
            ingredients: [
                {
                    id: "mangrove_planks",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    mangrove_fence: {
        name: "Mangrove Fence",
        id: "mangrove_fence",
        recipe: {
            ingredients: [
                {
                    id: "mangrove_planks",
                    quantity: 4,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    mangrove_fence_gate: {
        name: "Mangrove Fence Gate",
        id: "mangrove_fence_gate",
        recipe: {
            ingredients: [
                {
                    id: "mangrove_planks",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    mangrove_hanging_sign: {
        name: "Mangrove Hanging Sign",
        id: "mangrove_hanging_sign",
        recipe: {
            ingredients: [
                {
                    id: "chain",
                    quantity: 2,
                },
                {
                    id: "mangrove_log",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    mangrove_leaves: {
        name: "Mangrove Leaves",
        id: "mangrove_leaves",
        recipe: {
            baseItem: true,
        },
    },
    mangrove_log: {
        name: "Mangrove Log",
        id: "mangrove_log",
        recipe: {
            baseItem: true,
        },
    },
    mangrove_planks: {
        name: "Mangrove Planks",
        id: "mangrove_planks",
        recipe: {
            ingredients: [
                {
                    id: "mangrove_log",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    mangrove_pressure_plate: {
        name: "Mangrove Pressure Plate",
        id: "mangrove_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "mangrove_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    mangrove_propagule: {
        name: "Mangrove Propagule",
        id: "mangrove_propagule",
        recipe: {
            baseItem: true,
        },
    },
    mangrove_roots: {
        name: "Mangrove Roots",
        id: "mangrove_roots",
        recipe: {
            baseItem: true,
        },
    },
    mangrove_sign: {
        name: "Mangrove Sign",
        id: "mangrove_sign",
        recipe: {
            ingredients: [
                {
                    id: "mangrove_planks",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 3,
        },
    },
    mangrove_slab: {
        name: "Mangrove Slab",
        id: "mangrove_slab",
        recipe: {
            ingredients: [
                {
                    id: "mangrove_planks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    mangrove_stairs: {
        name: "Mangrove Stairs",
        id: "mangrove_stairs",
        recipe: {
            ingredients: [
                {
                    id: "mangrove_planks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    mangrove_trapdoor: {
        name: "Mangrove Trapdoor",
        id: "mangrove_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "mangrove_planks",
                    quantity: 6,
                },
            ],
            result: 2,
        },
    },
    mangrove_wood: {
        name: "Mangrove Wood",
        id: "mangrove_wood",
        recipe: {
            ingredients: [
                {
                    id: "mangrove_log",
                    quantity: 4,
                },
            ],
            result: 3,
        },
    },
    medium_amethyst_bud: {
        name: "Medium Amethyst Bud",
        id: "medium_amethyst_bud",
        recipe: {
            baseItem: true,
        },
    },
    melon: {
        name: "Melon",
        id: "melon",
        recipe: {
            baseItem: true,
        },
    },
    melon_seeds: {
        name: "Melon Seeds",
        id: "melon_seeds",
        recipe: {
            baseItem: true,
        },
    },
    melon_slice: {
        name: "Melon Slice",
        id: "melon_slice",
        recipe: {
            ingredients: [
                {
                    id: "melon",
                    quantity: 1,
                },
            ],
            result: 6,
        },
    },
    melon_stem: {
        name: "Melon Stem",
        id: "melon_stem",
        recipe: {
            ingredients: [
                {
                    id: "melon_seeds",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    milk_bucket: {
        name: "Milk Bucket",
        id: "milk_bucket",
        recipe: {
            ingredients: [
                {
                    id: "bucket",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    minecart: {
        name: "Minecart",
        id: "minecart",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    moss_block: {
        name: "Moss Block",
        id: "moss_block",
        recipe: {
            baseItem: true,
        },
    },
    moss_carpet: {
        name: "Moss Carpet",
        id: "moss_carpet",
        recipe: {
            ingredients: [
                {
                    id: "moss_block",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    mossy_cobblestone: {
        name: "Mossy Cobblestone",
        id: "mossy_cobblestone",
        recipe: {
            baseItem: true,
        },
    },
    mossy_cobblestone_slab: {
        name: "Mossy Cobblestone Slab",
        id: "mossy_cobblestone_slab",
        recipe: {
            ingredients: [
                {
                    id: "mossy_cobblestone",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    mossy_cobblestone_stairs: {
        name: "Mossy Cobblestone Stairs",
        id: "mossy_cobblestone_stairs",
        recipe: {
            ingredients: [
                {
                    id: "mossy_cobblestone",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    mossy_cobblestone_wall: {
        name: "Mossy Cobblestone Wall",
        id: "mossy_cobblestone_wall",
        recipe: {
            ingredients: [
                {
                    id: "mossy_cobblestone",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    mossy_stone_brick_slab: {
        name: "Mossy Stone Brick Slab",
        id: "mossy_stone_brick_slab",
        recipe: {
            ingredients: [
                {
                    id: "mossy_stone_bricks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    mossy_stone_brick_stairs: {
        name: "Mossy Stone Brick Stairs",
        id: "mossy_stone_brick_stairs",
        recipe: {
            ingredients: [
                {
                    id: "mossy_stone_bricks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    mossy_stone_brick_wall: {
        name: "Mossy Stone Brick Wall",
        id: "mossy_stone_brick_wall",
        recipe: {
            ingredients: [
                {
                    id: "mossy_stone_bricks",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    mossy_stone_bricks: {
        name: "Mossy Stone Bricks",
        id: "mossy_stone_bricks",
        recipe: {
            baseItem: true,
        },
    },
    mud: {
        name: "Mud",
        id: "mud",
        recipe: {
            ingredients: [
                {
                    id: "dirt",
                    quantity: 1,
                },
                {
                    id: "water_bottle",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    mud_brick_slab: {
        name: "Mud Brick Slab",
        id: "mud_brick_slab",
        recipe: {
            ingredients: [
                {
                    id: "mud_bricks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    mud_brick_stairs: {
        name: "Mud Brick Stairs",
        id: "mud_brick_stairs",
        recipe: {
            ingredients: [
                {
                    id: "mud_bricks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    mud_brick_wall: {
        name: "Mud Brick Wall",
        id: "mud_brick_wall",
        recipe: {
            ingredients: [
                {
                    id: "mud_bricks",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    mud_bricks: {
        name: "Mud Bricks",
        id: "mud_bricks",
        recipe: {
            ingredients: [
                {
                    id: "packed_mud",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    muddy_mangrove_roots: {
        name: "Muddy Mangrove Roots",
        id: "muddy_mangrove_roots",
        recipe: {
            ingredients: [
                {
                    id: "mangrove_roots",
                    quantity: 1,
                },
                {
                    id: "mud",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    mushroom_stem: {
        name: "Mushroom Stem",
        id: "mushroom_stem",
        recipe: {
            baseItem: true,
        },
    },
    mutton: {
        name: "Raw Mutton",
        id: "mutton",
        recipe: {
            baseItem: true,
        },
    },
    mycelium: {
        name: "Mycelium",
        id: "mycelium",
        recipe: {
            baseItem: true,
        },
    },
    nautilus_shell: {
        name: "Nautilus Shell",
        id: "nautilus_shell",
        recipe: {
            baseItem: true,
        },
    },
    nether_brick: {
        name: "Nether Brick",
        id: "nether_brick",
        recipe: {
            ingredients: [
                {
                    id: "netherrack",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    nether_brick_fence: {
        name: "Nether Brick Fence",
        id: "nether_brick_fence",
        recipe: {
            ingredients: [
                {
                    id: "nether_brick",
                    quantity: 2,
                },
                {
                    id: "nether_bricks",
                    quantity: 4,
                },
            ],
            result: 3,
        },
    },
    nether_brick_slab: {
        name: "Nether Brick Slab",
        id: "nether_brick_slab",
        recipe: {
            ingredients: [
                {
                    id: "nether_bricks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    nether_brick_stairs: {
        name: "Nether Brick Stairs",
        id: "nether_brick_stairs",
        recipe: {
            ingredients: [
                {
                    id: "nether_bricks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    nether_brick_wall: {
        name: "Nether Brick Wall",
        id: "nether_brick_wall",
        recipe: {
            ingredients: [
                {
                    id: "nether_bricks",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    nether_bricks: {
        name: "Nether Bricks",
        id: "nether_bricks",
        recipe: {
            ingredients: [
                {
                    id: "nether_brick",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    nether_gold_ore: {
        name: "Nether Gold Ore",
        id: "nether_gold_ore",
        recipe: {
            baseItem: true,
        },
    },
    nether_quartz_ore: {
        name: "Nether Quartz Ore",
        id: "nether_quartz_ore",
        recipe: {
            baseItem: true,
        },
    },
    nether_sprouts: {
        name: "Nether Sprouts",
        id: "nether_sprouts",
        recipe: {
            baseItem: true,
        },
    },
    nether_star: {
        name: "Nether Star",
        id: "nether_star",
        recipe: {
            baseItem: true,
        },
    },
    nether_wart: {
        name: "Nether Wart",
        id: "nether_wart",
        recipe: {
            baseItem: true,
        },
    },
    nether_wart_block: {
        name: "Nether Wart Block",
        id: "nether_wart_block",
        recipe: {
            ingredients: [
                {
                    id: "nether_wart",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    netherite_block: {
        name: "Block of Netherite",
        id: "netherite_block",
        recipe: {
            ingredients: [
                {
                    id: "netherite_ingot",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    netherite_ingot: {
        name: "Netherite Ingot",
        id: "netherite_ingot",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 4,
                },
                {
                    id: "netherite_scrap",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    netherite_scrap: {
        name: "Netherite Scrap",
        id: "netherite_scrap",
        recipe: {
            ingredients: [
                {
                    id: "ancient_debris",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    netherrack: {
        name: "Netherrack",
        id: "netherrack",
        recipe: {
            baseItem: true,
        },
    },
    note_block: {
        name: "Note Block",
        id: "note_block",
        recipe: {
            ingredients: [
                {
                    id: "redstone",
                    quantity: 1,
                },
                {
                    id: "tag_planks",
                    quantity: 8,
                },
            ],
            result: 1,
        },
    },
    oak_boat: {
        name: "Oak Boat",
        id: "oak_boat",
        recipe: {
            ingredients: [
                {
                    id: "oak_planks",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    oak_button: {
        name: "Oak Button",
        id: "oak_button",
        recipe: {
            ingredients: [
                {
                    id: "oak_planks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    oak_chest_boat: {
        name: "Oak Chest Boat",
        id: "oak_chest_boat",
        recipe: {
            ingredients: [
                {
                    id: "chest",
                    quantity: 1,
                },
                {
                    id: "oak_boat",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    oak_door: {
        name: "Oak Door",
        id: "oak_door",
        recipe: {
            ingredients: [
                {
                    id: "oak_planks",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    oak_fence: {
        name: "Oak Fence",
        id: "oak_fence",
        recipe: {
            ingredients: [
                {
                    id: "oak_planks",
                    quantity: 4,
                },
                {
                    id: "stick",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    oak_fence_gate: {
        name: "Oak Fence Gate",
        id: "oak_fence_gate",
        recipe: {
            ingredients: [
                {
                    id: "oak_planks",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    oak_hanging_sign: {
        name: "Oak Hanging Sign",
        id: "oak_hanging_sign",
        recipe: {
            ingredients: [
                {
                    id: "chain",
                    quantity: 2,
                },
                {
                    id: "oak_log",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    oak_leaves: {
        name: "Oak Leaves",
        id: "oak_leaves",
        recipe: {
            baseItem: true,
        },
    },
    oak_log: {
        name: "Oak Log",
        id: "oak_log",
        recipe: {
            baseItem: true,
        },
    },
    oak_planks: {
        name: "Oak Planks",
        id: "oak_planks",
        recipe: {
            ingredients: [
                {
                    id: "oak_log",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    oak_pressure_plate: {
        name: "Oak Pressure Plate",
        id: "oak_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "oak_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    oak_sapling: {
        name: "Oak Sapling",
        id: "oak_sapling",
        recipe: {
            baseItem: true,
        },
    },
    oak_sign: {
        name: "Oak Sign",
        id: "oak_sign",
        recipe: {
            ingredients: [
                {
                    id: "oak_planks",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 3,
        },
    },
    oak_slab: {
        name: "Oak Slab",
        id: "oak_slab",
        recipe: {
            ingredients: [
                {
                    id: "oak_planks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    oak_stairs: {
        name: "Oak Stairs",
        id: "oak_stairs",
        recipe: {
            ingredients: [
                {
                    id: "oak_planks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    oak_trapdoor: {
        name: "Oak Trapdoor",
        id: "oak_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "oak_planks",
                    quantity: 6,
                },
            ],
            result: 2,
        },
    },
    oak_wood: {
        name: "Oak Wood",
        id: "oak_wood",
        recipe: {
            ingredients: [
                {
                    id: "oak_log",
                    quantity: 4,
                },
            ],
            result: 3,
        },
    },
    observer: {
        name: "Observer",
        id: "observer",
        recipe: {
            ingredients: [
                {
                    id: "cobblestone",
                    quantity: 6,
                },
                {
                    id: "quartz",
                    quantity: 1,
                },
                {
                    id: "redstone",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    obsidian: {
        name: "Obsidian",
        id: "obsidian",
        recipe: {
            baseItem: true,
        },
    },
    ochre_froglight: {
        name: "Ochre Froglight",
        id: "ochre_froglight",
        recipe: {
            baseItem: true,
        },
    },
    orange_banner: {
        name: "Orange Banner",
        id: "orange_banner",
        recipe: {
            ingredients: [
                {
                    id: "orange_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    orange_bed: {
        name: "Orange Bed",
        id: "orange_bed",
        recipe: {
            ingredients: [
                {
                    id: "orange_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    orange_candle: {
        name: "Orange Candle",
        id: "orange_candle",
        recipe: {
            ingredients: [
                {
                    id: "candle",
                    quantity: 1,
                },
                {
                    id: "orange_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    orange_carpet: {
        name: "Orange Carpet",
        id: "orange_carpet",
        recipe: {
            ingredients: [
                {
                    id: "orange_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    orange_concrete: {
        name: "Orange Concrete",
        id: "orange_concrete",
        recipe: {
            ingredients: [
                {
                    id: "orange_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    orange_concrete_powder: {
        name: "Orange Concrete Powder",
        id: "orange_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "orange_dye",
                    quantity: 1,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    orange_dye: {
        name: "Orange Dye",
        id: "orange_dye",
        recipe: {
            ingredients: [
                {
                    id: "red_dye",
                    quantity: 1,
                },
                {
                    id: "yellow_dye",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    orange_glazed_terracotta: {
        name: "Orange Glazed Terracotta",
        id: "orange_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "orange_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    orange_shulker_box: {
        name: "Orange Shulker Box",
        id: "orange_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "orange_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    orange_stained_glass: {
        name: "Orange Stained Glass",
        id: "orange_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 8,
                },
                {
                    id: "orange_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    orange_stained_glass_pane: {
        name: "Orange Stained Glass Pane",
        id: "orange_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "glass_pane",
                    quantity: 8,
                },
                {
                    id: "orange_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    orange_terracotta: {
        name: "Orange Terracotta",
        id: "orange_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "orange_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    orange_tulip: {
        name: "Orange Tulip",
        id: "orange_tulip",
        recipe: {
            baseItem: true,
        },
    },
    orange_wool: {
        name: "Orange Wool",
        id: "orange_wool",
        recipe: {
            ingredients: [
                {
                    id: "orange_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    oxeye_daisy: {
        name: "Oxeye Daisy",
        id: "oxeye_daisy",
        recipe: {
            baseItem: true,
        },
    },
    oxidized_chiseled_copper: {
        name: "Oxidized Chiseled Copper",
        id: "oxidized_chiseled_copper",
        recipe: {
            ingredients: [
                {
                    id: "weathered_chiseled_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    oxidized_copper: {
        name: "Oxidized Copper",
        id: "oxidized_copper",
        recipe: {
            ingredients: [
                {
                    id: "weathered_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    oxidized_copper_bulb: {
        name: "Oxidized Copper Bulb",
        id: "oxidized_copper_bulb",
        recipe: {
            ingredients: [
                {
                    id: "weathered_copper_bulb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    oxidized_copper_door: {
        name: "Oxidized Copper Door",
        id: "oxidized_copper_door",
        recipe: {
            ingredients: [
                {
                    id: "weathered_copper_door",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    oxidized_copper_grate: {
        name: "Oxidized Copper Grate",
        id: "oxidized_copper_grate",
        recipe: {
            ingredients: [
                {
                    id: "weathered_copper_grate",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    oxidized_copper_trapdoor: {
        name: "Oxidized Copper Trapdoor",
        id: "oxidized_copper_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "weathered_copper_trapdoor",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    oxidized_cut_copper: {
        name: "Oxidized Cut Copper",
        id: "oxidized_cut_copper",
        recipe: {
            ingredients: [
                {
                    id: "weathered_cut_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    oxidized_cut_copper_slab: {
        name: "Oxidized Cut Copper Slab",
        id: "oxidized_cut_copper_slab",
        recipe: {
            ingredients: [
                {
                    id: "weathered_cut_copper_slab",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    oxidized_cut_copper_stairs: {
        name: "Oxidized Cut Copper Stairs",
        id: "oxidized_cut_copper_stairs",
        recipe: {
            ingredients: [
                {
                    id: "weathered_cut_copper_stairs",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    packed_ice: {
        name: "Packed Ice",
        id: "packed_ice",
        recipe: {
            baseItem: true,
        },
    },
    packed_mud: {
        name: "Packed Mud",
        id: "packed_mud",
        recipe: {
            ingredients: [
                {
                    id: "mud",
                    quantity: 1,
                },
                {
                    id: "wheat",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    painting: {
        name: "Painting",
        id: "painting",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 8,
                },
                {
                    id: "white_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    paper: {
        name: "Paper",
        id: "paper",
        recipe: {
            ingredients: [
                {
                    id: "sugar_cane",
                    quantity: 3,
                },
            ],
            result: 3,
        },
    },
    pearlescent_froglight: {
        name: "Pearlescent Froglight",
        id: "pearlescent_froglight",
        recipe: {
            baseItem: true,
        },
    },
    peony: {
        name: "Peony",
        id: "peony",
        recipe: {
            baseItem: true,
        },
    },
    petrified_oak_slab: {
        name: "Petrified Oak Slab",
        id: "petrified_oak_slab",
        recipe: {
            baseItem: true,
        },
    },
    piglin_head: {
        name: "Piglin Head",
        id: "piglin_head",
        recipe: {
            baseItem: true,
        },
    },
    pink_banner: {
        name: "Pink Banner",
        id: "pink_banner",
        recipe: {
            ingredients: [
                {
                    id: "pink_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    pink_bed: {
        name: "Pink Bed",
        id: "pink_bed",
        recipe: {
            ingredients: [
                {
                    id: "pink_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    pink_candle: {
        name: "Pink Candle",
        id: "pink_candle",
        recipe: {
            ingredients: [
                {
                    id: "candle",
                    quantity: 1,
                },
                {
                    id: "pink_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    pink_carpet: {
        name: "Pink Carpet",
        id: "pink_carpet",
        recipe: {
            ingredients: [
                {
                    id: "pink_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    pink_concrete: {
        name: "Pink Concrete",
        id: "pink_concrete",
        recipe: {
            ingredients: [
                {
                    id: "pink_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    pink_concrete_powder: {
        name: "Pink Concrete Powder",
        id: "pink_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "pink_dye",
                    quantity: 1,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    pink_dye: {
        name: "Pink Dye",
        id: "pink_dye",
        recipe: {
            ingredients: [
                {
                    id: "red_dye",
                    quantity: 1,
                },
                {
                    id: "white_dye",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    pink_glazed_terracotta: {
        name: "Pink Glazed Terracotta",
        id: "pink_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "pink_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    pink_petals: {
        name: "Pink Petals",
        id: "pink_petals",
        recipe: {
            baseItem: true,
        },
    },
    pink_shulker_box: {
        name: "Pink Shulker Box",
        id: "pink_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "pink_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    pink_stained_glass: {
        name: "Pink Stained Glass",
        id: "pink_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 8,
                },
                {
                    id: "pink_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    pink_stained_glass_pane: {
        name: "Pink Stained Glass Pane",
        id: "pink_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "glass_pane",
                    quantity: 8,
                },
                {
                    id: "pink_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    pink_terracotta: {
        name: "Pink Terracotta",
        id: "pink_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "pink_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    pink_tulip: {
        name: "Pink Tulip",
        id: "pink_tulip",
        recipe: {
            baseItem: true,
        },
    },
    pink_wool: {
        name: "Pink Wool",
        id: "pink_wool",
        recipe: {
            ingredients: [
                {
                    id: "pink_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    piston: {
        name: "Piston",
        id: "piston",
        recipe: {
            ingredients: [
                {
                    id: "cobblestone",
                    quantity: 4,
                },
                {
                    id: "iron_ingot",
                    quantity: 3,
                },
                {
                    id: "redstone",
                    quantity: 4,
                },
                {
                    id: "tag_planks",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    pitcher_crop: {
        name: "Pitcher Crop",
        id: "pitcher_crop",
        recipe: {
            baseItem: true,
        },
    },
    pitcher_plant: {
        name: "Pitcher Plant",
        id: "pitcher_plant",
        recipe: {
            baseItem: true,
        },
    },
    player_head: {
        name: "Player Head",
        id: "player_head",
        recipe: {
            baseItem: true,
        },
    },
    podzol: {
        name: "Podzol",
        id: "podzol",
        recipe: {
            baseItem: true,
        },
    },
    pointed_dripstone: {
        name: "Pointed Dripstone",
        id: "pointed_dripstone",
        recipe: {
            baseItem: true,
        },
    },
    polished_andesite: {
        name: "Polished Andesite",
        id: "polished_andesite",
        recipe: {
            ingredients: [
                {
                    id: "andesite",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    polished_andesite_slab: {
        name: "Polished Andesite Slab",
        id: "polished_andesite_slab",
        recipe: {
            ingredients: [
                {
                    id: "polished_andesite",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    polished_andesite_stairs: {
        name: "Polished Andesite Stairs",
        id: "polished_andesite_stairs",
        recipe: {
            ingredients: [
                {
                    id: "polished_andesite",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    polished_basalt: {
        name: "Polished Basalt",
        id: "polished_basalt",
        recipe: {
            ingredients: [
                {
                    id: "basalt",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    polished_blackstone: {
        name: "Polished Blackstone",
        id: "polished_blackstone",
        recipe: {
            ingredients: [
                {
                    id: "blackstone",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    polished_blackstone_brick_slab: {
        name: "Polished Blackstone Brick Slab",
        id: "polished_blackstone_brick_slab",
        recipe: {
            ingredients: [
                {
                    id: "polished_blackstone_bricks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    polished_blackstone_brick_stairs: {
        name: "Polished Blackstone Brick Stairs",
        id: "polished_blackstone_brick_stairs",
        recipe: {
            ingredients: [
                {
                    id: "polished_blackstone_bricks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    polished_blackstone_brick_wall: {
        name: "Polished Blackstone Brick Wall",
        id: "polished_blackstone_brick_wall",
        recipe: {
            ingredients: [
                {
                    id: "polished_blackstone_bricks",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    polished_blackstone_bricks: {
        name: "Polished Blackstone Bricks",
        id: "polished_blackstone_bricks",
        recipe: {
            ingredients: [
                {
                    id: "blackstone",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    polished_blackstone_button: {
        name: "Polished Blackstone Button",
        id: "polished_blackstone_button",
        recipe: {
            ingredients: [
                {
                    id: "polished_blackstone",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    polished_blackstone_pressure_plate: {
        name: "Polished Blackstone Pressure Plate",
        id: "polished_blackstone_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "polished_blackstone",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    polished_blackstone_slab: {
        name: "Polished Blackstone Slab",
        id: "polished_blackstone_slab",
        recipe: {
            ingredients: [
                {
                    id: "polished_blackstone",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    polished_blackstone_stairs: {
        name: "Polished Blackstone Stairs",
        id: "polished_blackstone_stairs",
        recipe: {
            ingredients: [
                {
                    id: "polished_blackstone",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    polished_blackstone_wall: {
        name: "Polished Blackstone Wall",
        id: "polished_blackstone_wall",
        recipe: {
            ingredients: [
                {
                    id: "polished_blackstone",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    polished_deepslate: {
        name: "Polished Deepslate",
        id: "polished_deepslate",
        recipe: {
            ingredients: [
                {
                    id: "deepslate",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    polished_deepslate_slab: {
        name: "Polished Deepslate Slab",
        id: "polished_deepslate_slab",
        recipe: {
            ingredients: [
                {
                    id: "polished_deepslate",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    polished_deepslate_stairs: {
        name: "Polished Deepslate Stairs",
        id: "polished_deepslate_stairs",
        recipe: {
            ingredients: [
                {
                    id: "polished_deepslate",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    polished_deepslate_wall: {
        name: "Polished Deepslate Wall",
        id: "polished_deepslate_wall",
        recipe: {
            ingredients: [
                {
                    id: "polished_deepslate",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    polished_diorite: {
        name: "Polished Diorite",
        id: "polished_diorite",
        recipe: {
            ingredients: [
                {
                    id: "diorite",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    polished_diorite_slab: {
        name: "Polished Diorite Slab",
        id: "polished_diorite_slab",
        recipe: {
            ingredients: [
                {
                    id: "polished_diorite",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    polished_diorite_stairs: {
        name: "Polished Diorite Stairs",
        id: "polished_diorite_stairs",
        recipe: {
            ingredients: [
                {
                    id: "polished_diorite",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    polished_granite: {
        name: "Polished Granite",
        id: "polished_granite",
        recipe: {
            ingredients: [
                {
                    id: "granite",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    polished_granite_slab: {
        name: "Polished Granite Slab",
        id: "polished_granite_slab",
        recipe: {
            ingredients: [
                {
                    id: "polished_granite",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    polished_granite_stairs: {
        name: "Polished Granite Stairs",
        id: "polished_granite_stairs",
        recipe: {
            ingredients: [
                {
                    id: "polished_granite",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    polished_tuff: {
        name: "Polished Tuff",
        id: "polished_tuff",
        recipe: {
            ingredients: [
                {
                    id: "tuff",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    polished_tuff_slab: {
        name: "Polished Tuff Slab",
        id: "polished_tuff_slab",
        recipe: {
            ingredients: [
                {
                    id: "polished_tuff",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    polished_tuff_stairs: {
        name: "Polished Tuff Stairs",
        id: "polished_tuff_stairs",
        recipe: {
            ingredients: [
                {
                    id: "polished_tuff",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    polished_tuff_wall: {
        name: "Polished Tuff Wall",
        id: "polished_tuff_wall",
        recipe: {
            ingredients: [
                {
                    id: "polished_tuff",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    popped_chorus_fruit: {
        name: "Popped Chorus Fruit",
        id: "popped_chorus_fruit",
        recipe: {
            ingredients: [
                {
                    id: "chorus_fruit",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    poppy: {
        name: "Poppy",
        id: "poppy",
        recipe: {
            baseItem: true,
        },
    },
    porkchop: {
        name: "Raw Porkchop",
        id: "porkchop",
        recipe: {
            baseItem: true,
        },
    },
    potato: {
        name: "Potato",
        id: "potato",
        recipe: {
            baseItem: true,
        },
    },
    potatoes: {
        name: "Potatoes",
        id: "potatoes",
        recipe: {
            ingredients: [
                {
                    id: "potato",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_acacia_sapling: {
        name: "Potted Acacia Sapling",
        id: "potted_acacia_sapling",
        recipe: {
            ingredients: [
                {
                    id: "acacia_sapling",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_allium: {
        name: "Potted Allium",
        id: "potted_allium",
        recipe: {
            ingredients: [
                {
                    id: "allium",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_azalea_bush: {
        name: "Potted Azalea",
        id: "potted_azalea_bush",
        recipe: {
            ingredients: [
                {
                    id: "azalea",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_azure_bluet: {
        name: "Potted Azure Bluet",
        id: "potted_azure_bluet",
        recipe: {
            ingredients: [
                {
                    id: "azure_bluet",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_bamboo: {
        name: "Potted Bamboo",
        id: "potted_bamboo",
        recipe: {
            ingredients: [
                {
                    id: "bamboo",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_birch_sapling: {
        name: "Potted Birch Sapling",
        id: "potted_birch_sapling",
        recipe: {
            ingredients: [
                {
                    id: "birch_sapling",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_blue_orchid: {
        name: "Potted Blue Orchid",
        id: "potted_blue_orchid",
        recipe: {
            ingredients: [
                {
                    id: "blue_orchid",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_brown_mushroom: {
        name: "Potted Brown Mushroom",
        id: "potted_brown_mushroom",
        recipe: {
            ingredients: [
                {
                    id: "brown_mushroom",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_cactus: {
        name: "Potted Cactus",
        id: "potted_cactus",
        recipe: {
            ingredients: [
                {
                    id: "cactus",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_cherry_sapling: {
        name: "Potted Cherry Sapling",
        id: "potted_cherry_sapling",
        recipe: {
            ingredients: [
                {
                    id: "cherry_sapling",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_cornflower: {
        name: "Potted Cornflower",
        id: "potted_cornflower",
        recipe: {
            ingredients: [
                {
                    id: "cornflower",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_crimson_fungus: {
        name: "Potted Crimson Fungus",
        id: "potted_crimson_fungus",
        recipe: {
            ingredients: [
                {
                    id: "crimson_fungus",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_crimson_roots: {
        name: "Potted Crimson Roots",
        id: "potted_crimson_roots",
        recipe: {
            ingredients: [
                {
                    id: "crimson_roots",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_dandelion: {
        name: "Potted Dandelion",
        id: "potted_dandelion",
        recipe: {
            ingredients: [
                {
                    id: "dandelion",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_dark_oak_sapling: {
        name: "Potted Dark Oak Sapling",
        id: "potted_dark_oak_sapling",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_sapling",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_dead_bush: {
        name: "Potted Dead Bush",
        id: "potted_dead_bush",
        recipe: {
            ingredients: [
                {
                    id: "dead_bush",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_fern: {
        name: "Potted Fern",
        id: "potted_fern",
        recipe: {
            ingredients: [
                {
                    id: "fern",
                    quantity: 1,
                },
                {
                    id: "flower_pot",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_flowering_azalea_bush: {
        name: "Potted Flowering Azalea",
        id: "potted_flowering_azalea_bush",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "flowering_azalea",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_jungle_sapling: {
        name: "Potted Jungle Sapling",
        id: "potted_jungle_sapling",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "jungle_sapling",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_lily_of_the_valley: {
        name: "Potted Lily of the Valley",
        id: "potted_lily_of_the_valley",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "lily_of_the_valley",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_mangrove_propagule: {
        name: "Potted Mangrove Propagule",
        id: "potted_mangrove_propagule",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "mangrove_propagule",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_oak_sapling: {
        name: "Potted Oak Sapling",
        id: "potted_oak_sapling",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "oak_sapling",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_orange_tulip: {
        name: "Potted Orange Tulip",
        id: "potted_orange_tulip",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "orange_tulip",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_oxeye_daisy: {
        name: "Potted Oxeye Daisy",
        id: "potted_oxeye_daisy",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "oxeye_daisy",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_pink_tulip: {
        name: "Potted Pink Tulip",
        id: "potted_pink_tulip",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "pink_tulip",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_poppy: {
        name: "Potted Poppy",
        id: "potted_poppy",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "poppy",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_red_mushroom: {
        name: "Potted Red Mushroom",
        id: "potted_red_mushroom",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "red_mushroom",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_red_tulip: {
        name: "Potted Red Tulip",
        id: "potted_red_tulip",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "red_tulip",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_spruce_sapling: {
        name: "Potted Spruce Sapling",
        id: "potted_spruce_sapling",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "spruce_sapling",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_torchflower: {
        name: "Potted Torchflower",
        id: "potted_torchflower",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "torchflower",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_warped_fungus: {
        name: "Potted Warped Fungus",
        id: "potted_warped_fungus",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "warped_fungus",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_warped_roots: {
        name: "Potted Warped Roots",
        id: "potted_warped_roots",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "warped_roots",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_white_tulip: {
        name: "Potted White Tulip",
        id: "potted_white_tulip",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "white_tulip",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    potted_wither_rose: {
        name: "Potted Wither Rose",
        id: "potted_wither_rose",
        recipe: {
            ingredients: [
                {
                    id: "flower_pot",
                    quantity: 1,
                },
                {
                    id: "wither_rose",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    powder_snow: {
        name: "Powder Snow",
        id: "powder_snow",
        recipe: {
            baseItem: true,
        },
    },
    powder_snow_bucket: {
        name: "Powder Snow Bucket",
        id: "powder_snow_bucket",
        recipe: {
            ingredients: [
                {
                    id: "bucket",
                    quantity: 1,
                },
                {
                    id: "powder_snow",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    powder_snow_cauldron: {
        name: "Powder Snow Cauldron",
        id: "powder_snow_cauldron",
        recipe: {
            ingredients: [
                {
                    id: "cauldron",
                    quantity: 1,
                },
                {
                    id: "powder_snow_bucket",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    powered_rail: {
        name: "Powered Rail",
        id: "powered_rail",
        recipe: {
            ingredients: [
                {
                    id: "gold_ingot",
                    quantity: 6,
                },
                {
                    id: "redstone",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 6,
        },
    },
    prismarine: {
        name: "Prismarine",
        id: "prismarine",
        recipe: {
            ingredients: [
                {
                    id: "prismarine_shard",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    prismarine_brick_slab: {
        name: "Prismarine Brick Slab",
        id: "prismarine_brick_slab",
        recipe: {
            ingredients: [
                {
                    id: "prismarine_bricks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    prismarine_brick_stairs: {
        name: "Prismarine Brick Stairs",
        id: "prismarine_brick_stairs",
        recipe: {
            ingredients: [
                {
                    id: "prismarine_bricks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    prismarine_bricks: {
        name: "Prismarine Bricks",
        id: "prismarine_bricks",
        recipe: {
            ingredients: [
                {
                    id: "prismarine_shard",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    prismarine_crystals: {
        name: "Prismarine Crystals",
        id: "prismarine_crystals",
        recipe: {
            baseItem: true,
        },
    },
    prismarine_shard: {
        name: "Prismarine Shard",
        id: "prismarine_shard",
        recipe: {
            baseItem: true,
        },
    },
    prismarine_slab: {
        name: "Prismarine Slab",
        id: "prismarine_slab",
        recipe: {
            ingredients: [
                {
                    id: "prismarine",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    prismarine_stairs: {
        name: "Prismarine Stairs",
        id: "prismarine_stairs",
        recipe: {
            ingredients: [
                {
                    id: "prismarine",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    prismarine_wall: {
        name: "Prismarine Wall",
        id: "prismarine_wall",
        recipe: {
            ingredients: [
                {
                    id: "prismarine",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    pumpkin: {
        name: "Pumpkin",
        id: "pumpkin",
        recipe: {
            baseItem: true,
        },
    },
    pumpkin_seeds: {
        name: "Pumpkin Seeds",
        id: "pumpkin_seeds",
        recipe: {
            baseItem: true,
        },
    },
    pumpkin_stem: {
        name: "Pumpkin Stem",
        id: "pumpkin_stem",
        recipe: {
            ingredients: [
                {
                    id: "pumpkin_seeds",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    purple_banner: {
        name: "Purple Banner",
        id: "purple_banner",
        recipe: {
            ingredients: [
                {
                    id: "purple_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    purple_bed: {
        name: "Purple Bed",
        id: "purple_bed",
        recipe: {
            ingredients: [
                {
                    id: "purple_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    purple_candle: {
        name: "Purple Candle",
        id: "purple_candle",
        recipe: {
            ingredients: [
                {
                    id: "candle",
                    quantity: 1,
                },
                {
                    id: "purple_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    purple_carpet: {
        name: "Purple Carpet",
        id: "purple_carpet",
        recipe: {
            ingredients: [
                {
                    id: "purple_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    purple_concrete: {
        name: "Purple Concrete",
        id: "purple_concrete",
        recipe: {
            ingredients: [
                {
                    id: "purple_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    purple_concrete_powder: {
        name: "Purple Concrete Powder",
        id: "purple_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "purple_dye",
                    quantity: 1,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    purple_dye: {
        name: "Purple Dye",
        id: "purple_dye",
        recipe: {
            ingredients: [
                {
                    id: "blue_dye",
                    quantity: 1,
                },
                {
                    id: "red_dye",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    purple_glazed_terracotta: {
        name: "Purple Glazed Terracotta",
        id: "purple_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "purple_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    purple_shulker_box: {
        name: "Purple Shulker Box",
        id: "purple_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "purple_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    purple_stained_glass: {
        name: "Purple Stained Glass",
        id: "purple_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 8,
                },
                {
                    id: "purple_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    purple_stained_glass_pane: {
        name: "Purple Stained Glass Pane",
        id: "purple_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "glass_pane",
                    quantity: 8,
                },
                {
                    id: "purple_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    purple_terracotta: {
        name: "Purple Terracotta",
        id: "purple_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "purple_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    purple_wool: {
        name: "Purple Wool",
        id: "purple_wool",
        recipe: {
            ingredients: [
                {
                    id: "purple_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    purpur_block: {
        name: "Purpur Block",
        id: "purpur_block",
        recipe: {
            ingredients: [
                {
                    id: "popped_chorus_fruit",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    purpur_pillar: {
        name: "Purpur Pillar",
        id: "purpur_pillar",
        recipe: {
            ingredients: [
                {
                    id: "purpur_slab",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    purpur_slab: {
        name: "Purpur Slab",
        id: "purpur_slab",
        recipe: {
            ingredients: [
                {
                    id: "purpur_block",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    purpur_stairs: {
        name: "Purpur Stairs",
        id: "purpur_stairs",
        recipe: {
            ingredients: [
                {
                    id: "purpur_block",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    quartz: {
        name: "Quartz",
        id: "quartz",
        recipe: {
            ingredients: [
                {
                    id: "nether_quartz_ore",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    quartz_block: {
        name: "Block of Quartz",
        id: "quartz_block",
        recipe: {
            ingredients: [
                {
                    id: "quartz",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    quartz_bricks: {
        name: "Quartz Bricks",
        id: "quartz_bricks",
        recipe: {
            ingredients: [
                {
                    id: "quartz_block",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    quartz_pillar: {
        name: "Quartz Pillar",
        id: "quartz_pillar",
        recipe: {
            ingredients: [
                {
                    id: "quartz_block",
                    quantity: 2,
                },
            ],
            result: 2,
        },
    },
    quartz_slab: {
        name: "Quartz Slab",
        id: "quartz_slab",
        recipe: {
            ingredients: [
                {
                    id: "quartz_block",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    quartz_stairs: {
        name: "Quartz Stairs",
        id: "quartz_stairs",
        recipe: {
            ingredients: [
                {
                    id: "quartz_block",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    rabbit: {
        name: "Raw Rabbit",
        id: "rabbit",
        recipe: {
            baseItem: true,
        },
    },
    rail: {
        name: "Rail",
        id: "rail",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 16,
        },
    },
    raw_copper: {
        name: "Raw Copper",
        id: "raw_copper",
        recipe: {
            ingredients: [
                {
                    id: "copper_ore",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    raw_copper_block: {
        name: "Block of Raw Copper",
        id: "raw_copper_block",
        recipe: {
            ingredients: [
                {
                    id: "raw_copper",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    raw_gold: {
        name: "Raw Gold",
        id: "raw_gold",
        recipe: {
            ingredients: [
                {
                    id: "gold_ore",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    raw_gold_block: {
        name: "Block of Raw Gold",
        id: "raw_gold_block",
        recipe: {
            ingredients: [
                {
                    id: "raw_gold",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    raw_iron: {
        name: "Raw Iron",
        id: "raw_iron",
        recipe: {
            ingredients: [
                {
                    id: "iron_ore",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    raw_iron_block: {
        name: "Block of Raw Iron",
        id: "raw_iron_block",
        recipe: {
            ingredients: [
                {
                    id: "raw_iron",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    red_banner: {
        name: "Red Banner",
        id: "red_banner",
        recipe: {
            ingredients: [
                {
                    id: "red_wool",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    red_bed: {
        name: "Red Bed",
        id: "red_bed",
        recipe: {
            ingredients: [
                {
                    id: "red_wool",
                    quantity: 3,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    red_candle: {
        name: "Red Candle",
        id: "red_candle",
        recipe: {
            ingredients: [
                {
                    id: "candle",
                    quantity: 1,
                },
                {
                    id: "red_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    red_carpet: {
        name: "Red Carpet",
        id: "red_carpet",
        recipe: {
            ingredients: [
                {
                    id: "red_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    red_concrete: {
        name: "Red Concrete",
        id: "red_concrete",
        recipe: {
            ingredients: [
                {
                    id: "red_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    red_concrete_powder: {
        name: "Red Concrete Powder",
        id: "red_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "red_dye",
                    quantity: 1,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 8,
        },
    },
    red_dye: {
        name: "Red Dye",
        id: "red_dye",
        recipe: {
            ingredients: [
                {
                    id: "poppy",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    red_glazed_terracotta: {
        name: "Red Glazed Terracotta",
        id: "red_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "red_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    red_mushroom: {
        name: "Red Mushroom",
        id: "red_mushroom",
        recipe: {
            baseItem: true,
        },
    },
    red_mushroom_block: {
        name: "Red Mushroom Block",
        id: "red_mushroom_block",
        recipe: {
            baseItem: true,
        },
    },
    red_nether_brick_slab: {
        name: "Red Nether Brick Slab",
        id: "red_nether_brick_slab",
        recipe: {
            ingredients: [
                {
                    id: "red_nether_bricks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    red_nether_brick_stairs: {
        name: "Red Nether Brick Stairs",
        id: "red_nether_brick_stairs",
        recipe: {
            ingredients: [
                {
                    id: "red_nether_bricks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    red_nether_brick_wall: {
        name: "Red Nether Brick Wall",
        id: "red_nether_brick_wall",
        recipe: {
            ingredients: [
                {
                    id: "red_nether_bricks",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    red_nether_bricks: {
        name: "Red Nether Bricks",
        id: "red_nether_bricks",
        recipe: {
            ingredients: [
                {
                    id: "nether_brick",
                    quantity: 2,
                },
                {
                    id: "nether_wart",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    red_sand: {
        name: "Red Sand",
        id: "red_sand",
        recipe: {
            baseItem: true,
        },
    },
    red_sandstone: {
        name: "Red Sandstone",
        id: "red_sandstone",
        recipe: {
            ingredients: [
                {
                    id: "red_sand",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    red_sandstone_slab: {
        name: "Red Sandstone Slab",
        id: "red_sandstone_slab",
        recipe: {
            ingredients: [
                {
                    id: "red_sandstone",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    red_sandstone_stairs: {
        name: "Red Sandstone Stairs",
        id: "red_sandstone_stairs",
        recipe: {
            ingredients: [
                {
                    id: "red_sandstone",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    red_sandstone_wall: {
        name: "Red Sandstone Wall",
        id: "red_sandstone_wall",
        recipe: {
            ingredients: [
                {
                    id: "red_sandstone",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    red_shulker_box: {
        name: "Red Shulker Box",
        id: "red_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "red_dye",
                    quantity: 1,
                },
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    red_stained_glass: {
        name: "Red Stained Glass",
        id: "red_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 8,
                },
                {
                    id: "red_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    red_stained_glass_pane: {
        name: "Red Stained Glass Pane",
        id: "red_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "glass_pane",
                    quantity: 8,
                },
                {
                    id: "red_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    red_terracotta: {
        name: "Red Terracotta",
        id: "red_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "red_dye",
                    quantity: 1,
                },
                {
                    id: "terracotta",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    red_tulip: {
        name: "Red Tulip",
        id: "red_tulip",
        recipe: {
            baseItem: true,
        },
    },
    red_wool: {
        name: "Red Wool",
        id: "red_wool",
        recipe: {
            ingredients: [
                {
                    id: "red_dye",
                    quantity: 1,
                },
                {
                    id: "tag_wool",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    redstone: {
        name: "Redstone",
        id: "redstone",
        recipe: {
            ingredients: [
                {
                    id: "redstone_ore",
                    quantity: 1,
                },
            ],
            result: 6,
        },
    },
    redstone_block: {
        name: "Block of Redstone",
        id: "redstone_block",
        recipe: {
            ingredients: [
                {
                    id: "redstone",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    redstone_lamp: {
        name: "Redstone Lamp",
        id: "redstone_lamp",
        recipe: {
            ingredients: [
                {
                    id: "glowstone",
                    quantity: 1,
                },
                {
                    id: "redstone",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    redstone_ore: {
        name: "Redstone Ore",
        id: "redstone_ore",
        recipe: {
            baseItem: true,
        },
    },
    redstone_torch: {
        name: "Redstone Torch",
        id: "redstone_torch",
        recipe: {
            ingredients: [
                {
                    id: "redstone",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    redstone_wire: {
        name: "Redstone Wire",
        id: "redstone_wire",
        recipe: {
            ingredients: [
                {
                    id: "redstone",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    reinforced_deepslate: {
        name: "Reinforced Deepslate",
        id: "reinforced_deepslate",
        recipe: {
            baseItem: true,
        },
    },
    repeater: {
        name: "Redstone Repeater",
        id: "repeater",
        recipe: {
            ingredients: [
                {
                    id: "redstone",
                    quantity: 1,
                },
                {
                    id: "redstone_torch",
                    quantity: 2,
                },
                {
                    id: "stone",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    repeating_command_block: {
        name: "Repeating Command Block",
        id: "repeating_command_block",
        recipe: {
            baseItem: true,
        },
    },
    respawn_anchor: {
        name: "Respawn Anchor",
        id: "respawn_anchor",
        recipe: {
            ingredients: [
                {
                    id: "crying_obsidian",
                    quantity: 6,
                },
                {
                    id: "glowstone",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    rooted_dirt: {
        name: "Rooted Dirt",
        id: "rooted_dirt",
        recipe: {
            baseItem: true,
        },
    },
    rose_bush: {
        name: "Rose Bush",
        id: "rose_bush",
        recipe: {
            baseItem: true,
        },
    },
    saddle: {
        name: "Saddle",
        id: "saddle",
        recipe: {
            baseItem: true,
        },
    },
    salmon: {
        name: "Raw Salmon",
        id: "salmon",
        recipe: {
            baseItem: true,
        },
    },
    sand: {
        name: "Sand",
        id: "sand",
        recipe: {
            baseItem: true,
        },
    },
    sandstone: {
        name: "Sandstone",
        id: "sandstone",
        recipe: {
            ingredients: [
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    sandstone_slab: {
        name: "Sandstone Slab",
        id: "sandstone_slab",
        recipe: {
            ingredients: [
                {
                    id: "sandstone",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    sandstone_stairs: {
        name: "Sandstone Stairs",
        id: "sandstone_stairs",
        recipe: {
            ingredients: [
                {
                    id: "sandstone",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    sandstone_wall: {
        name: "Sandstone Wall",
        id: "sandstone_wall",
        recipe: {
            ingredients: [
                {
                    id: "sandstone",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    scaffolding: {
        name: "Scaffolding",
        id: "scaffolding",
        recipe: {
            ingredients: [
                {
                    id: "bamboo",
                    quantity: 6,
                },
                {
                    id: "string",
                    quantity: 1,
                },
            ],
            result: 6,
        },
    },
    sculk: {
        name: "Sculk",
        id: "sculk",
        recipe: {
            baseItem: true,
        },
    },
    sculk_catalyst: {
        name: "Sculk Catalyst",
        id: "sculk_catalyst",
        recipe: {
            baseItem: true,
        },
    },
    sculk_sensor: {
        name: "Sculk Sensor",
        id: "sculk_sensor",
        recipe: {
            baseItem: true,
        },
    },
    sculk_shrieker: {
        name: "Sculk Shrieker",
        id: "sculk_shrieker",
        recipe: {
            baseItem: true,
        },
    },
    sculk_vein: {
        name: "Sculk Vein",
        id: "sculk_vein",
        recipe: {
            baseItem: true,
        },
    },
    scute: {
        name: "Scute",
        id: "scute",
        recipe: {
            baseItem: true,
        },
    },
    sea_lantern: {
        name: "Sea Lantern",
        id: "sea_lantern",
        recipe: {
            ingredients: [
                {
                    id: "prismarine_crystals",
                    quantity: 5,
                },
                {
                    id: "prismarine_shard",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    sea_pickle: {
        name: "Sea Pickle",
        id: "sea_pickle",
        recipe: {
            baseItem: true,
        },
    },
    seagrass: {
        name: "Seagrass",
        id: "seagrass",
        recipe: {
            baseItem: true,
        },
    },
    shears: {
        name: "Shears",
        id: "shears",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    short_grass: {
        name: "Short Grass",
        id: "short_grass",
        recipe: {
            baseItem: true,
        },
    },
    shroomlight: {
        name: "Shroomlight",
        id: "shroomlight",
        recipe: {
            baseItem: true,
        },
    },
    shulker_box: {
        name: "Shulker Box",
        id: "shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "chest",
                    quantity: 1,
                },
                {
                    id: "shulker_shell",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    shulker_shell: {
        name: "Shulker Shell",
        id: "shulker_shell",
        recipe: {
            baseItem: true,
        },
    },
    skeleton_skull: {
        name: "Skeleton Skull",
        id: "skeleton_skull",
        recipe: {
            baseItem: true,
        },
    },
    slime_ball: {
        name: "Slime Ball",
        id: "slime_ball",
        recipe: {
            baseItem: true,
        },
    },
    slime_block: {
        name: "Slime Block",
        id: "slime_block",
        recipe: {
            ingredients: [
                {
                    id: "slime_ball",
                    quantity: 9,
                },
            ],
            result: 1,
        },
    },
    small_amethyst_bud: {
        name: "Small Amethyst Bud",
        id: "small_amethyst_bud",
        recipe: {
            baseItem: true,
        },
    },
    small_dripleaf: {
        name: "Small Dripleaf",
        id: "small_dripleaf",
        recipe: {
            baseItem: true,
        },
    },
    smithing_table: {
        name: "Smithing Table",
        id: "smithing_table",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 2,
                },
                {
                    id: "tag_planks",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    smoker: {
        name: "Smoker",
        id: "smoker",
        recipe: {
            ingredients: [
                {
                    id: "furnace",
                    quantity: 1,
                },
                {
                    id: "tag_wood",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    smooth_basalt: {
        name: "Smooth Basalt",
        id: "smooth_basalt",
        recipe: {
            ingredients: [
                {
                    id: "basalt",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    smooth_quartz: {
        name: "Smooth Quartz Block",
        id: "smooth_quartz",
        recipe: {
            ingredients: [
                {
                    id: "quartz_block",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    smooth_quartz_slab: {
        name: "Smooth Quartz Slab",
        id: "smooth_quartz_slab",
        recipe: {
            ingredients: [
                {
                    id: "smooth_quartz",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    smooth_quartz_stairs: {
        name: "Smooth Quartz Stairs",
        id: "smooth_quartz_stairs",
        recipe: {
            ingredients: [
                {
                    id: "smooth_quartz",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    smooth_red_sandstone: {
        name: "Smooth Red Sandstone",
        id: "smooth_red_sandstone",
        recipe: {
            ingredients: [
                {
                    id: "red_sandstone",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    smooth_red_sandstone_slab: {
        name: "Smooth Red Sandstone Slab",
        id: "smooth_red_sandstone_slab",
        recipe: {
            ingredients: [
                {
                    id: "smooth_red_sandstone",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    smooth_red_sandstone_stairs: {
        name: "Smooth Red Sandstone Stairs",
        id: "smooth_red_sandstone_stairs",
        recipe: {
            ingredients: [
                {
                    id: "smooth_red_sandstone",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    smooth_sandstone: {
        name: "Smooth Sandstone",
        id: "smooth_sandstone",
        recipe: {
            ingredients: [
                {
                    id: "sandstone",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    smooth_sandstone_slab: {
        name: "Smooth Sandstone Slab",
        id: "smooth_sandstone_slab",
        recipe: {
            ingredients: [
                {
                    id: "smooth_sandstone",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    smooth_sandstone_stairs: {
        name: "Smooth Sandstone Stairs",
        id: "smooth_sandstone_stairs",
        recipe: {
            ingredients: [
                {
                    id: "smooth_sandstone",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    smooth_stone: {
        name: "Smooth Stone",
        id: "smooth_stone",
        recipe: {
            ingredients: [
                {
                    id: "stone",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    smooth_stone_slab: {
        name: "Smooth Stone Slab",
        id: "smooth_stone_slab",
        recipe: {
            ingredients: [
                {
                    id: "smooth_stone",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    sniffer_egg: {
        name: "Sniffer Egg",
        id: "sniffer_egg",
        recipe: {
            baseItem: true,
        },
    },
    snow: {
        name: "Snow",
        id: "snow",
        recipe: {
            baseItem: true,
        },
    },
    snow_block: {
        name: "Snow Block",
        id: "snow_block",
        recipe: {
            baseItem: true,
        },
    },
    soul_campfire: {
        name: "Soul Campfire",
        id: "soul_campfire",
        recipe: {
            ingredients: [
                {
                    id: "soul_sand",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 3,
                },
                {
                    id: "tag_wood",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    soul_lantern: {
        name: "Soul Lantern",
        id: "soul_lantern",
        recipe: {
            ingredients: [
                {
                    id: "iron_nugget",
                    quantity: 8,
                },
                {
                    id: "soul_torch",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    soul_sand: {
        name: "Soul Sand",
        id: "soul_sand",
        recipe: {
            baseItem: true,
        },
    },
    soul_soil: {
        name: "Soul Soil",
        id: "soul_soil",
        recipe: {
            baseItem: true,
        },
    },
    soul_torch: {
        name: "Soul Torch",
        id: "soul_torch",
        recipe: {
            ingredients: [
                {
                    id: "coal",
                    quantity: 1,
                },
                {
                    id: "soul_sand",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    spawner: {
        name: "Spawner",
        id: "spawner",
        recipe: {
            baseItem: true,
        },
    },
    sponge: {
        name: "Sponge",
        id: "sponge",
        recipe: {
            baseItem: true,
        },
    },
    spore_blossom: {
        name: "Spore Blossom",
        id: "spore_blossom",
        recipe: {
            baseItem: true,
        },
    },
    spruce_boat: {
        name: "Spruce Boat",
        id: "spruce_boat",
        recipe: {
            ingredients: [
                {
                    id: "spruce_planks",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    spruce_button: {
        name: "Spruce Button",
        id: "spruce_button",
        recipe: {
            ingredients: [
                {
                    id: "spruce_planks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    spruce_chest_boat: {
        name: "Spruce Chest Boat",
        id: "spruce_chest_boat",
        recipe: {
            ingredients: [
                {
                    id: "chest",
                    quantity: 1,
                },
                {
                    id: "spruce_boat",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    spruce_door: {
        name: "Spruce Door",
        id: "spruce_door",
        recipe: {
            ingredients: [
                {
                    id: "spruce_planks",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    spruce_fence: {
        name: "Spruce Fence",
        id: "spruce_fence",
        recipe: {
            ingredients: [
                {
                    id: "spruce_planks",
                    quantity: 4,
                },
            ],
            result: 3,
        },
    },
    spruce_fence_gate: {
        name: "Spruce Fence Gate",
        id: "spruce_fence_gate",
        recipe: {
            ingredients: [
                {
                    id: "spruce_planks",
                    quantity: 4,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    spruce_leaves: {
        name: "Spruce Leaves",
        id: "spruce_leaves",
        recipe: {
            baseItem: true,
        },
    },
    spruce_log: {
        name: "Spruce Log",
        id: "spruce_log",
        recipe: {
            baseItem: true,
        },
    },
    spruce_planks: {
        name: "Spruce Planks",
        id: "spruce_planks",
        recipe: {
            ingredients: [
                {
                    id: "spruce_log",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    spruce_pressure_plate: {
        name: "Spruce Pressure Plate",
        id: "spruce_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "spruce_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    spruce_sapling: {
        name: "Spruce Sapling",
        id: "spruce_sapling",
        recipe: {
            baseItem: true,
        },
    },
    spruce_sign: {
        name: "Spruce Sign",
        id: "spruce_sign",
        recipe: {
            ingredients: [
                {
                    id: "spruce_planks",
                    quantity: 6,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 3,
        },
    },
    spruce_slab: {
        name: "Spruce Slab",
        id: "spruce_slab",
        recipe: {
            ingredients: [
                {
                    id: "spruce_planks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    spruce_stairs: {
        name: "Spruce Stairs",
        id: "spruce_stairs",
        recipe: {
            ingredients: [
                {
                    id: "spruce_planks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    spruce_trapdoor: {
        name: "Spruce Trapdoor",
        id: "spruce_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "spruce_planks",
                    quantity: 6,
                },
            ],
            result: 2,
        },
    },
    spruce_wood: {
        name: "Spruce Wood",
        id: "spruce_wood",
        recipe: {
            ingredients: [
                {
                    id: "spruce_log",
                    quantity: 4,
                },
            ],
            result: 3,
        },
    },
    stick: {
        name: "Stick",
        id: "stick",
        recipe: {
            ingredients: [
                {
                    id: "tag_planks",
                    quantity: 2,
                },
            ],
            result: 4,
        },
    },
    sticky_piston: {
        name: "Sticky Piston",
        id: "sticky_piston",
        recipe: {
            ingredients: [
                {
                    id: "piston",
                    quantity: 1,
                },
                {
                    id: "slime_ball",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stone: {
        name: "Stone",
        id: "stone",
        recipe: {
            baseItem: true,
        },
    },
    stone_axe: {
        name: "Stone Axe",
        id: "stone_axe",
        recipe: {
            ingredients: [
                {
                    id: "cobblestone",
                    quantity: 2,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stone_brick_slab: {
        name: "Stone Brick Slab",
        id: "stone_brick_slab",
        recipe: {
            ingredients: [
                {
                    id: "stone_bricks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    stone_brick_stairs: {
        name: "Stone Brick Stairs",
        id: "stone_brick_stairs",
        recipe: {
            ingredients: [
                {
                    id: "stone_bricks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    stone_brick_wall: {
        name: "Stone Brick Wall",
        id: "stone_brick_wall",
        recipe: {
            ingredients: [
                {
                    id: "stone_bricks",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    stone_bricks: {
        name: "Stone Bricks",
        id: "stone_bricks",
        recipe: {
            ingredients: [
                {
                    id: "stone",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    stone_button: {
        name: "Stone Button",
        id: "stone_button",
        recipe: {
            ingredients: [
                {
                    id: "stone",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stone_hoe: {
        name: "Stone Hoe",
        id: "stone_hoe",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 2,
                },
                {
                    id: "tag_cobblestone",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    stone_pickaxe: {
        name: "Stone Pickaxe",
        id: "stone_pickaxe",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 2,
                },
                {
                    id: "tag_cobblestone",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    stone_pressure_plate: {
        name: "Stone Pressure Plate",
        id: "stone_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "stone",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    stone_shovel: {
        name: "Stone Shovel",
        id: "stone_shovel",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 2,
                },
                {
                    id: "tag_cobblestone",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stone_slab: {
        name: "Stone Slab",
        id: "stone_slab",
        recipe: {
            ingredients: [
                {
                    id: "stone",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    stone_stairs: {
        name: "Stone Stairs",
        id: "stone_stairs",
        recipe: {
            ingredients: [
                {
                    id: "stone",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    stone_sword: {
        name: "Stone Sword",
        id: "stone_sword",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 1,
                },
                {
                    id: "tag_cobblestone",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    stonecutter: {
        name: "Stonecutter",
        id: "stonecutter",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 1,
                },
                {
                    id: "stone",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    string: {
        name: "String",
        id: "string",
        recipe: {
            baseItem: true,
        },
    },
    stripped_acacia_log: {
        name: "Stripped Acacia Log",
        id: "stripped_acacia_log",
        recipe: {
            ingredients: [
                {
                    id: "acacia_log",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_acacia_wood: {
        name: "Stripped Acacia Wood",
        id: "stripped_acacia_wood",
        recipe: {
            ingredients: [
                {
                    id: "acacia_wood",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_birch_log: {
        name: "Stripped Birch Log",
        id: "stripped_birch_log",
        recipe: {
            ingredients: [
                {
                    id: "birch_log",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_birch_wood: {
        name: "Stripped Birch Wood",
        id: "stripped_birch_wood",
        recipe: {
            ingredients: [
                {
                    id: "birch_wood",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_crimson_hyphae: {
        name: "Stripped Crimson Hyphae",
        id: "stripped_crimson_hyphae",
        recipe: {
            ingredients: [
                {
                    id: "crimson_hyphae",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_crimson_stem: {
        name: "Stripped Crimson Stem",
        id: "stripped_crimson_stem",
        recipe: {
            ingredients: [
                {
                    id: "crimson_stem",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_dark_oak_log: {
        name: "Stripped Dark Oak Log",
        id: "stripped_dark_oak_log",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_log",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_dark_oak_wood: {
        name: "Stripped Dark Oak Wood",
        id: "stripped_dark_oak_wood",
        recipe: {
            ingredients: [
                {
                    id: "dark_oak_wood",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_jungle_log: {
        name: "Stripped Jungle Log",
        id: "stripped_jungle_log",
        recipe: {
            ingredients: [
                {
                    id: "jungle_log",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_jungle_wood: {
        name: "Stripped Jungle Wood",
        id: "stripped_jungle_wood",
        recipe: {
            ingredients: [
                {
                    id: "jungle_wood",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_oak_log: {
        name: "Stripped Oak Log",
        id: "stripped_oak_log",
        recipe: {
            ingredients: [
                {
                    id: "oak_log",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_oak_wood: {
        name: "Stripped Oak Wood",
        id: "stripped_oak_wood",
        recipe: {
            ingredients: [
                {
                    id: "oak_wood",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_spruce_log: {
        name: "Stripped Spruce Log",
        id: "stripped_spruce_log",
        recipe: {
            ingredients: [
                {
                    id: "spruce_log",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_spruce_wood: {
        name: "Stripped Spruce Wood",
        id: "stripped_spruce_wood",
        recipe: {
            ingredients: [
                {
                    id: "spruce_wood",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_warped_hyphae: {
        name: "Stripped Warped Hyphae",
        id: "stripped_warped_hyphae",
        recipe: {
            ingredients: [
                {
                    id: "warped_hyphae",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    stripped_warped_stem: {
        name: "Stripped Warped Stem",
        id: "stripped_warped_stem",
        recipe: {
            ingredients: [
                {
                    id: "warped_stem",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    structure_block: {
        name: "Structure Block",
        id: "structure_block",
        recipe: {
            baseItem: true,
        },
    },
    structure_void: {
        name: "Structure Void",
        id: "structure_void",
        recipe: {
            baseItem: true,
        },
    },
    sugar: {
        name: "Sugar",
        id: "sugar",
        recipe: {
            ingredients: [
                {
                    id: "sugar_cane",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    sugar_cane: {
        name: "Sugar Cane",
        id: "sugar_cane",
        recipe: {
            baseItem: true,
        },
    },
    sunflower: {
        name: "Sunflower",
        id: "sunflower",
        recipe: {
            baseItem: true,
        },
    },
    suspicious_gravel: {
        name: "Suspicious Gravel",
        id: "suspicious_gravel",
        recipe: {
            baseItem: true,
        },
    },
    suspicious_sand: {
        name: "Suspicious Sand",
        id: "suspicious_sand",
        recipe: {
            baseItem: true,
        },
    },
    sweet_berries: {
        name: "Sweet Berries",
        id: "sweet_berries",
        recipe: {
            ingredients: [
                {
                    id: "sweet_berry_bush",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    sweet_berry_bush: {
        name: "Sweet Berry Bush",
        id: "sweet_berry_bush",
        recipe: {
            baseItem: true,
        },
    },
    tag_cobblestone: {
        name: "Any Cobblestone",
        id: "tag_cobblestone",
        recipe: {
            baseItem: true,
        },
    },
    tag_logs: {
        name: "Any Logs",
        id: "tag_logs",
        recipe: {
            baseItem: true,
        },
    },
    tag_planks: {
        name: "Any Planks",
        id: "tag_planks",
        recipe: {
            ingredients: [
                {
                    id: "tag_logs",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    tag_shulker_box: {
        name: "Any Shulker Box",
        id: "tag_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "chest",
                    quantity: 2,
                },
                {
                    id: "shulker_shell",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    tag_wood: {
        name: "Any Wood",
        id: "tag_wood",
        recipe: {
            ingredients: [
                {
                    id: "tag_logs",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    tag_wood_slabs: {
        name: "Any Wood Slabs",
        id: "tag_wood_slabs",
        recipe: {
            ingredients: [
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    tag_wool: {
        name: "Any Wool",
        id: "tag_wool",
        recipe: {
            baseItem: true,
        },
    },
    tall_grass: {
        name: "Tall Grass",
        id: "tall_grass",
        recipe: {
            baseItem: true,
        },
    },
    tall_seagrass: {
        name: "Tall Seagrass",
        id: "tall_seagrass",
        recipe: {
            baseItem: true,
        },
    },
    target: {
        name: "Target",
        id: "target",
        recipe: {
            ingredients: [
                {
                    id: "hay_block",
                    quantity: 1,
                },
                {
                    id: "redstone",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    terracotta: {
        name: "Terracotta",
        id: "terracotta",
        recipe: {
            baseItem: true,
        },
    },
    tinted_glass: {
        name: "Tinted Glass",
        id: "tinted_glass",
        recipe: {
            ingredients: [
                {
                    id: "amethyst_shard",
                    quantity: 4,
                },
                {
                    id: "glass",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    tnt: {
        name: "TNT",
        id: "tnt",
        recipe: {
            ingredients: [
                {
                    id: "gunpowder",
                    quantity: 5,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
            ],
            result: 1,
        },
    },
    tnt_minecart: {
        name: "Minecart with TNT",
        id: "tnt_minecart",
        recipe: {
            ingredients: [
                {
                    id: "minecart",
                    quantity: 1,
                },
                {
                    id: "tnt",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    torch: {
        name: "Torch",
        id: "torch",
        recipe: {
            ingredients: [
                {
                    id: "coal",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    torchflower: {
        name: "Torchflower",
        id: "torchflower",
        recipe: {
            baseItem: true,
        },
    },
    torchflower_crop: {
        name: "Torchflower Crop",
        id: "torchflower_crop",
        recipe: {
            baseItem: true,
        },
    },
    torchflower_seeds: {
        name: "Torchflower Seeds",
        id: "torchflower_seeds",
        recipe: {
            baseItem: true,
        },
    },
    trapped_chest: {
        name: "Trapped Chest",
        id: "trapped_chest",
        recipe: {
            ingredients: [
                {
                    id: "chest",
                    quantity: 1,
                },
                {
                    id: "tripwire_hook",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    trial_key: {
        name: "Trial Key",
        id: "trial_key",
        recipe: {
            baseItem: true,
        },
    },
    trial_spawner: {
        name: "Trial Spawner",
        id: "trial_spawner",
        recipe: {
            baseItem: true,
        },
    },
    trident: {
        name: "Trident",
        id: "trident",
        recipe: {
            baseItem: true,
        },
    },
    tripwire: {
        name: "Tripwire",
        id: "tripwire",
        recipe: {
            ingredients: [
                {
                    id: "string",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    tripwire_hook: {
        name: "Tripwire Hook",
        id: "tripwire_hook",
        recipe: {
            ingredients: [
                {
                    id: "iron_ingot",
                    quantity: 1,
                },
                {
                    id: "stick",
                    quantity: 1,
                },
                {
                    id: "tag_planks",
                    quantity: 1,
                },
            ],
            result: 2,
        },
    },
    tube_coral: {
        name: "Tube Coral",
        id: "tube_coral",
        recipe: {
            baseItem: true,
        },
    },
    tube_coral_block: {
        name: "Tube Coral Block",
        id: "tube_coral_block",
        recipe: {
            baseItem: true,
        },
    },
    tube_coral_fan: {
        name: "Tube Coral Fan",
        id: "tube_coral_fan",
        recipe: {
            baseItem: true,
        },
    },
    tuff: {
        name: "Tuff",
        id: "tuff",
        recipe: {
            baseItem: true,
        },
    },
    tuff_brick_slab: {
        name: "Tuff Brick Slab",
        id: "tuff_brick_slab",
        recipe: {
            ingredients: [
                {
                    id: "tuff_bricks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    tuff_brick_stairs: {
        name: "Tuff Brick Stairs",
        id: "tuff_brick_stairs",
        recipe: {
            ingredients: [
                {
                    id: "tuff_bricks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    tuff_brick_wall: {
        name: "Tuff Brick Wall",
        id: "tuff_brick_wall",
        recipe: {
            ingredients: [
                {
                    id: "tuff_bricks",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    tuff_bricks: {
        name: "Tuff Bricks",
        id: "tuff_bricks",
        recipe: {
            ingredients: [
                {
                    id: "polished_tuff",
                    quantity: 4,
                },
            ],
            result: 4,
        },
    },
    tuff_slab: {
        name: "Tuff Slab",
        id: "tuff_slab",
        recipe: {
            ingredients: [
                {
                    id: "tuff",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    tuff_stairs: {
        name: "Tuff Stairs",
        id: "tuff_stairs",
        recipe: {
            ingredients: [
                {
                    id: "tuff",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    tuff_wall: {
        name: "Tuff Wall",
        id: "tuff_wall",
        recipe: {
            ingredients: [
                {
                    id: "tuff",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    turtle_egg: {
        name: "Turtle Egg",
        id: "turtle_egg",
        recipe: {
            baseItem: true,
        },
    },
    turtle_helmet: {
        name: "Turtle Shell",
        id: "turtle_helmet",
        recipe: {
            ingredients: [
                {
                    id: "scute",
                    quantity: 5,
                },
            ],
            result: 1,
        },
    },
    twisting_vines: {
        name: "Twisting Vines",
        id: "twisting_vines",
        recipe: {
            baseItem: true,
        },
    },
    vault: {
        name: "Vault",
        id: "vault",
        recipe: {
            baseItem: true,
        },
    },
    verdant_froglight: {
        name: "Verdant Froglight",
        id: "verdant_froglight",
        recipe: {
            baseItem: true,
        },
    },
    vine: {
        name: "Vines",
        id: "vine",
        recipe: {
            baseItem: true,
        },
    },
    warped_button: {
        name: "Warped Button",
        id: "warped_button",
        recipe: {
            ingredients: [
                {
                    id: "warped_planks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    warped_door: {
        name: "Warped Door",
        id: "warped_door",
        recipe: {
            ingredients: [
                {
                    id: "warped_planks",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    warped_fence: {
        name: "Warped Fence",
        id: "warped_fence",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 2,
                },
                {
                    id: "warped_planks",
                    quantity: 4,
                },
            ],
            result: 3,
        },
    },
    warped_fence_gate: {
        name: "Warped Fence Gate",
        id: "warped_fence_gate",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 4,
                },
                {
                    id: "warped_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    warped_fungus: {
        name: "Warped Fungus",
        id: "warped_fungus",
        recipe: {
            baseItem: true,
        },
    },
    warped_fungus_on_a_stick: {
        name: "Warped Fungus on a Stick",
        id: "warped_fungus_on_a_stick",
        recipe: {
            ingredients: [
                {
                    id: "fishing_rod",
                    quantity: 1,
                },
                {
                    id: "warped_fungus",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    warped_hanging_sign: {
        name: "Warped Hanging Sign",
        id: "warped_hanging_sign",
        recipe: {
            ingredients: [
                {
                    id: "chain",
                    quantity: 2,
                },
                {
                    id: "warped_stem",
                    quantity: 6,
                },
            ],
            result: 6,
        },
    },
    warped_hyphae: {
        name: "Warped Hyphae",
        id: "warped_hyphae",
        recipe: {
            ingredients: [
                {
                    id: "warped_stem",
                    quantity: 4,
                },
            ],
            result: 3,
        },
    },
    warped_nylium: {
        name: "Warped Nylium",
        id: "warped_nylium",
        recipe: {
            baseItem: true,
        },
    },
    warped_planks: {
        name: "Warped Planks",
        id: "warped_planks",
        recipe: {
            ingredients: [
                {
                    id: "warped_stem",
                    quantity: 1,
                },
            ],
            result: 4,
        },
    },
    warped_pressure_plate: {
        name: "Warped Pressure Plate",
        id: "warped_pressure_plate",
        recipe: {
            ingredients: [
                {
                    id: "warped_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    warped_roots: {
        name: "Warped Roots",
        id: "warped_roots",
        recipe: {
            baseItem: true,
        },
    },
    warped_sign: {
        name: "Warped Sign",
        id: "warped_sign",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 1,
                },
                {
                    id: "warped_planks",
                    quantity: 6,
                },
            ],
            result: 3,
        },
    },
    warped_slab: {
        name: "Warped Slab",
        id: "warped_slab",
        recipe: {
            ingredients: [
                {
                    id: "warped_planks",
                    quantity: 3,
                },
            ],
            result: 6,
        },
    },
    warped_stairs: {
        name: "Warped Stairs",
        id: "warped_stairs",
        recipe: {
            ingredients: [
                {
                    id: "warped_planks",
                    quantity: 6,
                },
            ],
            result: 4,
        },
    },
    warped_stem: {
        name: "Warped Stem",
        id: "warped_stem",
        recipe: {
            baseItem: true,
        },
    },
    warped_trapdoor: {
        name: "Warped Trapdoor",
        id: "warped_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "warped_planks",
                    quantity: 6,
                },
            ],
            result: 2,
        },
    },
    warped_wart_block: {
        name: "Warped Wart Block",
        id: "warped_wart_block",
        recipe: {
            baseItem: true,
        },
    },
    water: {
        name: "Water",
        id: "water",
        recipe: {
            baseItem: true,
        },
    },
    water_bottle: {
        name: "Water Bottle",
        id: "water_bottle",
        recipe: {
            ingredients: [
                {
                    id: "glass_bottle",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    water_bucket: {
        name: "Water Bucket",
        id: "water_bucket",
        recipe: {
            ingredients: [
                {
                    id: "bucket",
                    quantity: 1,
                },
                {
                    id: "water",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    water_cauldron: {
        name: "Water Cauldron",
        id: "water_cauldron",
        recipe: {
            ingredients: [
                {
                    id: "cauldron",
                    quantity: 1,
                },
                {
                    id: "water_bucket",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_chiseled_copper: {
        name: "Waxed Chiseled Copper",
        id: "waxed_chiseled_copper",
        recipe: {
            ingredients: [
                {
                    id: "chiseled_copper",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_copper_block: {
        name: "Waxed Block of Copper",
        id: "waxed_copper_block",
        recipe: {
            ingredients: [
                {
                    id: "copper_block",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_copper_bulb: {
        name: "Waxed Copper Bulb",
        id: "waxed_copper_bulb",
        recipe: {
            ingredients: [
                {
                    id: "copper_bulb",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_copper_door: {
        name: "Waxed Copper Door",
        id: "waxed_copper_door",
        recipe: {
            ingredients: [
                {
                    id: "copper_door",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_copper_grate: {
        name: "Waxed Copper Grate",
        id: "waxed_copper_grate",
        recipe: {
            ingredients: [
                {
                    id: "copper_grate",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_copper_trapdoor: {
        name: "Waxed Copper Trapdoor",
        id: "waxed_copper_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "copper_trapdoor",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_cut_copper: {
        name: "Waxed Cut Copper",
        id: "waxed_cut_copper",
        recipe: {
            ingredients: [
                {
                    id: "cut_copper",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_cut_copper_slab: {
        name: "Waxed Cut Copper Slab",
        id: "waxed_cut_copper_slab",
        recipe: {
            ingredients: [
                {
                    id: "cut_copper_slab",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_cut_copper_stairs: {
        name: "Waxed Cut Copper Stairs",
        id: "waxed_cut_copper_stairs",
        recipe: {
            ingredients: [
                {
                    id: "cut_copper_stairs",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_exposed_chiseled_copper: {
        name: "Waxed Exposed Chiseled Copper",
        id: "waxed_exposed_chiseled_copper",
        recipe: {
            ingredients: [
                {
                    id: "exposed_chiseled_copper",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_exposed_copper: {
        name: "Waxed Exposed Copper",
        id: "waxed_exposed_copper",
        recipe: {
            ingredients: [
                {
                    id: "exposed_copper",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_exposed_copper_bulb: {
        name: "Waxed Exposed Copper Bulb",
        id: "waxed_exposed_copper_bulb",
        recipe: {
            ingredients: [
                {
                    id: "exposed_copper_bulb",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_exposed_copper_door: {
        name: "Waxed Exposed Copper Door",
        id: "waxed_exposed_copper_door",
        recipe: {
            ingredients: [
                {
                    id: "exposed_copper_door",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_exposed_copper_grate: {
        name: "Waxed Exposed Copper Grate",
        id: "waxed_exposed_copper_grate",
        recipe: {
            ingredients: [
                {
                    id: "exposed_copper_grate",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_exposed_copper_trapdoor: {
        name: "Waxed Exposed Copper Trapdoor",
        id: "waxed_exposed_copper_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "exposed_copper_trapdoor",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_exposed_cut_copper: {
        name: "Waxed Exposed Cut Copper",
        id: "waxed_exposed_cut_copper",
        recipe: {
            ingredients: [
                {
                    id: "exposed_cut_copper",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_exposed_cut_copper_slab: {
        name: "Waxed Exposed Cut Copper Slab",
        id: "waxed_exposed_cut_copper_slab",
        recipe: {
            ingredients: [
                {
                    id: "exposed_cut_copper_slab",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_exposed_cut_copper_stairs: {
        name: "Waxed Exposed Cut Copper Stairs",
        id: "waxed_exposed_cut_copper_stairs",
        recipe: {
            ingredients: [
                {
                    id: "exposed_cut_copper_stairs",
                    quantity: 1,
                },
                {
                    id: "honeycomb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_oxidized_chiseled_copper: {
        name: "Waxed Oxidized Chiseled Copper",
        id: "waxed_oxidized_chiseled_copper",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "oxidized_chiseled_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_oxidized_copper: {
        name: "Waxed Oxidized Copper",
        id: "waxed_oxidized_copper",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "oxidized_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_oxidized_copper_bulb: {
        name: "Waxed Oxidized Copper Bulb",
        id: "waxed_oxidized_copper_bulb",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "oxidized_copper_bulb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_oxidized_copper_door: {
        name: "Waxed Oxidized Copper Door",
        id: "waxed_oxidized_copper_door",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "oxidized_copper_door",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_oxidized_copper_grate: {
        name: "Waxed Oxidized Copper Grate",
        id: "waxed_oxidized_copper_grate",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "oxidized_copper_grate",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_oxidized_copper_trapdoor: {
        name: "Waxed Oxidized Copper Trapdoor",
        id: "waxed_oxidized_copper_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "oxidized_copper_trapdoor",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_oxidized_cut_copper: {
        name: "Waxed Oxidized Cut Copper",
        id: "waxed_oxidized_cut_copper",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "oxidized_cut_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_oxidized_cut_copper_slab: {
        name: "Waxed Oxidized Cut Copper Slab",
        id: "waxed_oxidized_cut_copper_slab",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "oxidized_cut_copper_slab",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_oxidized_cut_copper_stairs: {
        name: "Waxed Oxidized Cut Copper Stairs",
        id: "waxed_oxidized_cut_copper_stairs",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "oxidized_cut_copper_stairs",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_weathered_chiseled_copper: {
        name: "Waxed Weathered Chiseled Copper",
        id: "waxed_weathered_chiseled_copper",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "weathered_chiseled_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_weathered_copper: {
        name: "Waxed Weathered Copper",
        id: "waxed_weathered_copper",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "weathered_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_weathered_copper_bulb: {
        name: "Waxed Weathered Copper Bulb",
        id: "waxed_weathered_copper_bulb",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "weathered_copper_bulb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_weathered_copper_door: {
        name: "Waxed Weathered Copper Door",
        id: "waxed_weathered_copper_door",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "weathered_copper_door",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_weathered_copper_grate: {
        name: "Waxed Weathered Copper Grate",
        id: "waxed_weathered_copper_grate",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "weathered_copper_grate",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_weathered_copper_trapdoor: {
        name: "Waxed Weathered Copper Trapdoor",
        id: "waxed_weathered_copper_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "weathered_copper_trapdoor",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_weathered_cut_copper: {
        name: "Waxed Weathered Cut Copper",
        id: "waxed_weathered_cut_copper",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "weathered_cut_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_weathered_cut_copper_slab: {
        name: "Waxed Weathered Cut Copper Slab",
        id: "waxed_weathered_cut_copper_slab",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "weathered_cut_copper_slab",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    waxed_weathered_cut_copper_stairs: {
        name: "Waxed Weathered Cut Copper Stairs",
        id: "waxed_weathered_cut_copper_stairs",
        recipe: {
            ingredients: [
                {
                    id: "honeycomb",
                    quantity: 1,
                },
                {
                    id: "weathered_cut_copper_stairs",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    weathered_chiseled_copper: {
        name: "Weathered Chiseled Copper",
        id: "weathered_chiseled_copper",
        recipe: {
            ingredients: [
                {
                    id: "exposed_chiseled_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    weathered_copper: {
        name: "Weathered Copper",
        id: "weathered_copper",
        recipe: {
            ingredients: [
                {
                    id: "exposed_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    weathered_copper_bulb: {
        name: "Weathered Copper Bulb",
        id: "weathered_copper_bulb",
        recipe: {
            ingredients: [
                {
                    id: "exposed_copper_bulb",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    weathered_copper_door: {
        name: "Weathered Copper Door",
        id: "weathered_copper_door",
        recipe: {
            ingredients: [
                {
                    id: "exposed_copper_door",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    weathered_copper_grate: {
        name: "Weathered Copper Grate",
        id: "weathered_copper_grate",
        recipe: {
            ingredients: [
                {
                    id: "exposed_copper_grate",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    weathered_copper_trapdoor: {
        name: "Weathered Copper Trapdoor",
        id: "weathered_copper_trapdoor",
        recipe: {
            ingredients: [
                {
                    id: "exposed_copper_trapdoor",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    weathered_cut_copper: {
        name: "Weathered Cut Copper",
        id: "weathered_cut_copper",
        recipe: {
            ingredients: [
                {
                    id: "exposed_cut_copper",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    weathered_cut_copper_slab: {
        name: "Weathered Cut Copper Slab",
        id: "weathered_cut_copper_slab",
        recipe: {
            ingredients: [
                {
                    id: "exposed_cut_copper_slab",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    weathered_cut_copper_stairs: {
        name: "Weathered Cut Copper Stairs",
        id: "weathered_cut_copper_stairs",
        recipe: {
            ingredients: [
                {
                    id: "exposed_cut_copper_stairs",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    weeping_vines: {
        name: "Weeping Vines",
        id: "weeping_vines",
        recipe: {
            baseItem: true,
        },
    },
    wheat: {
        name: "Wheat",
        id: "wheat",
        recipe: {
            ingredients: [
                {
                    id: "wheat_seeds",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    wheat_seeds: {
        name: "Wheat Seeds",
        id: "wheat_seeds",
        recipe: {
            baseItem: true,
        },
    },
    white_banner: {
        name: "White Banner",
        id: "white_banner",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 1,
                },
                {
                    id: "white_wool",
                    quantity: 6,
                },
            ],
            result: 1,
        },
    },
    white_bed: {
        name: "White Bed",
        id: "white_bed",
        recipe: {
            ingredients: [
                {
                    id: "tag_planks",
                    quantity: 3,
                },
                {
                    id: "white_wool",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    white_candle: {
        name: "White Candle",
        id: "white_candle",
        recipe: {
            ingredients: [
                {
                    id: "candle",
                    quantity: 1,
                },
                {
                    id: "white_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    white_carpet: {
        name: "White Carpet",
        id: "white_carpet",
        recipe: {
            ingredients: [
                {
                    id: "white_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    white_concrete: {
        name: "White Concrete",
        id: "white_concrete",
        recipe: {
            ingredients: [
                {
                    id: "white_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    white_concrete_powder: {
        name: "White Concrete Powder",
        id: "white_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
                {
                    id: "white_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    white_dye: {
        name: "White Dye",
        id: "white_dye",
        recipe: {
            ingredients: [
                {
                    id: "bone_meal",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    white_glazed_terracotta: {
        name: "White Glazed Terracotta",
        id: "white_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "white_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    white_shulker_box: {
        name: "White Shulker Box",
        id: "white_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
                {
                    id: "white_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    white_stained_glass: {
        name: "White Stained Glass",
        id: "white_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 8,
                },
                {
                    id: "white_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    white_stained_glass_pane: {
        name: "White Stained Glass Pane",
        id: "white_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "white_dye",
                    quantity: 1,
                },
                {
                    id: "white_stained_glass",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    white_terracotta: {
        name: "White Terracotta",
        id: "white_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "terracotta",
                    quantity: 8,
                },
                {
                    id: "white_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    white_tulip: {
        name: "White Tulip",
        id: "white_tulip",
        recipe: {
            baseItem: true,
        },
    },
    white_wool: {
        name: "White Wool",
        id: "white_wool",
        recipe: {
            baseItem: true,
        },
    },
    wither_rose: {
        name: "Wither Rose",
        id: "wither_rose",
        recipe: {
            baseItem: true,
        },
    },
    wither_skeleton_skull: {
        name: "Wither Skeleton Skull",
        id: "wither_skeleton_skull",
        recipe: {
            baseItem: true,
        },
    },
    wooden_axe: {
        name: "Wooden Axe",
        id: "wooden_axe",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 1,
                },
                {
                    id: "tag_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    wooden_hoe: {
        name: "Wooden Hoe",
        id: "wooden_hoe",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 1,
                },
                {
                    id: "tag_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    wooden_pickaxe: {
        name: "Wooden Pickaxe",
        id: "wooden_pickaxe",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 2,
                },
                {
                    id: "tag_planks",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    wooden_shovel: {
        name: "Wooden Shovel",
        id: "wooden_shovel",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 2,
                },
                {
                    id: "tag_planks",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    wooden_sword: {
        name: "Wooden Sword",
        id: "wooden_sword",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 1,
                },
                {
                    id: "tag_planks",
                    quantity: 2,
                },
            ],
            result: 1,
        },
    },
    yellow_banner: {
        name: "Yellow Banner",
        id: "yellow_banner",
        recipe: {
            ingredients: [
                {
                    id: "stick",
                    quantity: 1,
                },
                {
                    id: "yellow_wool",
                    quantity: 6,
                },
            ],
            result: 1,
        },
    },
    yellow_bed: {
        name: "Yellow Bed",
        id: "yellow_bed",
        recipe: {
            ingredients: [
                {
                    id: "tag_planks",
                    quantity: 3,
                },
                {
                    id: "yellow_wool",
                    quantity: 3,
                },
            ],
            result: 1,
        },
    },
    yellow_candle: {
        name: "Yellow Candle",
        id: "yellow_candle",
        recipe: {
            ingredients: [
                {
                    id: "candle",
                    quantity: 1,
                },
                {
                    id: "yellow_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    yellow_carpet: {
        name: "Yellow Carpet",
        id: "yellow_carpet",
        recipe: {
            ingredients: [
                {
                    id: "yellow_wool",
                    quantity: 2,
                },
            ],
            result: 3,
        },
    },
    yellow_concrete: {
        name: "Yellow Concrete",
        id: "yellow_concrete",
        recipe: {
            ingredients: [
                {
                    id: "yellow_concrete_powder",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    yellow_concrete_powder: {
        name: "Yellow Concrete Powder",
        id: "yellow_concrete_powder",
        recipe: {
            ingredients: [
                {
                    id: "gravel",
                    quantity: 4,
                },
                {
                    id: "sand",
                    quantity: 4,
                },
                {
                    id: "yellow_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    yellow_dye: {
        name: "yellow Dye",
        id: "yellow_dye",
        recipe: {
            ingredients: [
                {
                    id: "dandelion",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    yellow_glazed_terracotta: {
        name: "Yellow Glazed Terracotta",
        id: "yellow_glazed_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "yellow_terracotta",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    yellow_shulker_box: {
        name: "Yellow Shulker Box",
        id: "yellow_shulker_box",
        recipe: {
            ingredients: [
                {
                    id: "tag_shulker_box",
                    quantity: 1,
                },
                {
                    id: "yellow_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    yellow_stained_glass: {
        name: "Yellow Stained Glass",
        id: "yellow_stained_glass",
        recipe: {
            ingredients: [
                {
                    id: "glass",
                    quantity: 8,
                },
                {
                    id: "yellow_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    yellow_stained_glass_pane: {
        name: "Yellow Stained Glass Pane",
        id: "yellow_stained_glass_pane",
        recipe: {
            ingredients: [
                {
                    id: "yellow_dye",
                    quantity: 1,
                },
                {
                    id: "yellow_stained_glass",
                    quantity: 8,
                },
            ],
            result: 8,
        },
    },
    yellow_terracotta: {
        name: "Yellow Terracotta",
        id: "yellow_terracotta",
        recipe: {
            ingredients: [
                {
                    id: "terracotta",
                    quantity: 8,
                },
                {
                    id: "yellow_dye",
                    quantity: 1,
                },
            ],
            result: 8,
        },
    },
    yellow_wool: {
        name: "Yellow Wool",
        id: "yellow_wool",
        recipe: {
            ingredients: [
                {
                    id: "tag_wool",
                    quantity: 1,
                },
                {
                    id: "yellow_dye",
                    quantity: 1,
                },
            ],
            result: 1,
        },
    },
    zombie_head: {
        name: "Zombie Head",
        id: "zombie_head",
        recipe: {
            baseItem: true,
        },
    },
};

export const ItemConversion: Record<string, string> = {
    acacia_wall_hanging_sign: "acacia_hanging_sign",
    acacia_wall_sign: "acacia_sign",
    attached_melon_stem: "melon_stem",
    attached_pumpkin_stem: "pumpkin_stem",
    bamboo_wall_hanging_sign: "bamboo_hanging_sign",
    bamboo_wall_sign: "bamboo_sign",
    big_dripleaf_stem: "big_dripleaf",
    birch_wall_hanging_sign: "birch_hanging_sign",
    birch_wall_sign: "birch_sign",
    black_wall_banner: "black_banner",
    blue_wall_banner: "blue_banner",
    brain_coral_wall_fan: "brain_coral_fan",
    brick_block: "bricks",
    brown_wall_banner: "brown_banner",
    bubble_coral_wall_fan: "bubble_coral_fan",
    bubble_column: "water",
    cave_air: "air",
    cave_vines_plant: "cave_vines",
    cherry_wall_hanging_sign: "cherry_hanging_sign",
    cherry_wall_sign: "cherry_sign",
    creeper_wall_head: "creeper_head",
    crimson_wall_hanging_sign: "crimson_hanging_sign",
    crimson_wall_sign: "crimson_sign",
    cyan_wall_banner: "cyan_banner",
    damaged_anvil: "anvil",
    dark_oak_wall_hanging_sign: "dark_oak_hanging_sign",
    dark_oak_wall_sign: "dark_oak_sign",
    dead_brain_coral_wall_fan: "dead_brain_coral_fan",
    dead_bubble_coral_wall_fan: "dead_bubble_coral_fan",
    dead_fire_coral_wall_fan: "dead_fire_coral_fan",
    dead_horn_coral_wall_fan: "dead_horn_coral_fan",
    dead_tube_coral_wall_fan: "dead_tube_coral_fan",
    dragon_wall_head: "dragon_head",
    double_stone_slab: "stone_slab",
    end_gateway: "air",
    end_portal: "air",
    fire: "air",
    fire_coral_wall_fan: "fire_coral_fan",
    frosted_ice: "ice",
    grass: "short_grass",
    gray_wall_banner: "gray_banner",
    green_wall_banner: "green_banner",
    horn_coral_wall_fan: "horn_coral_fan",
    jungle_wall_hanging_sign: "jungle_hanging_sign",
    jungle_wall_sign: "jungle_sign",
    kelp_plant: "kelp",
    light_blue_wall_banner: "light_blue_banner",
    light_gray_wall_banner: "light_gray_banner",
    lime_wall_banner: "lime_banner",
    magenta_wall_banner: "magenta_banner",
    mangrove_wall_hanging_sign: "mangrove_hanging_sign",
    mangrove_wall_sign: "mangrove_sign",
    moving_piston: "air",
    nether_portal: "air",
    oak_wall_hanging_sign: "oak_hanging_sign",
    oak_wall_sign: "oak_sign",
    orange_wall_banner: "orange_banner",
    pink_wall_banner: "pink_banner",
    piston_head: "air",
    player_wall_head: "player_head",
    purple_wall_banner: "purple_banner",
    red_wall_banner: "red_banner",
    redstone_wall_torch: "redstone_torch",
    skeleton_wall_skull: "skeleton_skull",
    soul_fire: "air",
    soul_wall_torch: "soul_torch",
    spruce_wall_hanging_sign: "spruce_hanging_sign",
    spruce_wall_sign: "spruce_sign",
    tube_coral_wall_fan: "tube_coral_fan",
    twisting_vines_plant: "twisting_vines",
    wall_torch: "torch",
    warped_wall_hanging_sign: "warped_hanging_sign",
    warped_wall_sign: "warped_sign",
    weeping_vines_plant: "weeping_vines",
    wither_skeleton_wall_skull: "wither_skeleton_skull",
    white_wall_banner: "white_banner",
    void_air: "air",
    yellow_wall_banner: "yellow_banner",
    zombie_wall_head: "zombie_head",
};
