import { Unit } from "./ingredients";
import { ingredient, Ingredients as I } from "$lib/ingredients";
import { type Ingredient } from "./ingredients";

export function recipe(fn: RecipeFunction): Recipe {
    return fn(0);
}

const Crepes: RecipeFunction = (amount: number) => {
    return {
        id: "crepes",
        category: Category.DESSERT,
        ingredients: {
            "": [
                ingredient(I.WheatFlour, amount * 25, Unit.GRAM),
                ingredient(I.Milk, amount * 50, Unit.MILLILITER),
                ingredient(I.Eggs, amount / 2.5, Unit.PIECE),
                ingredient(I.Margarine, amount * 5, Unit.GRAM),
            ],
        },
        steps: ["mix-all"],
        defaultAmount: 10,
    };
};

const CheeseCake: RecipeFunction = (amount: number) => {
    return {
        id: "cheese-cake",
        category: Category.BREAKFAST,
        ingredients: {
            Teig: [
                ingredient(I.WheatFlour, amount * 150, Unit.GRAM),
                ingredient(I.Sugar, amount * 60, Unit.GRAM),
                ingredient(I.Butter, amount * 100, Unit.GRAM),
                ingredient(I.VanillaSugar, amount, Unit.PACK),
                ingredient(I.Salt, amount, Unit.PINCH),
            ],
            Füllung: [
                ingredient(I.Milk, amount * 600, Unit.MILLILITER),
                ingredient(I.VanillaPuddingPowder, amount * 2, Unit.PACK),
                ingredient(I.LowFatQuark, amount, Unit.KILOGRAM),
                ingredient(I.Sugar, amount * 200, Unit.GRAM),
                ingredient(I.Eggs, amount * 2, Unit.PIECE),
                ingredient(I.VanillaBean, amount, Unit.PIECE),
                ingredient(I.LemonZest, amount * 2, Unit.TEASPOON),
                ingredient(I.CookingOil, amount * 200, Unit.MILLILITER),
            ],
        },
        steps: ["mix-all"],
        defaultAmount: 1,
    };
};

const TofuBowl: RecipeFunction = (amount: number) => {
    return {
        id: "tofu-bowl",
        category: Category.LUNCH,
        ingredients: {
            "": [
                ingredient(I.Tofu, amount * 200, Unit.GRAM),
                ingredient(I.Rice, amount * 100, Unit.GRAM),
                ingredient(I.Broccoli, amount * 100, Unit.GRAM),
            ],
        },
        steps: ["mix-all"],
        defaultAmount: 2,
    };
};

const ZucchiniRiceMincedMeat: RecipeFunction = (amount: number) => {
    return {
        id: "zucchini-rice",
        category: Category.LUNCH,
        ingredients: {
            "": [
                ingredient(I.Zucchini, amount * 0.5, Unit.PIECE),
                ingredient(I.Rice, amount * 100, Unit.GRAM),
                ingredient(I.MincedBeef, amount * 100, Unit.GRAM),
                ingredient(I.Salt, amount, Unit.PINCH),
            ],
        },
        steps: ["mix-all"],
        defaultAmount: 2,
    };
};

export const Recipes = {
    [recipe(CheeseCake).id]: CheeseCake,
    [recipe(Crepes).id]: Crepes,
    [recipe(TofuBowl).id]: TofuBowl,
    [recipe(ZucchiniRiceMincedMeat).id]: ZucchiniRiceMincedMeat,
} as Record<string, RecipeFunction>;

export type Recipe = {
    id: string;
    category: Category;
    ingredients: Record<string, Ingredient[]>;
    steps: string[];
    defaultAmount: number;
};

export type RecipeFunction = (amount: number) => Recipe;

enum Category {
    BREAKFAST = "breakfast",
    LUNCH = "lunch",
    DINNER = "dinner",
    DESSERT = "dessert",
    SNACK = "snack",
}

export function testDataIntegrity() {
    let successful = 0;
    let unsuccessful = 0;
    for (const [id, recipe] of Object.entries(Recipes)) {
        let success = true;
        if (id !== recipe(0).id) {
            console.warn(`Recipe ID mismatch: ${id} !== ${recipe(0).id}`);
            success = false;
        }
        if (success) {
            successful++;
        } else {
            unsuccessful++;
        }
    }
    console.info(`successfully loaded ${successful} recipes, ${unsuccessful} failed`);
}
