import { Unit, type IngredientFunction } from "$lib/recipe_types";

export const Butter: IngredientFunction = (amount: number) => {
    return {
        id: "butter",
        name: "Butter",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const Eggs: IngredientFunction = (amount: number) => {
    return {
        id: "eggs",
        name: "Eggs",
        amount: amount,
        unit: Unit.PIECE,
    };
};

export const LowFatQuark: IngredientFunction = (amount: number) => {
    return {
        id: "low_fat_quark",
        name: "Low Fat Quark",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const Margarine: IngredientFunction = (amount: number) => {
    return {
        id: "margarine",
        name: "Margarine",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const Milk: IngredientFunction = (amount: number) => {
    return {
        id: "milk",
        name: "Milk",
        amount: amount,
        unit: Unit.MILLILITER,
    };
};

export const Salt: IngredientFunction = (amount: number) => {
    return {
        id: "salt",
        name: "Salt",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const Sugar: IngredientFunction = (amount: number) => {
    return {
        id: "sugar",
        name: "Sugar",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const VanillaPuddingPowder: IngredientFunction = (amount: number) => {
    return {
        id: "vanilla_pudding_powder",
        name: "Vanilla Pudding Powder",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const VanillaSugar: IngredientFunction = (amount: number) => {
    return {
        id: "vanilla_sugar",
        name: "Vanilla Sugar",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const VanillaSugarPack: IngredientFunction = (amount: number) => {
    return {
        id: "vanilla_sugar_pack",
        name: "Vanilla Sugar",
        amount: amount,
        unit: Unit.PACK,
    };
};

export const WheatFlour: IngredientFunction = (amount: number) => {
    return {
        id: "wheat_flour",
        name: "Wheat Flour",
        amount: amount,
        unit: Unit.GRAM,
    };
};
