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
        steps: [
            "Ofen auf 200°C (Ober/Unterhitze) oder 180°C (Umluft) vorheizen.",
            "Mehl mit Zucker, Vanillinzucker und Salz mischen. Butter zugeben. Alles zu einem Teig verkneten und einen Boden in die Springform drücken (keinen Rand hochziehen!). Boden mehrmals mit einer Gabel einstechen und für 12-14 Min. backen.",
            "In der Zwischenzeit 100 ml der Milch mit Puddingpulver glatt rühren. Quark mit Zucker und Eiern in einer großen Schüssel verrühren. Vanilleschote längs halbieren und das Mark ausschaben.",
            "Zum Quark geben und zusammen mit Zitronenabrieb und Puddingpulver-Mischung in den Quark rühren. Zuletzt die übrige Milch (500ml) und Öl unter Rühren zugeben und alles mindestens 4 Minuten gut verrühren. Wichtig: Werden die Zutaten zu kurz verrührt, kann es sein, dass sich das Öl beim Backen absetzt.",
            "Backofentemperatur auf 160 Grad (Umluft: 140 Grad) reduzieren. Flüssige Quarkmasse in die heiße Springform gießen und für ca. 70 Min. backen. Auf einem Kuchenrost komplett auskühlen lassen. Ring entfernen und nach Belieben vor dem Servieren mit Puderzucker bestäuben.",
        ],
    };
}
