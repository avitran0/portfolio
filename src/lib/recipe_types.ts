export type RecipeFunction = (amount: number) => Recipe;

export type Recipe = {
    id: string;
    name: string;
    description: string;
    category: string;
    ingredients: Ingredient[];
    steps: string[];
};

export type Ingredient = {
    id: string;
    name: string;
    amount: number;
    unit: Unit;
};

export enum Unit {
    GRAM = "g",
    KILOGRAM = "kg",
    MILLILITER = "ml",
    LITER = "l",
    PIECE = "x",
}

export enum Category {
    BREAKFAST = "breakfast",
    LUNCH = "lunch",
    DINNER = "dinner",
    DESSERT = "dessert",
    SNACK = "snack",
}