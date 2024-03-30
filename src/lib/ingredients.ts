import { Unit, type Ingredient } from "$lib/recipe_types";

export function Egg(amount: number): Ingredient {
    return {
        id: "egg",
        name: "Egg",
        amount: amount,
        unit: Unit.NONE,
    };
}

export function Margarine(amount: number): Ingredient {
    return {
        id: "margarine",
        name: "Margarine",
        amount: amount,
        unit: Unit.GRAM,
    };
}

export function Milk(amount: number): Ingredient {
    return {
        id: "milk",
        name: "Milk",
        amount: amount,
        unit: Unit.MILLILITER,
    };
}

export function WheatFlour(amount: number): Ingredient {
    return {
        id: "wheat_flour",
        name: "Wheat Flour",
        amount: amount,
        unit: Unit.GRAM,
    };
}
