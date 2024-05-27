export function ingredient(fn: IngredientFunction): Ingredient {
    return fn(0, Unit.NONE);
}

export const Broccoli: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "broccoli",
        amount,
        unit,
    };
};

export const Butter: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "butter",
        amount,
        unit,
    };
};

export const Carrots: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "carrots",
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

export const MincedBeef: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "minced-beef",
        amount,
        unit,
    };
};

export const Rice: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "rice",
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

export const Tofu: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "tofu",
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

export const Zucchini: IngredientFunction = (amount: number, unit: Unit) => {
    return {
        id: "zucchini",
        amount,
        unit,
    };
};

export const Ingredients = {
    [ingredient(Broccoli).id]: Broccoli,
    [ingredient(Butter).id]: Butter,
    [ingredient(Carrots).id]: Carrots,
    [ingredient(CookingOil).id]: CookingOil,
    [ingredient(Eggs).id]: Eggs,
    [ingredient(LemonZest).id]: LemonZest,
    [ingredient(LowFatQuark).id]: LowFatQuark,
    [ingredient(Margarine).id]: Margarine,
    [ingredient(Milk).id]: Milk,
    [ingredient(MincedBeef).id]: MincedBeef,
    [ingredient(Rice).id]: Rice,
    [ingredient(Salt).id]: Salt,
    [ingredient(Sugar).id]: Sugar,
    [ingredient(Tofu).id]: Tofu,
    [ingredient(VanillaBean).id]: VanillaBean,
    [ingredient(VanillaPuddingPowder).id]: VanillaPuddingPowder,
    [ingredient(VanillaSugar).id]: VanillaSugar,
    [ingredient(WheatFlour).id]: WheatFlour,
    [ingredient(WholeGrainWheatFlour).id]: WholeGrainWheatFlour,
    [ingredient(Zucchini).id]: Zucchini,
};

export type IngredientFunction = (amount: number, unit: Unit) => Ingredient;

export type Ingredient = {
    id: string;
    amount: number;
    unit: Unit;
};

export enum Unit {
    GRAM = "g",
    KILOGRAM = "kg",
    MILLILITER = "ml",
    LITER = "l",
    PACK = "pack",
    PINCH = "pinch",
    TEASPOON = "tsp",
    TABLESPOON = "tbsp",
    PIECE = "x",
    NONE = "none",
}
