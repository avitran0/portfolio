export type RecipeFunction = (amount: number) => Recipe;

export type Recipe = {
    id: string;
    name: string;
    description: string;
    category: string;
    ingredients: Record<string, Ingredient[]>;
    steps: string[];
};

export type IngredientFunction = (amount: number) => Ingredient;

export type Ingredient = {
    id: string;
    name: string;
    amount: number;
    unit: Unit;
};

export enum Unit {
    GRAM = "g",
    MILLILITER = "ml",
    PACK = "pack",
    PIECE = "x",
}

export enum Category {
    BREAKFAST = "breakfast",
    LUNCH = "lunch",
    DINNER = "dinner",
    DESSERT = "dessert",
    SNACK = "snack",
}
