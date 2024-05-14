export interface Stats {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
}

interface PokemonType {
    name: string;
    color: string;
}

export enum PokemonTypes {
    Normal,
    Fighting,
    Flying,
    Poison,
    Ground,
    Rock,
    Bug,
    Ghost,
    Steel,
    Fire,
    Water,
    Grass,
    Electric,
    Psychic,
    Ice,
    Dragon,
    Dark,
    Fairy,
}

export const GPokemonTypes: Record<PokemonTypes, PokemonType> = {
    [PokemonTypes.Normal]: {
        name: "Normal",
        color: "#A8A878",
    },
    [PokemonTypes.Fighting]: {
        name: "Fighting",
        color: "#C03028",
    },
    [PokemonTypes.Flying]: {
        name: "Flying",
        color: "#A890F0",
    },
    [PokemonTypes.Poison]: {
        name: "Poison",
        color: "#A040A0",
    },
    [PokemonTypes.Ground]: {
        name: "Ground",
        color: "#E0C068",
    },
    [PokemonTypes.Rock]: {
        name: "Rock",
        color: "#B8A038",
    },
    [PokemonTypes.Bug]: {
        name: "Bug",
        color: "#A8B820",
    },
    [PokemonTypes.Ghost]: {
        name: "Ghost",
        color: "#705898",
    },
    [PokemonTypes.Steel]: {
        name: "Steel",
        color: "#B8B8D0",
    },
    [PokemonTypes.Fire]: {
        name: "Fire",
        color: "#F08030",
    },
    [PokemonTypes.Water]: {
        name: "Water",
        color: "#6890F0",
    },
    [PokemonTypes.Grass]: {
        name: "Grass",
        color: "#78C850",
    },
    [PokemonTypes.Electric]: {
        name: "Electric",
        color: "#F8D030",
    },
    [PokemonTypes.Psychic]: {
        name: "Psychic",
        color: "#F85888",
    },
    [PokemonTypes.Ice]: {
        name: "Ice",
        color: "#98D8D8",
    },
    [PokemonTypes.Dragon]: {
        name: "Dragon",
        color: "#7038F8",
    },
    [PokemonTypes.Dark]: {
        name: "Dark",
        color: "#705848",
    },
    [PokemonTypes.Fairy]: {
        name: "Fairy",
        color: "#EE99AC",
    },
};

export enum GrowthRate {
    Fast,
    MediumFast,
    MediumSlow,
    Slow,
}

export const GGrowthRates: Record<GrowthRate, (level: number) => number> = {
    [GrowthRate.Fast]: (level: number) => (4 * level * level * level) / 5,
    [GrowthRate.MediumFast]: (level: number) => level * level * level,
    [GrowthRate.MediumSlow]: (level: number) =>
        (6 / 5) * level * level * level - 15 * level * level + 100 * level - 140,
    [GrowthRate.Slow]: (level: number) => (5 * level * level * level) / 4,
};

interface Nature {
    name: string;
    increased_stat: keyof Stats;
    decreased_stat: keyof Stats;
}

export enum Natures {
    Hardy,
    Lonely,
    Brave,
    Adamant,
    Naughty,
    Bold,
    Docile,
    Relaxed,
    Impish,
    Lax,
    Timid,
    Hasty,
    Serious,
    Jolly,
    Naive,
    Modest,
    Mild,
    Quiet,
    Bashful,
    Rash,
    Calm,
    Gentle,
    Sassy,
    Careful,
    Quirky,
}

export const GNatures: Record<Natures, Nature> = {
    [Natures.Hardy]: {
        name: "Hardy",
        increased_stat: "attack",
        decreased_stat: "attack",
    },
    [Natures.Lonely]: {
        name: "Lonely",
        increased_stat: "attack",
        decreased_stat: "defense",
    },
    [Natures.Brave]: {
        name: "Brave",
        increased_stat: "attack",
        decreased_stat: "speed",
    },
    [Natures.Adamant]: {
        name: "Adamant",
        increased_stat: "attack",
        decreased_stat: "special_attack",
    },
    [Natures.Naughty]: {
        name: "Naughty",
        increased_stat: "attack",
        decreased_stat: "special_defense",
    },
    [Natures.Bold]: {
        name: "Bold",
        increased_stat: "defense",
        decreased_stat: "attack",
    },
    [Natures.Docile]: {
        name: "Docile",
        increased_stat: "defense",
        decreased_stat: "defense",
    },
    [Natures.Relaxed]: {
        name: "Relaxed",
        increased_stat: "defense",
        decreased_stat: "speed",
    },
    [Natures.Impish]: {
        name: "Impish",
        increased_stat: "defense",
        decreased_stat: "special_attack",
    },
    [Natures.Lax]: {
        name: "Lax",
        increased_stat: "defense",
        decreased_stat: "special_defense",
    },
    [Natures.Timid]: {
        name: "Timid",
        increased_stat: "speed",
        decreased_stat: "attack",
    },
    [Natures.Hasty]: {
        name: "Hasty",
        increased_stat: "speed",
        decreased_stat: "defense",
    },
    [Natures.Serious]: {
        name: "Serious",
        increased_stat: "speed",
        decreased_stat: "speed",
    },
    [Natures.Jolly]: {
        name: "Jolly",
        increased_stat: "speed",
        decreased_stat: "special_attack",
    },
    [Natures.Naive]: {
        name: "Naive",
        increased_stat: "speed",
        decreased_stat: "special_defense",
    },
    [Natures.Modest]: {
        name: "Modest",
        increased_stat: "special_attack",
        decreased_stat: "attack",
    },
    [Natures.Mild]: {
        name: "Mild",
        increased_stat: "special_attack",
        decreased_stat: "defense",
    },
    [Natures.Quiet]: {
        name: "Quiet",
        increased_stat: "special_attack",
        decreased_stat: "speed",
    },
    [Natures.Bashful]: {
        name: "Bashful",
        increased_stat: "special_attack",
        decreased_stat: "special_attack",
    },
    [Natures.Rash]: {
        name: "Rash",
        increased_stat: "special_attack",
        decreased_stat: "special_defense",
    },
    [Natures.Calm]: {
        name: "Calm",
        increased_stat: "special_defense",
        decreased_stat: "attack",
    },
    [Natures.Gentle]: {
        name: "Gentle",
        increased_stat: "special_defense",
        decreased_stat: "defense",
    },
    [Natures.Sassy]: {
        name: "Sassy",
        increased_stat: "special_defense",
        decreased_stat: "speed",
    },
    [Natures.Careful]: {
        name: "Careful",
        increased_stat: "special_defense",
        decreased_stat: "special_attack",
    },
    [Natures.Quirky]: {
        name: "Quirky",
        increased_stat: "special_defense",
        decreased_stat: "special_defense",
    },
};

export const BaseFriendship = 70;
