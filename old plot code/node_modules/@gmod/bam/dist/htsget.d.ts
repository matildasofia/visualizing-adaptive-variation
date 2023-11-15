/// <reference types="node" />
import { BaseOpts, BamOpts } from './util';
import BamFile from './bamFile';
import 'cross-fetch/polyfill';
import Chunk from './chunk';
export default class HtsgetFile extends BamFile {
    private baseUrl;
    private trackId;
    constructor(args: {
        trackId: string;
        baseUrl: string;
    });
    streamRecordsForRange(chr: string, min: number, max: number, opts?: BamOpts): AsyncGenerator<import("./record").default[], void, unknown>;
    _readChunk(params: {
        chunk: {
            buffer: Buffer;
            chunk: Chunk;
        };
        opts: BaseOpts;
    }): Promise<{
        data: Buffer;
        cpositions: null;
        dpositions: null;
        chunk: Chunk;
    }>;
    getHeader(opts?: BaseOpts): Promise<{
        tag: string;
        data: {
            tag: string;
            value: string;
        }[];
    }[]>;
}
