use macroquad::prelude::*;

use crate::io::asset_path;

pub struct Textures {
    pub tile: Texture2D,
}

impl Textures {
    pub async fn load() -> Self {
        let textures = Self {
            tile: load_texture(&asset_path("textures/tile.png"))
                .await
                .unwrap(),
        };
        textures.tile.set_filter(FilterMode::Nearest);
        textures
    }
}
