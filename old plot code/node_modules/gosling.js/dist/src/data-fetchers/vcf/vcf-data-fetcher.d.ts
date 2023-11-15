import type { Assembly, VcfData } from '@gosling-lang/gosling-schema';
import type { TilesetInfo } from './vcf-worker';
import type { TabularDataFetcher } from '../utils';
import { getSubstitutionType, getMutationType } from './utils';
export type VcfRecord = {
    CHROM: string;
    POS: number;
    ID: null | string[];
    REF: string;
    ALT: null | string[];
    QUAL: null | number;
    FILTER: null | string;
    INFO: Record<string, true | (number | null)[] | string[]>;
};
export type VcfTile = Omit<VcfRecord, 'ALT' | 'INFO'> & {
    ALT: string | undefined;
    MUTTYPE: ReturnType<typeof getMutationType>;
    SUBTYPE: ReturnType<typeof getSubstitutionType>;
    INFO: string;
    ORIGINALPOS: number;
    POS: number;
    POSEND: number;
    DISTPREV: number | null;
    DISTPREVLOGE: number | null;
} & {
    [infoKey: string]: any;
};
declare class VcfDataFetcher implements TabularDataFetcher<VcfTile> {
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
    constructor(HGC: import('@higlass/types').HGC, config: VcfData & {
        assembly: Assembly;
    });
    tilesetInfo(callback: (info: TilesetInfo) => void): Promise<void>;
    fetchTilesDebounced(receivedTiles: (tiles: Record<string, VcfTile>) => void, tileIds: string[]): void;
    sendFetch(receivedTiles: (tiles: Record<string, VcfTile>) => void, tileIds: string[]): Promise<void>;
    getTabularData(tileIds: string[]): Promise<VcfTile[]>;
}
export default VcfDataFetcher;
//# sourceMappingURL=vcf-data-fetcher.d.ts.map