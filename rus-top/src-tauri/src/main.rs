#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod info;
use info::get_all_info_system;
// mod info::info::get_all_info_system;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_all_info_system])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
