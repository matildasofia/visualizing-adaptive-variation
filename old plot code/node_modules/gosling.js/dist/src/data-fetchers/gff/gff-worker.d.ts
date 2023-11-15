import type { GFF3FeatureLineWithRefs } from '@gmod/gff';
import type { TilesetInfo } from '@higlass/types';
import type { ChromSizes } from '@gosling-lang/gosling-schema';
export type GffFileOptions = {
    sampleLength: number;
    attributesToFields?: {
        attribute: string;
        defaultValue: string;
    }[];
    urlFetchOptions?: RequestInit;
    indexUrlFetchOptions?: RequestInit;
};
export interface GffTile extends GFF3FeatureLineWithRefs {
    attribute?: string;
}
export interface EmptyTile {
    tilePositionId: string;
}
declare function init(uid: string, bed: {
    url: string;
    indexUrl: string;
}, chromSizes: ChromSizes, options?: Partial<GffFileOptions>): void;
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
    tile: (uid: string, z: number, x: number) => Promise<void[]>;
    getTabularData: (uid: string, tileIds: string[]) => import("threads").TransferDescriptor<any>;
};
export type WorkerApi = typeof tileFunctions;
export type { TilesetInfo };
//# sourceMappingURL=gff-worker.d.ts.map