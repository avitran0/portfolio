#!/bin/bash
rm ../schematic-resource-calculator/wasm/* -rf
wasm-pack build --target web --release
cp pkg/schematics.js ../schematic-resource-calculator/wasm/schematics.js
cp pkg/schematics_bg.wasm ../schematic-resource-calculator/wasm/schematics_bg.wasm