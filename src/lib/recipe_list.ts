import type { RecipeFunction } from "$lib/recipe_types";
import Crepes from "$lib/recipes/crepes";

export const Recipes: Record<string, RecipeFunction> = {
    [Crepes(0).id]: Crepes,
};

export const DefaultAmounts: Record<string, number> = {
    [Crepes(0).id]: 10,
};

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
