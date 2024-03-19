#!/bin/bash
rm ../game.wasm
echo "removed old wasm file"
cargo build --target wasm32-unknown-unknown --release
echo "built new wasm file, copying..."
cp ../../target/wasm32-unknown-unknown/release/game.wasm ../
echo "done."