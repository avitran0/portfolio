use macroquad::prelude::*;

pub mod camera;
pub mod colors;
pub mod fonts;
pub mod io;
pub mod map;
pub mod options;
pub mod textures;

use camera::Camera;
use colors::Colors;
use fonts::Fonts;
use map::get_map;
use options::Options;
use textures::Textures;

fn config() -> Conf {
    Conf {
        window_title: "game".to_string(),
        sample_count: 4,
        ..Default::default()
    }
}

#[macroquad::main(config)]
async fn main() {
    let options = Options::default();
    let textures = Textures::load().await;
    let fonts = Fonts::load().await;

    let map = get_map(&textures);
    let mut camera = Camera::new();

    loop {
        clear_background(Colors::BASE);

        // get input
        if is_key_down(KeyCode::W) {
            camera.target.y += 10.0;
        }
        if is_key_down(KeyCode::A) {
            camera.target.x += 10.0;
        }
        if is_key_down(KeyCode::S) {
            camera.target.y -= 10.0;
        }
        if is_key_down(KeyCode::D) {
            camera.target.x -= 10.0;
        }

        map.draw(camera.target.x, camera.target.y, camera.zoom * options.scale);

        set_default_camera();

        let screen_size = format!("{} x {}", screen_width(), screen_height());
        fonts.draw(&screen_size, 20.0, 20.0, Fonts::MEDIUM);

        let fps = format!("FPS: {}", get_fps());
        fonts.draw(&fps, 20.0, 100.0, Fonts::MEDIUM);

        next_frame().await
    }
}
