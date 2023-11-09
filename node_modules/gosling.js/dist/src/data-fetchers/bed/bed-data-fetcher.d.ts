import type { Assembly, BedData } from '@gosling-lang/gosling-schema';
import type { TilesetInfo } from './bed-worker';
import type { BedTile, EmptyTile } from './bed-worker';
import type { TabularDataFetcher } from '../utils';
export type BedDataConfig = BedData & {
    assembly: Assembly;
};
declare class BedDataFetcher implements TabularDataFetcher<BedTile> {
    static config: {
        type: string;
    };
    dataConfig: {};
    uid: string;
    prevRequestTime: number;
    track?: any;
    private toFetch;
    private fetchTimeout?;
    private worker;
    constructor(HGC: import('@higlass/types').HGC, config: BedDataConfig);
    tilesetInfo(callback: (info: TilesetInfo) => void): Promise<void>;
    fetchTilesDebounced(receivedTiles: (tiles: Record<string, EmptyTile>) => void, tileIds: string[]): void;
    sendFetch(receivedTiles: (tiles: Record<string, EmptyTile>) => void, tileIds: string[]): Promise<void>;
    /**
     * Called by GoslingTrack. This is how the track gets data
     * @param tileIds The position of the tile
     * @returns A promise to the BedTiles
     */
    getTabularData(tileIds: string[]): Promise<BedTile[]>;
}
export default BedDataFetcher;
//# sourceMappingURL=bed-data-fetcher.d.ts.map