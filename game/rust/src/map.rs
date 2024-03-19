use macroquad::prelude::*;

use crate::textures::Textures;

pub struct Map {
    pub width: usize,
    pub height: usize,
    pub tiles: Vec<Box<dyn Tile>>,
}

impl Map {
    pub fn new(width: usize, height: usize) -> Self {
        Self {
            width,
            height,
            tiles: Vec::new(),
        }
    }

    pub fn draw(&self, x: f32, y: f32, scale: f32) {
        for tile in &self.tiles {
            let position = tile.position();
            let scale = scale * 64.0;
            tile.draw(
                x + position.x as f32 * scale,
                y + position.y as f32 * scale,
                scale,
            );
        }
    }
}

struct BasicTile {
    position: Vec2,
    texture: Texture2D,
}

impl BasicTile {
    pub fn new(x: usize, y: usize, texture: Texture2D) -> Self {
        Self {
            position: vec2(x as f32, y as f32),
            texture,
        }
    }
}

impl Tile for BasicTile {
    fn position(&self) -> Vec2 {
        self.position
    }

    fn draw(&self, x: f32, y: f32, scale: f32) {
        draw_texture_ex(
            &self.texture,
            x,
            y,
            WHITE,
            DrawTextureParams {
                dest_size: Some(vec2(scale, scale)),
                ..Default::default()
            },
        );
    }
}

pub trait Tile {
    fn position(&self) -> Vec2;
    fn draw(&self, x: f32, y: f32, scale: f32);
}

pub fn get_map(textures: &Textures) -> Map {
    let mut map = Map::new(10, 10);
    for x in 0..map.width {
        for y in 0..map.height {
            map.tiles.push(Box::new(BasicTile::new(
                x,
                y,
                textures.tile.clone(),
            )));
        }
    }
    map
}
