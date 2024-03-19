pub const BASE_PATH: &str = "/game/assets";

pub fn asset_path(path: &str) -> String {
    format!("{}/{}", BASE_PATH, path)
}