import { type Stats } from "./metadata";
import type { Species } from "./species";

export interface Pokemon {
    species: Species;
    level: number;
    stats: Stats;
    max_hp: number;
}
