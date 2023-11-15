import { BigWig } from '@gmod/bbi';
import type { Assembly, BigWigData } from '@gosling-lang/gosling-schema';
import { type CommonDataConfig } from '../utils';
import type { ChromInfo, TilesetInfo } from '@higlass/types';
type BigWigDataConfig = BigWigData & CommonDataConfig;
type Tile = {
    tilePos: [number];
    tileId: string;
    zoomLevel: number;
    min_value: number;
    max_value: number;
    dense: (number | null)[];
    denseDataExtrema: InstanceType<import('@higlass/types').HGC['utils']['DenseDataExtrema1D']>;
    minNonZero: number;
    maxNonZero: number;
};
type BigWigHeader = {
    zoomLevels: {
        reductionLevel: number;
    }[];
};
declare function BigWigDataFetcher(HGC: import('@higlass/types').HGC, dataConfig: BigWigDataConfig): {
    dataConfig: typeof dataConfig;
    bwFileHeader: BigWigHeader | null;
    bwFile: BigWig | null;
    TILE_SIZE: number;
    errorTxt: string;
    dataPromises: Promise<unknown>[];
    chromSizes: ChromInfo<string> & {
        chrToAbs: (name: string, pos: number) => number;
    };
    assembly?: Assembly | undefined;
    tilesetInfoLoading?: boolean | undefined;
    loadBBI(dataConfig: BigWigDataConfig): Promise<void | null>;
    tilesetInfo(callback?: ((info: TilesetInfo | {
        error: string;
    }) => void) | undefined): Promise<{
        tile_size: number;
        max_zoom: number;
        max_width: number;
        min_pos: number[];
        max_pos: number[];
    } | null>;
    fetchTilesDebounced(receivedTiles: (tiles: Record<string, Tile>) => void, tileIds: string[]): Record<string, Tile & {
        tilePositionId?: string | undefined;
    }>;
    tile(z: number, x: number): Promise<Tile>;
    determineScale(minX: number, maxX: number): number;
};
declare namespace BigWigDataFetcher {
    var config: {
        type: string;
    };
}
export default BigWigDataFetcher;
//# sourceMappingURL=bigwig-data-fetcher.d.ts.map