import { Category, type Recipe } from "$lib/recipe_types";
import { Eggs, Margarine, Milk, Sugar, VanillaSugarPack, WheatFlour } from "$lib/ingredients";

export function Crepes(amount: number): Recipe {
    return {
        id: "crepes",
        name: "Crepes",
        description: "A thin pancake",
        category: Category.DESSERT,
        ingredients: {
            "": [WheatFlour(amount * 150), Sugar(amount * 60), VanillaSugarPack(amount), Margarine(amount * 5)],
        },
        steps: ["Mix all ingredients"],
    };
}

export function CheeseCake(amount: number): Recipe {
    return {
        id: "cheesecake",
        name: "Cheese Cake",
        description: "A cake made of cheese",
        category: Category.DESSERT,
        ingredients: {
            Dough: [WheatFlour(amount * 150), Milk(amount * 50), Eggs(amount / 2.5), Margarine(amount * 5)],
            Fill: [Milk(amount * 600)],
        },
        steps: ["Mix all ingredients"],
    };
}
