// #![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use serde_json::json;
use sysinfo::{System, SystemExt};

#[tauri::command]
pub fn get_all_info_system() -> serde_json::Value {
    let mut sys = System::new_all();
    sys.refresh_all();
    let used_memory: u64 = sys.used_memory();
    let total_memory: u64 = sys.total_memory();
    let free_memory: u64 = sys.free_memory();
    let result = json!({
        "used_memory": used_memory,
        "total_memory": total_memory,
        "free_memory": free_memory
    });
    return result;
}
