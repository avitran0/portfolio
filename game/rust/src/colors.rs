use macroquad::prelude::*;

pub struct Colors {}

impl Colors {
    pub const CRUST_DARK: Color = color_u8!(15, 15, 20, 255);
    pub const MANTLE_DARK: Color = color_u8!(24, 24, 32, 255);
    pub const BASE: Color = color_u8!(30, 30, 40, 255);
    pub const MANTLE: Color = color_u8!(45, 45, 60, 255);
    pub const CRUST: Color = color_u8!(60, 60, 75, 255);
    pub const SURFACE: Color = color_u8!(80, 80, 100, 255);
    pub const OVERLAY: Color = color_u8!(110, 110, 140, 255);
    pub const SUBTEXT: Color = color_u8!(200, 200, 220, 255);
    pub const TEXT: Color = color_u8!(255, 255, 255, 255);
    pub const RED: Color = color_u8!(240, 100, 100, 255);
    pub const ORANGE: Color = color_u8!(240, 140, 90, 255);
    pub const YELLOW: Color = color_u8!(240, 200, 120, 255);
    pub const GREEN: Color = color_u8!(160, 240, 130, 255);
    pub const TEAL: Color = color_u8!(80, 200, 200, 255);
    pub const BLUE: Color = color_u8!(100, 150, 240, 255);
    pub const PURPLE: Color = color_u8!(180, 120, 240, 255);
}
