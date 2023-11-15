import type { TilesetInfo } from '@higlass/types';
import type { ChromSizes } from '@gosling-lang/gosling-schema';
export type BedFileOptions = {
    sampleLength: number;
    customFields?: string[];
    urlFetchOptions?: RequestInit;
    indexUrlFetchOptions?: RequestInit;
};
/**
 * All data stored in each BED file eventually transformed and put into this
 */
export interface BedTile {
    chrom: string;
    chromStart: number;
    chromEnd: number;
    name?: string;
    score?: number;
    strand?: string;
    thickStart?: number;
    thickEnd?: number;
    itemRgb?: string;
    blockCount?: number;
    blockSizes?: number[];
    blockStarts?: number[];
    [customField: string]: string | number | number[] | undefined;
}
export interface EmptyTile {
    tilePositionId: string;
}
declare function init(uid: string, bed: {
    url: string;
    indexUrl: string;
}, chromSizes: ChromSizes, options?: Partial<BedFileOptions>): void;
declare const tileFunctions: {
    init: typeof init;
    tilesetInfo: (uid: string) => {
        tile_size: number;
        bins_per_dimension: number;
        max_zoom: number;
        max_width: number;
        min_pos: number[];
        max_pos: number[];
    };
    fetchTilesDebounced: (uid: string, tileIds: string[]) => Promise<Record<string, EmptyTile>>;
    tile: (uid: string, z: number, x: number) => Promise<BedTile[]>;
    getTabularData: (uid: string, tileIds: string[]) => import("threads").TransferDescriptor<any>;
};
export type WorkerApi = typeof tileFunctions;
export type { TilesetInfo };
//# sourceMappingURL=bed-worker.d.ts.map