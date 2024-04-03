import type { PageLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { Ingredients } from "$lib/ingredients";

export const load: PageLoad = async ({ params }) => {
    const ingredient = Ingredients[params.id];
    if (!ingredient) {
        throw redirect(308, "/404");
    }
    return {
        ingredient: ingredient,
    };
};
