import type { BamData, Assembly } from '@gosling-lang/gosling-schema';
import type { TilesetInfo, Tiles, Segment, Junction, SegmentWithMate } from './bam-worker';
import type { TabularDataFetcher } from '../utils';
type InferTileType<Config extends BamData> = Config['extractJunction'] extends true ? Junction : Config['loadMates'] extends true ? SegmentWithMate : Segment;
declare class BamDataFetcher<Config extends BamData> implements TabularDataFetcher<InferTileType<Config>> {
    static config: {
        type: string;
    };
    dataConfig: {};
    uid: string;
    fetchTimeout?: ReturnType<typeof setTimeout>;
    toFetch: Set<string>;
    MAX_TILE_WIDTH: 20000;
    private worker;
    track?: {
        fetching: {
            delete(id: string): void;
        };
    };
    constructor(HGC: import('@higlass/types').HGC, config: Config & {
        assembly: Assembly;
    });
    tilesetInfo(callback: (info: TilesetInfo) => void): Promise<void>;
    fetchTilesDebounced(receivedTiles: (tiles: Tiles) => void, tileIds: string[]): void;
    sendFetch(receivedTiles: (tiles: Tiles) => void, tileIds: string[]): Promise<void>;
    getTabularData(tileIds: string[]): Promise<InferTileType<Config>[]>;
}
export default BamDataFetcher;
//# sourceMappingURL=bam-data-fetcher.d.ts.map