import { BaseFriendship, GrowthRate, PokemonTypes, type Stats } from "./metadata";
import { Item } from "../item/items";
import { Ability } from "../ability/abilities";
import { Species } from "./species";

interface SpeciesInfo {
    name: string;
    base_stats: Stats;
    types: PokemonTypes[];
    catch_rate: number;
    exp_yield: number;
    ev_yield: Stats;
    item_common: Item;
    item_rare: Item;
    /** percent chance to be female */
    gender_ratio: number;
    egg_cycles: number;
    friendship: number;
    growth_rate: GrowthRate;
    abilities: Ability[];
    sprite: string;
}

// todo: add all species, change type to Record<Species, SpeciesInfo>
export const GSpeciesInfo: Record<number, SpeciesInfo> = {
    [Species.None]: {
        name: "???",
        base_stats: {
            hp: 0,
            attack: 0,
            defense: 0,
            special_attack: 0,
            special_defense: 0,
            speed: 0,
        },
        types: [PokemonTypes.Normal],
        catch_rate: 0,
        exp_yield: 0,
        ev_yield: {
            hp: 0,
            attack: 0,
            defense: 0,
            special_attack: 0,
            special_defense: 0,
            speed: 0,
        },
        item_common: Item.None,
        item_rare: Item.None,
        gender_ratio: 0,
        egg_cycles: 0,
        friendship: 0,
        growth_rate: GrowthRate.Fast,
        abilities: [Ability.None],
        sprite: "none",
    },
    [Species.Bulbasaur]: {
        name: "Bulbasaur",
        base_stats: {
            hp: 45,
            attack: 49,
            defense: 49,
            special_attack: 65,
            special_defense: 65,
            speed: 45,
        },
        types: [PokemonTypes.Grass, PokemonTypes.Poison],
        catch_rate: 45,
        exp_yield: 64,
        ev_yield: {
            hp: 0,
            attack: 0,
            defense: 0,
            special_attack: 1,
            special_defense: 0,
            speed: 0,
        },
        item_common: Item.Pokeball,
        item_rare: Item.Greatball,
        gender_ratio: 12.5,
        egg_cycles: 20,
        friendship: BaseFriendship,
        growth_rate: GrowthRate.MediumSlow,
        abilities: [Ability.Overgrow],
        sprite: "bulbasaur",
    },
};
