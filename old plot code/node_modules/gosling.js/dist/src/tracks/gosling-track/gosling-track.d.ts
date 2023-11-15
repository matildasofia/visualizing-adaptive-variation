/// <reference types="src/missing-types" />
import type { SingleTrack, OverlaidTrack, Datum, ValueExtent, Range } from '@gosling-lang/gosling-schema';
import type { Tile as _Tile, TileData, TileDataBase } from '@higlass/services';
import type { CompleteThemeDeep } from '../../core/utils/theme';
export declare const PRINT_RENDERING_CYCLE = false;
interface GoslingTrackOptions {
    /**
     * Track ID specified by users
     */
    id: string;
    /**
     * Track IDs that are superposed with this track, containing the id of this track itself
     */
    siblingIds: string[];
    spec: SingleTrack | OverlaidTrack;
    theme: CompleteThemeDeep;
    showMousePosition?: boolean;
}
/** Tile data used in Gosling data fetchers */
interface TabularTileData extends TileDataBase {
    tabularData: Datum[];
}
/** Mutated type of `Tile` that includes Gosling's tile data, i.e., tabular tile data */
export interface Tile extends Omit<_Tile, 'tileData'> {
    tileData: TileData | TabularTileData;
}
/** Information about the rendered color legend */
export interface DisplayedLegend {
    domain: ValueExtent;
    range: Range;
}
declare const _default: (new (HGC: import("@higlass/types").HGC, context: import("@higlass/tracks").Context<Tile, GoslingTrackOptions>, options: GoslingTrackOptions) => import("@higlass/tracks").Track<GoslingTrackOptions>) & {
    config: import("@higlass/tracks").TrackConfig<GoslingTrackOptions>;
} & {
    config: {
        availableOptions: (keyof GoslingTrackOptions)[];
    };
};
export default _default;
//# sourceMappingURL=gosling-track.d.ts.map