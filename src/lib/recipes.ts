import { Unit } from "./ingredients";
import { ingredient as ing, Ingredients as I } from "$lib/ingredients";
import { type Ingredient } from "./ingredients";

export function recipe(fn: RecipeFunction): Recipe {
    return fn(0);
}

const CheeseCake: RecipeFunction = (amount: number) => {
    return {
        id: "cheese-cake",
        category: Category.BREAKFAST,
        ingredients: {
            dough: [
                ing(I.WheatFlour, amount * 150, Unit.GRAM),
                ing(I.Sugar, amount * 60, Unit.GRAM),
                ing(I.Butter, amount * 100, Unit.GRAM),
                ing(I.VanillaSugar, amount, Unit.PACK),
                ing(I.Salt, amount, Unit.PINCH),
            ],
            filling: [
                ing(I.Milk, amount * 600, Unit.MILLILITER),
                ing(I.VanillaPuddingPowder, amount * 2, Unit.PACK),
                ing(I.LowFatQuark, amount, Unit.KILOGRAM),
                ing(I.Sugar, amount * 200, Unit.GRAM),
                ing(I.Eggs, amount * 2, Unit.PIECE),
                ing(I.VanillaBean, amount, Unit.PIECE),
                ing(I.LemonZest, amount * 2, Unit.TEASPOON),
                ing(I.CookingOil, amount * 200, Unit.MILLILITER),
            ],
        },
        steps: ["mix-all"],
        defaultAmount: 1,
    };
};

const Crepes: RecipeFunction = (amount: number) => {
    return {
        id: "crepes",
        category: Category.DESSERT,
        ingredients: {
            "": [
                ing(I.WheatFlour, amount * 25, Unit.GRAM),
                ing(I.Milk, amount * 50, Unit.MILLILITER),
                ing(I.Eggs, amount / 2.5, Unit.PIECE),
                ing(I.Margarine, amount * 5, Unit.GRAM),
            ],
        },
        steps: ["mix-all"],
        defaultAmount: 10,
    };
};

const TofuBowl: RecipeFunction = (amount: number) => {
    return {
        id: "tofu-bowl",
        category: Category.LUNCH,
        ingredients: {
            "": [
                ing(I.Tofu, amount * 200, Unit.GRAM),
                ing(I.Rice, amount * 200, Unit.GRAM),
                ing(I.Broccoli, amount * 250, Unit.GRAM),
                ing(I.Cauliflower, amount * 250, Unit.GRAM),
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
                ing(I.Zucchini, amount * 0.5, Unit.PIECE),
                ing(I.Rice, amount * 100, Unit.GRAM),
                ing(I.MincedBeef, amount * 100, Unit.GRAM),
                ing(I.Salt, amount, Unit.PINCH),
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
