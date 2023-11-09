import type { Assembly, GffData } from '@gosling-lang/gosling-schema';
import type { TilesetInfo, GffTile, EmptyTile } from './gff-worker';
import type { TabularDataFetcher } from '../utils';
export type GFFDataConfig = GffData & {
    assembly: Assembly;
};
declare class GffDataFetcher implements TabularDataFetcher<GffTile> {
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
    constructor(HGC: import('@higlass/types').HGC, config: GFFDataConfig);
    tilesetInfo(callback: (info: TilesetInfo) => void): Promise<void>;
    fetchTilesDebounced(receivedTiles: (tiles: Record<string, EmptyTile>) => void, tileIds: string[]): void;
    sendFetch(receivedTiles: (tiles: Record<string, EmptyTile>) => void, tileIds: string[]): Promise<void>;
    getTabularData(tileIds: string[]): Promise<GffTile[]>;
}
export default GffDataFetcher;
//# sourceMappingURL=gff-data-fetcher.d.ts.map