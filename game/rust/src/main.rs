use macroquad::prelude::*;

pub mod colors;

use colors::Colors;

fn config() -> Conf {
    Conf {
        window_title: "game".to_string(),
        sample_count: 4,
        ..Default::default()
    }
}

#[macroquad::main(config)]
async fn main() {
    let texture = load_texture("/assets/textures/dirt.png").await.unwrap();

    loop {
        clear_background(Colors::BASE);

        draw_texture(&texture, 0.0, 0.0, Colors::TEXT);
        draw_line(40.0, 40.0, 100.0, 200.0, 15.0, Colors::BLUE);
        draw_rectangle(
            screen_width() / 2.0 - 60.0,
            100.0,
            120.0,
            60.0,
            Colors::GREEN,
        );
        draw_circle(
            screen_width() - 30.0,
            screen_height() - 30.0,
            15.0,
            Colors::YELLOW,
        );

        let screen_size = format!("{} x {}", screen_width(), screen_height());
        draw_text(&screen_size, 20.0, 20.0, 20.0, Colors::TEXT);

        next_frame().await
    }
}
