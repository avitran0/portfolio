export type RecipeFunction = (amount: number) => Recipe;

export type Recipe = {
    id: string;
    category: Category;
    ingredients: Record<string, Ingredient[]>;
    steps: string[];
};

export type IngredientFunction = (amount: number, unit: Unit) => Ingredient;

export type Ingredient = {
    id: string;
    amount: number;
    unit: Unit;
};

export enum Unit {
    GRAM = "g",
    KILOGRAM = "kg",
    MILLILITER = "ml",
    LITER = "l",
    PACK = "pack",
    PINCH = "pinch",
    TEASPOON = "tsp",
    TABLESPOON = "tbsp",
    PIECE = "x",
}

export enum Category {
    BREAKFAST = "breakfast",
    LUNCH = "lunch",
    DINNER = "dinner",
    DESSERT = "dessert",
    SNACK = "snack",
}
