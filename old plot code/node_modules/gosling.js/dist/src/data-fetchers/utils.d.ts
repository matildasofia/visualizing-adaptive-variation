import { RemoteFile as _RemoteFile } from 'generic-filehandle';
import type * as HiGlass from '@higlass/types';
import type { Assembly, ChromSizes, Datum } from '@gosling-lang/gosling-schema';
export type CommonDataConfig = {
    assembly: Assembly;
    x?: string;
    xe?: string;
    x1?: string;
    x1e?: string;
    urlFetchOptions?: RequestInit;
};
export declare class DataSource<File, Options> {
    file: File;
    options: Options;
    chromInfo: ExtendedChromInfo;
    tilesetInfo: ReturnType<typeof tilesetInfoFromChromInfo>;
    constructor(file: File, chromSizes: ChromSizes, options: Options);
}
/**
 * Filter data before sending to a track considering the visible genomic area in the track.
 * TODO(2022-Jul-13): Consider genomic `y` channels as well.
 */
export declare function filterUsingGenoPos(data: Datum[], [minX, maxX]: [number, number], config: Omit<CommonDataConfig, 'assembly'>): Datum[];
declare const absToChr: (absPosition: number, chromInfo: HiGlass.ChromInfo) => readonly [string, number, number, number] | null;
/**
 * Get a chromosome name for the consistentcy, e.g., `1` --> `chr1`.
 * @param chrName A chromosome name to be sanitized
 * @param assembly A genome assembly of the data
 * @param chromosomePrefix A prefix string that can be replaced to 'chr'
 * @returns
 */
export declare function sanitizeChrName(chrName: string, assembly: Assembly, chromosomePrefix?: string): string;
export type ExtendedChromInfo = HiGlass.ChromInfo & {
    absToChr(absPos: number): ReturnType<typeof absToChr> | null;
    chrToAbs(chr: [name: string, pos: number]): number | null;
};
export declare function tilesetInfoFromChromInfo(chromInfo: ExtendedChromInfo, tileSize?: number): {
    tile_size: number;
    bins_per_dimension: number;
    max_zoom: number;
    max_width: number;
    min_pos: number[];
    max_pos: number[];
};
export declare function sizesToChromInfo(sizes: [string, number][]): ExtendedChromInfo;
export declare class RemoteFile extends _RemoteFile {
    read: _RemoteFile['read'];
}
export interface TabularDataFetcher<Tile> {
    getTabularData(tileIds: string[]): Promise<Tile[]>;
    MAX_TILE_WIDTH?: number;
}
export {};
//# sourceMappingURL=utils.d.ts.map