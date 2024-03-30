export type RecipeFunction = (amount: number) => Recipe;

export type Recipe = {
    id: string;
    name: string;
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
    CUP = "cup", // 1 cup = 236.59 ml
    TABLESPOON = "tbsp", // 1 tablespoon = 14.79 ml
    TEASPOON = "tsp", // 1 teaspoon = 4.93 ml
    OUNCE = "oz", // 1 ounce = 28.35 g
    POUND = "lb", // 1 pound = 453.59 g
    GRAM = "g",
    KILOGRAM = "kg",
    MILLILITER = "ml",
    LITER = "l",
    PINT = "pt", // 1 pint = 473.18 ml
    QUART = "qt", // 1 quart = 946.35 ml
    GALLON = "gal", // 1 gallon = 3.785 l
    NONE = "", // for simple amounts
}

export enum Category {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
    DESSERT = "Dessert",
    SNACK = "Snack",
}
