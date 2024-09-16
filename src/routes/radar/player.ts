export interface Player {
    name: string;
    health: number;
    armor: number;
    money: number;
    team: number;
    life_state: number;
    weapon: string;
    weapons: string[];
    has_defuser: boolean;
    has_helmet: boolean;
    color: number;
    position: Vec3;
    rotation: number;
    steam_id: number;
    active_player: boolean;
}

export interface Vec3 {
    x: number;
    y: number;
    z: number;
}

export interface Vec2 {
    x: number;
    y: number;
}