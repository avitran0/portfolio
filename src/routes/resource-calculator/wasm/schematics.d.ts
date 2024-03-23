/* tslint:disable */
/* eslint-disable */
/**
* @param {BigInt64Array} data
* @param {number} bits_per_block
* @param {number} length
* @returns {Map<any, any>}
*/
export function get_litematica_blocks(data: BigInt64Array, bits_per_block: number, length: number): Map<any, any>;
/**
* @param {Int8Array} data
* @param {number} length
* @returns {Map<any, any>}
*/
export function get_schematica_blocks(data: Int8Array, length: number): Map<any, any>;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly get_litematica_blocks: (a: number, b: number, c: number, d: number) => number;
  readonly get_schematica_blocks: (a: number, b: number, c: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
