import type { CsvData, FilterTransform, Datum } from '@gosling-lang/gosling-schema';
import { type CommonDataConfig } from '../utils';
type CsvDataConfig = CsvData & CommonDataConfig & {
    filter?: FilterTransform[];
};
/**
 * Used in #tile() to associate tile coordinates with data
 */
interface TileInfo {
    tabularData: Datum[];
    server: null;
    tilePos: number[];
    zoomLevel: number;
    tilePositionId?: string;
}
/**
 * This is what all the tile information eventually gets organized into.
 */
export interface LoadedTiles {
    [tilePositionId: string]: TileInfo;
}
/**
 * Used in #generateTilesetInfo()
 */
interface TilesetInfo {
    tile_size: number;
    max_zoom: number;
    max_width: number;
    min_pos: number[];
    max_pos: number[];
}
export declare class CsvDataFetcherClass {
    #private;
    dataConfig: CsvDataConfig;
    tilesetInfoLoading: boolean;
    constructor(dataConfig: CsvDataConfig);
    /**
     * Called in TiledPixiTrack
     */
    tilesetInfo(callback?: (tilesetInto: TilesetInfo) => void): Promise<TilesetInfo | void> | undefined;
    /**
     * Called in TiledPixiTrack.
     * @param receivedTiles A function from TiledPixiTrack which takes in all the loaded tiles
     * @param tileIds An array of tile IDs. Ex. ['1.0', '1.1']
     */
    fetchTilesDebounced(receivedTiles: (loadedTiles: LoadedTiles) => void, tileIds: string[]): void;
}
/**
 * HiGlass data fetcher specific for Gosling which ultimately will accept any types of data other than CSV files.
 */
declare function CsvDataFetcher(_HGC: import('@higlass/types').HGC, dataConfig: CsvDataConfig, _pubsub: Record<string, any>): CsvDataFetcherClass;
declare namespace CsvDataFetcher {
    var config: {
        type: string;
    };
}
export default CsvDataFetcher;
//# sourceMappingURL=csv-data-fetcher.d.ts.map