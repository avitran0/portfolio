import { inflate } from "./pako.js";

/**
 * @param {ArrayBuffer} data
 * @returns {Object<string, number>}
 */
export function loadSchematic(data) {
    if (hasGzipHeader(data)) {
        data = inflate(data).buffer;
    }

    const view = new DataView(data);

    const nbt = parse(view, data);
    console.log(nbt);

    const blocks = {};

    for (const [name, region] of Object.entries(nbt["Regions"])) {
        const blockStates = {};
        for (const [key, value] of Object.entries(region["BlockStatePalette"])) {
            blockStates[key] = value["Name"];
        }
        const length = Object.keys(blockStates).length;
        // minimum of 2 bits per block
        const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(length)));

        /** @type {BigUint64Array} */
        const blockArray = region["BlockStates"];
        const blockView = new DataView(blockArray.buffer);

        const numBlocks = region["Size"]["x"] * region["Size"]["y"] * region["Size"]["z"];
        const bitMask = (1 << bitsPerBlock) - 1;

        // todo: fix blocks not being read correctly
        for (let i = 0; i < numBlocks; i++) {
            const startOffset = i * bitsPerBlock;
            const startIndex = (startOffset / 32) | 0;
            const endIndex = ((startOffset + bitsPerBlock) / 32) | 0;
            const startBit = startOffset % 32;

            let block = 0;
            if (startIndex === endIndex) {
                // simulate unsigned right shift by applying a bit mask
                block = (blockView.getInt32(startIndex) >>> startBit) & bitMask;
            } else {
                block =
                    ((blockView.getInt32(startIndex) >>> startBit) |
                        (blockView.getInt32(endIndex) << (32 - startBit))) &
                    bitMask;
            }
            blocks[blockStates[block]] = (blocks[blockStates[block]] || 0) + 1;
        }
    }
    return blocks;
}

function hasGzipHeader(data) {
    const header = new Uint8Array(data, 0, 2);
    return header[0] === 0x1f && header[1] === 0x8b;
}

const Tags = Object.freeze({
    End: 0,
    Byte: 1,
    Short: 2,
    Int: 3,
    Long: 4,
    Float: 5,
    Double: 6,
    ByteArray: 7,
    String: 8,
    List: 9,
    Compound: 10,
    IntArray: 11,
    LongArray: 12,
});

/**
 * @param {DataView} view
 * @param {ArrayBuffer} buffer
 */
function parse(view, buffer) {
    const parser = new Parser(view, buffer);
    return parser[Tags.Compound]()[""];
}

class Parser {
    offset = 0;
    /** @type {DataView} */
    view;
    /** @type {ArrayBuffer} */
    buffer;

    constructor(view, buffer) {
        this.view = view;
        this.buffer = buffer;
    }

    [Tags.Byte] = () => {
        const value = this.view.getInt8(this.offset);
        this.offset++;
        return value;
    };

    [Tags.Short] = () => {
        const value = this.view.getInt16(this.offset);
        this.offset += 2;
        return value;
    };

    [Tags.Int] = () => {
        const value = this.view.getInt32(this.offset);
        this.offset += 4;
        return value;
    };

    [Tags.Long] = () => {
        const value = this.view.getBigInt64(this.offset);
        this.offset += 8;
        return value;
    };

    [Tags.Float] = () => {
        const value = this.view.getFloat32(this.offset);
        this.offset += 4;
        return value;
    };

    [Tags.Double] = () => {
        const value = this.view.getFloat64(this.offset);
        this.offset += 8;
        return value;
    };

    [Tags.ByteArray] = () => {
        const length = this[Tags.Int]();
        const array = new Int8Array(this.buffer, this.offset, length);
        this.offset += length;
        return array;
    };

    [Tags.IntArray] = () => {
        const length = this[Tags.Int]();
        const array = new Int32Array(this.buffer, this.offset, length);
        this.offset += length * 4;
        return array;
    };

    [Tags.LongArray] = () => {
        // bigint64array does not take odd offsets
        const length = this[Tags.Int]();
        const array = new BigInt64Array(this.buffer.slice(this.offset, this.offset + length * 8));
        this.offset += length * 8;
        return array;
    };

    [Tags.String] = () => {
        const length = this[Tags.Short]();
        const string = new TextDecoder().decode(new DataView(this.buffer, this.offset, length));
        this.offset += length;
        return string;
    };

    [Tags.List] = () => {
        const type = this[Tags.Byte]();
        const length = this[Tags.Int]();
        const list = [];
        for (let i = 0; i < length; i++) {
            list.push(this[type]());
        }
        return list;
    };

    [Tags.Compound] = () => {
        const compound = {};
        while (true) {
            if (this.offset >= this.view.byteLength) {
                break;
            }
            const type = this[Tags.Byte]();
            if (type === Tags.End) {
                break;
            }
            const name = this[Tags.String]();
            compound[name] = this[type]();
        }
        return compound;
    };
}

/**
 * @param {DataView} array
 */
function printArrayAsBits(array) {
    let str = "";
    for (let i = 0; i < array.byteLength; i++) {
        const byte = array.getUint8(i);
        for (let j = 0; j < 8; j++) {
            str += (byte & (1 << j)) >> j;
        }
    }
    console.log(str);
    return str;
}
