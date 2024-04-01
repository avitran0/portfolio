import { derived, get, writable } from "svelte/store";

import en from "./languages/en.json";
import de from "./languages/de.json";

const translations: Record<string, Record<string, unknown>> = {
    en,
    de,
};

export enum Languages {
    DE = "de",
    EN = "en",
}

export const language = writable(Languages.EN);

export function getLanguageFromNavigator(): Languages {
    if (typeof window === "undefined") {
        console.warn("No window object available, defaulting to English");
        return Languages.EN;
    }
    const lang = window.navigator.language;
    const langCode = lang.substring(0, 2);
    // check if in enum
    if (langCode in Languages) {
        return langCode as Languages;
    } else {
        return Languages.EN;
    }
}

function formatString(id: string): string {
    const lang = get(language).toLowerCase();
    // not known how many parts
    const parts = id.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let translation: any = translations[lang];
    for (const part of parts) {
        if (!translation[part]) {
            return id;
        }
        translation = translation[part];
    }
    return translation as string;
}

export const fmt = derived([language], () => formatString);
