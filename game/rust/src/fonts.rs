use macroquad::prelude::*;

use crate::{colors::Colors, io::asset_path};

pub struct Fonts {
    pub monogram: Font,
}

impl Fonts {
    pub const SMALL: u16 = 32;
    pub const MEDIUM: u16 = 48;
    pub const LARGE: u16 = 64;

    pub async fn load() -> Self {
        let mut fonts = Self {
            monogram: load_ttf_font(&asset_path("fonts/monogram.ttf"))
                .await
                .unwrap(),
        };
        fonts.monogram.set_filter(FilterMode::Nearest);
        fonts
    }

    pub fn draw(
        &self,
        text: &str,
        x: f32,
        y: f32,
        size: u16,
    ) {
        draw_text_ex(
            text,
            x,
            y + (size as f32 / 2.0),
            TextParams {
                font: Some(&self.monogram),
                font_size: size,
                color: Colors::TEXT,
                ..Default::default()
            },
        );
    }
}
