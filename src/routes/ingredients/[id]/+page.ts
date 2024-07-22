import type { PageLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { Ingredients } from "$lib/recipes/ingredients";

export const load: PageLoad = async ({ params }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ingredient = Object.entries(Ingredients).find(([_, ing]) => ing === params.id);
    if (!ingredient) {
        throw redirect(308, "/404");
    }
    return {
        ingredient: ingredient[1],
    };
};
