export function ingredient(ingredient: Ingredients, amount: number = 0, unit: Unit = Unit.NONE): Ingredient {
    return { id: ingredient, amount, unit };
}

export enum Ingredients {
    Broccoli = "broccoli",
    Butter = "butter",
    Carrots = "carrots",
    Cauliflower = "cauliflower",
    CookingOil = "cooking-oil",
    Eggs = "eggs",
    LemonZest = "lemon-zest",
    LowFatQuark = "low-fat-quark",
    Margarine = "margarine",
    Milk = "milk",
    MincedBeef = "minced-beef",
    Rice = "rice",
    Salt = "salt",
    Sugar = "sugar",
    Tofu = "tofu",
    VanillaBean = "vanilla-bean",
    VanillaPuddingPowder = "vanilla-pudding-powder",
    VanillaSugar = "vanilla-sugar",
    WheatFlour = "wheat-flour",
    WholeGrainWheatFlour = "whole-grain-wheat-flour",
    Zucchini = "zucchini",
}

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
