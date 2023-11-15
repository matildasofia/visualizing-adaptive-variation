import type { BamRecord } from '@gmod/bam';
import type { TilesetInfo } from '@higlass/types';
import type { ChromSizes } from '@gosling-lang/gosling-schema';
interface BamFileOptions {
    loadMates: boolean;
    maxInsertSize: number;
    extractJunction: boolean;
    junctionMinCoverage: number;
    urlFetchOptions?: RequestInit;
    indexUrlFetchOptions?: RequestInit;
}
type Substitution = {
    pos: number;
    length: number;
    type: 'X' | 'I' | 'D' | 'N' | '=' | 'M' | 'S' | 'H';
    variant?: string;
};
export type Segment = {
    id: string;
    name: string;
    start: number;
    end: number;
    md: string;
    chrName: string;
    chrOffset: number;
    cigar: string;
    mapq: string;
    strand: '+' | '-';
};
declare const bamRecordToJson: (bamRecord: BamRecord, chrName: string, chrOffset: number) => Segment & {
    substitutions: Substitution[];
};
type JsonBamRecord = ReturnType<typeof bamRecordToJson>;
/**
 * Not like other data fetchers, the Bam Data Fetcher fetches all the tiles at once.
 * @param uid
 * @param tileIds
 * @returns
 */
declare const fetchTilesDebounced: (uid: string, tileIds: string[]) => Promise<Record<string, (Segment & {
    substitutions: Substitution[];
})[] & {
    tilePositionId: string;
}>>;
export type SegmentWithMate = Segment & {
    mateIds: string[];
    foundMate: boolean;
    insertSize: number;
    largeInsertSize: boolean;
    svType: string;
    numMates: number;
};
export type Junction = {
    start: number;
    end: number;
    score: number;
};
declare const tileFunctions: {
    init: (uid: string, bam: {
        url: string;
        indexUrl: string;
    }, chromSizes: ChromSizes, options?: Partial<BamFileOptions>) => Promise<void>;
    tilesetInfo: (uid: string) => {
        tile_size: number;
        bins_per_dimension: number;
        max_zoom: number;
        max_width: number;
        min_pos: number[];
        max_pos: number[];
    };
    fetchTilesDebounced: (uid: string, tileIds: string[]) => Promise<Record<string, (Segment & {
        substitutions: Substitution[];
    })[] & {
        tilePositionId: string;
    }>>;
    tile: (uid: string, z: number, x: number) => Promise<JsonBamRecord[]>;
    getTabularData: (uid: string, tileIds: string[]) => import("threads").TransferDescriptor<any>;
};
export type WorkerApi = typeof tileFunctions;
export type { TilesetInfo };
export type Tiles = Awaited<ReturnType<typeof fetchTilesDebounced>>;
//# sourceMappingURL=bam-worker.d.ts.map