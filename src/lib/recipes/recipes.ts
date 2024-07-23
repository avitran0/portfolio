import { Ingredients as I, ingredient as ing } from "$lib/recipes/ingredients";
import { Unit, type Ingredient } from "./ingredients";

export function recipe(fn: RecipeFunction): Recipe {
    return fn(0);
}

const CheeseCake: RecipeFunction = (amount: number) => {
    return {
        id: "cheese_cake",
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
        steps: ["mix_all"],
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
                ing(I.Butter, amount * 5, Unit.GRAM),
            ],
        },
        steps: ["whisk_eggs", "heat_butter", "mix_all"],
        defaultAmount: 10,
    };
};

const SobaChicken: RecipeFunction = (amount: number) => {
    return {
        id: "soba_chicken",
        category: Category.LUNCH,
        ingredients: {
            "": [
                ing(I.ChickenFillet, amount * 125, Unit.GRAM),
                ing(I.SobaNoodles, amount * 25, Unit.GRAM),
                ing(I.Cucumber, amount / 4, Unit.PIECE)
            ]
        },
        steps: ["mix_all"],
        defaultAmount: 4,
    }
}

const TofuBowl: RecipeFunction = (amount: number) => {
    return {
        id: "tofu_bowl",
        category: Category.LUNCH,
        ingredients: {
            "": [
                ing(I.Tofu, amount * 200, Unit.GRAM),
                ing(I.Rice, amount * 200, Unit.GRAM),
                ing(I.Broccoli, amount * 250, Unit.GRAM),
                ing(I.Cauliflower, amount * 250, Unit.GRAM),
            ],
        },
        steps: ["mix_all"],
        defaultAmount: 2,
    };
};

const ZucchiniRiceMincedMeat: RecipeFunction = (amount: number) => {
    return {
        id: "zucchini_rice",
        category: Category.LUNCH,
        ingredients: {
            "": [
                ing(I.Zucchini, amount * 0.5, Unit.PIECE),
                ing(I.Rice, amount * 100, Unit.GRAM),
                ing(I.MincedBeef, amount * 100, Unit.GRAM),
                ing(I.Salt, amount, Unit.PINCH),
            ],
        },
        steps: ["mix_all"],
        defaultAmount: 2,
    };
};

export const Recipes = {
    [recipe(CheeseCake).id]: CheeseCake,
    [recipe(Crepes).id]: Crepes,
    [recipe(SobaChicken).id]: SobaChicken,
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
