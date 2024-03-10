use std::collections::HashMap;

use js_sys::Map;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn get_litematica_blocks(data: &[i64], bits_per_block: isize, length: isize) -> Map {
    let mut blocks: HashMap<usize, usize> = HashMap::new();
    // data is a bit-packed i64 array (big endian), with bits_per_block bits per block
    for i in 0..length {
        let start_offset = i as u64 * bits_per_block as u64;
        let start_index = (start_offset >> 6) as usize;
        let end_index = (((i as u64 + 1) * bits_per_block as u64 - 1) >> 6) as usize;
        let start_bit = (start_offset & 0x3F) as u32;
        let bit_mask = (1 << bits_per_block) - 1;

        #[allow(unused)]
        let mut block = 0;
        if start_index == end_index {
            let bits = data[start_index].to_le_bytes();
            let num = u64::from_be_bytes(bits);
            block = num >> start_bit & bit_mask;
        } else {
            let end_offset = 64 - start_bit;
            let bits_1 = data[start_index].to_le_bytes();
            let bits_2 = data[end_index].to_le_bytes();
            let num_1 = u64::from_be_bytes(bits_1);
            let num_2 = u64::from_be_bytes(bits_2);
            block = (num_1 >> start_bit | num_2 << end_offset) & bit_mask;
        }

        // increment block count
        *blocks.entry(block as usize).or_insert(0) += 1;
    }
    // convert hashmap to js map
    let js_map = Map::new();
    for (key, value) in blocks.iter() {
        js_map.set(&JsValue::from(*key as u32), &JsValue::from(*value as u32));
    }
    js_map
}
