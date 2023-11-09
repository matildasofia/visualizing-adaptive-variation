import type { TilesetInfo } from '@higlass/types';
import type { ChromSizes } from '@gosling-lang/gosling-schema';
import type { VcfTile } from './vcf-data-fetcher';
type VcfFileOptions = {
    sampleLength: number;
    urlFetchOptions?: RequestInit;
    indexUrlFetchOptions?: RequestInit;
};
declare function init(uid: string, vcf: {
    url: string;
    indexUrl: string;
}, chromSizes: ChromSizes, options?: Partial<VcfFileOptions>): void;
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
    fetchTilesDebounced: (uid: string, tileIds: string[]) => Promise<Record<string, VcfTile>>;
    tile: (uid: string, z: number, x: number) => Promise<VcfTile[]>;
    getTabularData: (uid: string, tileIds: string[]) => import("threads").TransferDescriptor<any>;
};
export type WorkerApi = typeof tileFunctions;
export type { TilesetInfo };
//# sourceMappingURL=vcf-worker.d.ts.map