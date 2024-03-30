import { Category, type Recipe } from "$lib/recipe_types";
import { Egg, Margarine, Milk, WheatFlour } from "$lib/ingredients";

function Crepes(amount: number): Recipe {
    return {
        id: "crepes",
        name: "Crepes",
        category: Category.DESSERT,
        ingredients: [WheatFlour(amount * 25), Milk(amount * 50), Egg(amount / 2.5), Margarine(amount * 5)],
        steps: ["Mix all ingredients"],
    };
}

export default Crepes;
