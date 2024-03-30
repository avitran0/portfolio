import { Category, type Recipe } from "$lib/recipe_types";
import * as I from "$lib/ingredients";

export function Crepes(amount: number): Recipe {
    return {
        id: "crepes",
        name: "Crepes",
        description: "Ein dünner Pfannkuchen",
        category: Category.DESSERT,
        ingredients: {
            "": [I.WeizenMehl(amount * 25), I.Milch(amount * 50), I.Eier(amount / 2.5), I.Margarine(amount * 5)],
        },
        steps: ["Alle Zutaten zusammenmischen"],
    };
}

export function CheeseCake(amount: number): Recipe {
    return {
        id: "käse_kuchen",
        name: "Käsekuchen",
        description: "Ein Kuchen aus Quark",
        category: Category.DESSERT,
        ingredients: {
            Teig: [
                I.WeizenMehl(amount * 150),
                I.Zucker(amount * 60),
                I.Butter(amount * 100),
                I.VanilleZuckerPack(amount),
                I.SalzPrise(amount),
            ],
            Füllung: [
                I.Milch(amount * 600),
                I.VanillePuddingPulverPack(amount * 2),
                I.MagerQuark(amount * 1000),
                I.Zucker(amount * 200),
                I.Eier(amount * 2),
                I.VanilleSchote(amount),
                I.ZitronenAbrieb(amount * 2),
                I.SpeiseÖl(amount * 200),
            ],
        },
        steps: ["Ofen auf 200°C (Ober/Unterhitze) oder 180°C (Umluft) vorheizen", ""],
    };
}
