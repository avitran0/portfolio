export function ingredient(ingredient: Ingredients, amount: number = 0, unit: Unit = Unit.NONE): Ingredient {
    return { id: ingredient, amount, unit };
}

export enum Ingredients {
    Broccoli = "broccoli",
    Butter = "butter",
    Carrots = "carrots",
    Cauliflower = "cauliflower",
    ChickenFillet = "chicken_fillet",
    CookingOil = "cooking_oil",
    Cucumber = "cucumber",
    Eggs = "eggs",
    LemonZest = "lemon_zest",
    LowFatQuark = "low_fat_quark",
    Margarine = "margarine",
    Milk = "milk",
    MincedBeef = "minced_beef",
    Rice = "rice",
    Salt = "salt",
    SobaNoodles = "soba_noodles",
    Sugar = "sugar",
    Tofu = "tofu",
    VanillaBean = "vanilla_bean",
    VanillaPuddingPowder = "vanilla_pudding_powder",
    VanillaSugar = "vanilla_sugar",
    WheatFlour = "wheat_flour",
    WholeGrainWheatFlour = "whole_grain_wheat_flour",
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
