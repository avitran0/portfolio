import { Unit, type IngredientFunction } from "$lib/recipe_types";

export const Butter: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "butter",
        amount,
        unit,
    };
};

export const CookingOil: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "cooking-oil",
        amount,
        unit,
    };
};

export const Eggs: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "eggs",
        amount,
        unit,
    };
};

export const LemonZest: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "lemon-zest",
        amount,
        unit,
    };
};

export const LowFatQuark: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "low-fat-quark",
        amount,
        unit,
    };
};

export const Margarine: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "margarine",
        amount,
        unit,
    };
};

export const Milk: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "milk",
        amount,
        unit,
    };
};

export const Salt: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "salt",
        amount,
        unit,
    };
};

export const Sugar: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "sugar",
        amount,
        unit,
    };
};

export const VanillaBean: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "vanilla-bean",
        amount,
        unit,
    };
};

export const VanillaPuddingPowder: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "vanilla-pudding-powder",
        amount,
        unit,
    };
};

export const VanillaSugar: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "vanilla-sugar",
        amount,
        unit,
    };
};

export const WheatFlour: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "wheat-flour",
        amount,
        unit,
    };
};

export const WholeGrainWheatFlour: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "whole-grain-wheat-flour",
        amount,
        unit,
    };
};
