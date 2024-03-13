use std::collections::HashMap;

use js_sys::Map;
use wasm_bindgen::prelude::*;
//use web_sys::console::log_1;

#[wasm_bindgen]
pub fn get_litematica_blocks(data: &[i64], bits_per_block: isize, length: isize) -> Map {
    let mut blocks: HashMap<usize, usize> = HashMap::new();
    /*log_1(&JsValue::from(format!(
        "data: {:?}, bits_per_block: {}, length: {}",
        data, bits_per_block, length
    )));*/
    // data is a bit-packed i64 array (big endian), with bits_per_block bits per block
    for i in 0..length {
        let start_offset = (i * bits_per_block) as u64;
        let start_index = (start_offset >> 6) as usize;
        let end_index = (((i as u64 + 1) * bits_per_block as u64 - 1) >> 6) as usize;
        let start_bit = start_offset & 0x3F;
        let bit_mask = (1 << bits_per_block) - 1;

        // todo: fix not detecting blocks
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

        /*let info = format!(
            "i: {}, start_offset: {}, start_index: {}, end_index: {}, start_bit: {}, block: {}",
            i, start_offset, start_index, end_index, start_bit, block
        );
        log_1(&JsValue::from(info));*/
    }
    // convert hashmap to js map
    let js_map = Map::new();
    for (key, value) in blocks.iter() {
        js_map.set(&JsValue::from(*key as u32), &JsValue::from(*value as u32));
    }
    js_map
}

#[wasm_bindgen]
pub fn get_schematica_blocks(data: &[i8], length: isize) -> Map {
    let mut blocks: HashMap<usize, usize> = HashMap::new();
    // data is an i8 array of varints
    let mut i: usize = 0;
    while i < length as usize {
        let mut num = 0;
        let mut num_read = 0;
        #[allow(unused)]
        let mut value = 0;
        loop {
            value = data[i] as u8;
            num |= ((value & 0x7F) as usize) << num_read;
            num_read += 7;
            i += 1;
            if value & 0x80 == 0 {
                break;
            }
        }
        // increment block count
        *blocks.entry(num).or_insert(0) += 1;

        /*let info = format!(
            "i: {}, num: {}, num_read: {}, value: {}",
            i, num, num_read, value
        );
        log_1(&JsValue::from(info));*/
    }
    let js_map = Map::new();
    for (key, value) in blocks.iter() {
        js_map.set(&JsValue::from(*key as u32), &JsValue::from(*value as u32));
    }
    js_map
}

/*
0,
0,
0,
0,
274877906944,
0,
144115188075855872,
2097153,
281474976710656,
1099511631904,
0,
580964626808700936,
0,
1134696540930048,
0,
0,
4096,
0,
4539063172464640,
0,
137980051712,
129,
17314086912,
0,
0,
0,
22440426275328,
144124877522075648,
72624976397615233,
-4143030164889001984,
8659669024,
1162281101633257472,
4548681768519704,
290482175965396992,
2203386461829497160,
129,
53209766291316800,
67637280,
1152992427435360256,
35459266776064,
2269391999729664,
46516424256094210,
0,
-3521814770218628480,
1418,
708834322546688,
132184,
288230376151711744,
68723673858,
4398046511232,
432629238361759744,
2305843009281426917,
70970723067920,
1887043754892735584,
3488040279007643277,
171259940428582912,
1241309045611053184,
-9187343238090857600,
2305843009213698819,
8796093319632,
2553831536,
303083200512000,
1339617680850944,
8571827009880064,
4647998489580535817,
2323998145211535392,
1103840413712,
2147484040,
24769798361579524,
5018626,
1369657236674052096,
223350882378,
1099511627808,
145552804226820096,
576460752321642497,
372202000089132,
9552007794688,
9077568022003712,
5008003062661514624,
12103217840128,
145241087982698754,
6346813024464153600,
3023792242688,
145249889981304864,
1152992423107018753,
3096244088111199,
288371208129347584,
4793258269126950914,
-6826679931442398047,
288249069125970000,
145249979638743296,
567348268384283,
187695104,
7319448906104832,
4294967296,
274877906952,
-3127732281377029632,
144115188080083218,
-9222809045758934911,
2216347217280,
21711214367739904,
1162004249853663232,
1288064954825441280,
2714368890976076393,
145241087982731522,
72057594361450241,
17315212635,
2792401387831955488,
3467842672022784000,
-6186890079797605094,
137443147780,
69260574720,
-5907957409141211136,
733849588347186048,
31896373940256,
6006243328,
14295798644736,
0,
77377048578,
4040388572728000512,
36028797020016156,
-4609152475305634016,
551649656977,
77632516231529472,
289223295358468100,
8279243392852951040,
4066790526970497182,
4611967493404106780,
2558044589503256366,
4309762945,
993532126035976,
2259556994993152,
4388137231282339840,
15,
2199023255616,
5682763674213679104,
1470655776395482039,
1134765256344584,
192199786496,
27921481728,
72057594037927936,
2199023255552,
3388009841061527552,
-2296835809958672239,
576460823681595633,
147178747941,
37422719118016768,
77164051400507570,
-7053133480187658240,
2476427024172848167,
-2035556662827284335,
5336765558991679729,
1149833968,
292364993109506,
602844151566464,
5709504917720268800,
8,
0,
0,
0,
0,
1065151889408,
23068672,
234187180623265792,
7146825580544,
-5758233104372203520,
4035225266123973256,
2017612649847627626,
4634935477,
4859860912029696,
2430041051480704,
2316075674307133440,
1216021682355982562,
-3139008940277235643,
7653867566788575522,
36210433,
37967663375232,
16787283072192,
-846597885955932160,
0,
0,
0,
0,
0,
*/
