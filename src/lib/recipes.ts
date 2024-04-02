import { Category, Unit, type Recipe, type RecipeFunction } from "$lib/recipe_types";
import * as I from "$lib/ingredients";

export function recipe(fn: RecipeFunction): Recipe {
    return fn(0);
}

export function Crepes(amount: number): Recipe {
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
    };
}

export function CheeseCake(amount: number): Recipe {
    return {
        id: "cheese-cake",
        category: Category.DESSERT,
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
    };
}
