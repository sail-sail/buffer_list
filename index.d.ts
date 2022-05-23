// deno-lint-ignore-file no-explicit-any
import { BufferList } from "./BufferList.d.ts";
import type { Duplex } from "https://deno.land/std@0.140.0/node/stream.ts";
import type { Buffer } from "https://deno.land/std@0.140.0/node/buffer.ts"

interface BufferListStream extends Duplex, BufferList {}

declare class BufferListStream {
    constructor(callbackOrData?: ((err: Error, buffer: Buffer) => void) | Buffer | Buffer[] | BufferList | BufferList[] | string);
    static isBufferList: (other: any) => boolean;
    duplicate: () => BufferListStream;
    shallowSlice(start?: number, end?: number): BufferListStream;
}

export { BufferListStream, BufferList }