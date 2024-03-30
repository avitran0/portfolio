import { Unit, type IngredientFunction } from "$lib/recipe_types";

export const Butter: IngredientFunction = (amount: number) => {
    return {
        id: "butter",
        name: "Butter",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const Eier: IngredientFunction = (amount: number) => {
    return {
        id: "eier",
        name: "Eier",
        amount: amount,
        unit: Unit.PIECE,
    };
};

export const MagerQuark: IngredientFunction = (amount: number) => {
    return {
        id: "mager_quark",
        name: "Magerquark",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const Margarine: IngredientFunction = (amount: number) => {
    return {
        id: "margarine",
        name: "Margarine",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const Milch: IngredientFunction = (amount: number) => {
    return {
        id: "milch",
        name: "Milch",
        amount: amount,
        unit: Unit.MILLILITER,
    };
};

export const Salz: IngredientFunction = (amount: number) => {
    return {
        id: "salz",
        name: "Salz",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const SalzPrise: IngredientFunction = (amount: number) => {
    return {
        id: "salz_prise",
        name: "Salz",
        amount: amount,
        unit: Unit.PINCH,
    };
};

export const SpeiseÖl: IngredientFunction = (amount: number) => {
    return {
        id: "speise_öl",
        name: "Speiseöl",
        amount: amount,
        unit: Unit.MILLILITER,
    };
};

export const VanilleSchote: IngredientFunction = (amount: number) => {
    return {
        id: "vanille_schote",
        name: "Vanilleschote",
        amount: amount,
        unit: Unit.PIECE,
    };
};

export const VanillePuddingPulver: IngredientFunction = (amount: number) => {
    return {
        id: "vanille_pudding_pulver",
        name: "Vanillepuddingpulver",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const VanillePuddingPulverPack: IngredientFunction = (amount: number) => {
    return {
        id: "vanille_pudding_pulver_pack",
        name: "Vanillepuddingpulver",
        amount: amount,
        unit: Unit.PACK,
    };
};

export const VanilleZucker: IngredientFunction = (amount: number) => {
    return {
        id: "vanille_zucker",
        name: "Vanillezucker",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const VanilleZuckerPack: IngredientFunction = (amount: number) => {
    return {
        id: "vanille_zucker_pack",
        name: "Vanillezucker",
        amount: amount,
        unit: Unit.PACK,
    };
};

export const VollkornWeizenMehl: IngredientFunction = (amount: number) => {
    return {
        id: "vollkorn_weizen_mehl",
        name: "Vollkornweizenmehl",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const WeizenMehl: IngredientFunction = (amount: number) => {
    return {
        id: "weizen_mehl",
        name: "Weizenmehl",
        amount: amount,
        unit: Unit.GRAM,
    };
};

export const ZitronenAbrieb: IngredientFunction = (amount: number) => {
    return {
        id: "zitronen_abrieb",
        name: "Zitronenabrieb",
        amount: amount,
        unit: Unit.TEASPOON,
    };
};

export const Zucker: IngredientFunction = (amount: number) => {
    return {
        id: "zucker",
        name: "Zucker",
        amount: amount,
        unit: Unit.GRAM,
    };
};
