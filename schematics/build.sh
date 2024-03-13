#!/bin/bash
rm ../resource-calculator/wasm/* -rf
wasm-pack build --target web --release
cp pkg/schematics.js ../resource-calculator/wasm/schematics.js
cp pkg/schematics_bg.wasm ../resource-calculator/wasm/schematics_bg.wasm