use macroquad::prelude::*;

pub struct Camera {
    pub target: Vec2,
    pub zoom: f32,
}

impl Camera {
    pub fn new() -> Self {
        Self {
            target: vec2(0.0, 0.0),
            zoom: 1.0,
        }
    }
}
