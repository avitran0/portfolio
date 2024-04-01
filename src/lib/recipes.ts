import { Category, type Recipe } from "$lib/recipe_types";
import * as I from "$lib/ingredients";

export function Crepes(amount: number): Recipe {
    return {
        id: "crepes",
        category: Category.DESSERT,
        ingredients: {
            "": [I.WheatFlour(amount * 25), I.Milk(amount * 50), I.Eggs(amount / 2.5), I.Margarine(amount * 5)],
        },
        steps: ["mix-all"],
    };
}

export function CheeseCake(amount: number): Recipe {
    return {
        id: "cheese_cake",
        category: Category.DESSERT,
        ingredients: {
            Teig: [
                I.WheatFlour(amount * 150),
                I.Sugar(amount * 60),
                I.Butter(amount * 100),
                I.VanillaSugarPack(amount),
                I.SaltPinch(amount),
            ],
            Füllung: [
                I.Milk(amount * 600),
                I.VanillaPuddingPowderPack(amount * 2),
                I.LowFatQuark(amount * 1000),
                I.Sugar(amount * 200),
                I.Eggs(amount * 2),
                I.VanillaBean(amount),
                I.LemonZest(amount * 2),
                I.CookingOil(amount * 200),
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
