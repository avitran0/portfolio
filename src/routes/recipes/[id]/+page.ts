import { Recipes } from "$lib/recipes/recipes";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
    const recipe = Recipes[params.id];
    if (!recipe) {
        throw redirect(308, "/404");
    }
    return {
        recipe,
    };
};
