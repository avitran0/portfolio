import { Unit } from "./ingredients";
import * as I from "$lib/ingredients";
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
                I.WheatFlour(amount * 25, Unit.GRAM),
                I.Milk(amount * 50, Unit.MILLILITER),
                I.Eggs(amount / 2.5, Unit.PIECE),
                I.Margarine(amount * 5, Unit.GRAM),
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
                I.WheatFlour(amount * 150, Unit.GRAM),
                I.Sugar(amount * 60, Unit.GRAM),
                I.Butter(amount * 100, Unit.GRAM),
                I.VanillaSugar(amount, Unit.PACK),
                I.Salt(amount, Unit.PINCH),
            ],
            Füllung: [
                I.Milk(amount * 600, Unit.MILLILITER),
                I.VanillaPuddingPowder(amount * 2, Unit.PACK),
                I.LowFatQuark(amount, Unit.KILOGRAM),
                I.Sugar(amount * 200, Unit.GRAM),
                I.Eggs(amount * 2, Unit.PIECE),
                I.VanillaBean(amount, Unit.PIECE),
                I.LemonZest(amount * 2, Unit.TEASPOON),
                I.CookingOil(amount * 200, Unit.MILLILITER),
            ],
        },
        steps: ["mix-all"],
        defaultAmount: 1,
    };
};

const ZucchiniRiceMincedMeat: RecipeFunction = (amount: number) => {
    return {
        id: "zucchini-rice",
        category: Category.LUNCH,
        ingredients: {
            "": [
                I.Zucchini(amount * 0.5, Unit.PIECE),
                I.Rice(amount * 100, Unit.GRAM),
                I.MincedBeef(amount * 100, Unit.GRAM),
                I.Salt(amount, Unit.PINCH),
            ],
        },
        steps: ["mix-all"],
        defaultAmount: 2,
    };
};

export const Recipes = {
    [recipe(CheeseCake).id]: CheeseCake,
    [recipe(Crepes).id]: Crepes,
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
