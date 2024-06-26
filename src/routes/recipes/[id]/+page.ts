import type { PageLoad } from "./$types";
import { Recipes } from "$lib/recipes";
import { redirect } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
    const recipe = Recipes[params.id];
    if (!recipe) {
        throw redirect(308, "/404");
    }
    return {
        recipe,
    };
};
