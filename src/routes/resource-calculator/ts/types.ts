export interface Item {
    id: string;
    name: string;
    recipe:
        | {
              ingredients: Ingredient[];
              result: number;
          }
        | {
              baseItem: boolean;
          };
}

export interface Ingredient {
    id: string;
    quantity: number;
}
