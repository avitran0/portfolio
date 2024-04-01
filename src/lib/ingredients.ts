import { Unit, type IngredientFunction } from "$lib/recipe_types";

export const Butter: IngredientFunction = (amount: number) => {
    return {
        id: "butter",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const Eggs: IngredientFunction = (amount: number) => {
    return {
        id: "eggs",
        amount: amount,
        unit: Unit.PIECE,
    };
};

export const LowFatQuark: IngredientFunction = (amount: number) => {
    return {
        id: "low-fat-quark",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const Margarine: IngredientFunction = (amount: number) => {
    return {
        id: "margarine",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const Milk: IngredientFunction = (amount: number) => {
    return {
        id: "milk",
        amount: amount,
        unit: Unit.MILLILITER,
    };
};

export const Salt: IngredientFunction = (amount: number) => {
    return {
        id: "salt",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const SaltPinch: IngredientFunction = (amount: number) => {
    return {
        id: "salt",
        amount: amount,
        unit: Unit.PINCH,
    };
};

export const CookingOil: IngredientFunction = (amount: number) => {
    return {
        id: "cooking-oil",
        amount: amount,
        unit: Unit.MILLILITER,
    };
};

export const VanillaBean: IngredientFunction = (amount: number) => {
    return {
        id: "vanilla-bean",
        amount: amount,
        unit: Unit.PIECE,
    };
};

export const VanillaPuddingPowder: IngredientFunction = (amount: number) => {
    return {
        id: "vanilla-pudding-powder",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const VanillaPuddingPowderPack: IngredientFunction = (amount: number) => {
    return {
        id: "vanilla-pudding-powder",
        amount: amount,
        unit: Unit.PACK,
    };
};

export const VanillaSugar: IngredientFunction = (amount: number) => {
    return {
        id: "vanilla-sugar",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const VanillaSugarPack: IngredientFunction = (amount: number) => {
    return {
        id: "vanilla-sugar-pack",
        amount: amount,
        unit: Unit.PACK,
    };
};

export const WholeGrainWheatFlour: IngredientFunction = (amount: number) => {
    return {
        id: "whole-grain-wheat-flour",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const WheatFlour: IngredientFunction = (amount: number) => {
    return {
        id: "wheat-flour",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const LemonZest: IngredientFunction = (amount: number) => {
    return {
        id: "lemon-zest",
        amount: amount,
        unit: Unit.TEASPOON,
    };
};

export const Sugar: IngredientFunction = (amount: number) => {
    return {
        id: "sugar",
        amount: amount,
        unit: Unit.GRAM,
    };
};
