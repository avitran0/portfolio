export interface Item {
    id: string;
    name: string;
    recipe:
        | {
              ingredients: Ingredient[];
              result: number;
          }
        | {
              baseItem: boolean;
          };
}

export interface Ingredient {
    id: string;
    quantity: number;
}

export interface Vec3 {
    x: number;
    y: number;
    z: number;
}

export interface LitematicaRegion {
    BlockStatePalette: { Name: string; Properties?: Record<string, string> }[];
    // bit-packed array
    BlockStates: number[];
    Position: Vec3;
    Size: Vec3;
}

export interface Litematica {
    Metadata: {
        Author: string;
        EnclosingSize: Vec3;
        Name: string;
        RegionCount: number;
        TotalBlocks: number;
        TotalVolume: number;
    };
    MinecraftDataVersion: number;
    Regions: Record<string, LitematicaRegion>;
    Version: number;
}

export interface StructureNBT {
    DataVersion: number;
    blocks: { pos: number[]; state: number }[];
    palette: { Name: string; Properties?: Record<string, string> }[];
    size: number[];
}

export interface StructureNBTMultiPalette {
    DataVersion: number;
    blocks: { pos: number[]; state: number }[];
    palettes: { Name: string; Properties?: Record<string, string> }[][];
    size: number[];
}

export interface Schematica {
    // 8-bit integer array, max 256 ids, x*y*z bytes
    Blocks: number[];
    Data: number[];
    // probably "Alpha", alternatively "Classic" or "Pocket"
    Materials: string;

    Width: number;
    Length: number;
    Height: number;
}

export interface SpongeSchematicV1 {
    Version: number;
    Width: number;
    Height: number;
    Length: number;
    // same palette format as v3
    Palette: Record<string, number>;
    // varint array
    BlockData: number[];
}

export interface SpongeSchematicV3 {
    Schematic: {
        Version: number;
        DataVersion: number;
        Width: number;
        Height: number;
        Length: number;
        // palette format: minecraft:planks[variant=oak]
        Blocks: { Palette: Record<string, number>; Data: number[] };
    };
}

export type Schematic =
    | Litematica
    | Schematica
    | StructureNBT
    | StructureNBTMultiPalette
    | SpongeSchematicV1
    | SpongeSchematicV3;

export type BlockList = Record<string, number>;
