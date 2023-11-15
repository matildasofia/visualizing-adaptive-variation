import type { SparseTile, TileData } from '@higlass/services';
import type { Datum, SingleTrack } from '@gosling-lang/gosling-schema';
export declare const GOSLING_DATA_ROW_UID_FIELD = "gosling-data-row-uid";
/**
 * Convert genomic data formats to common tabular formats for given tile.
 */
export declare function getTabularData(spec: SingleTrack, data: TileData & {
    sparse?: Array<SparseTile>;
    shape?: [number, number];
    tileX: number;
    tileWidth: number;
    tileSize: number;
    tileY?: number;
    tileHeight?: number;
}): Datum[] | undefined;
//# sourceMappingURL=data-abstraction.d.ts.map