import type { Tile } from '@gosling-lang/gosling-track';
import type { GoslingTrackModel } from '../../tracks/gosling-track/gosling-track-model';
import type { ChannelTypes } from '@gosling-lang/gosling-schema';
import type { CompleteThemeDeep } from '../utils/theme';
/**
 * Visual channels currently supported for visual encoding.
 */
export declare const SUPPORTED_CHANNELS: (keyof typeof ChannelTypes)[];
export declare const RESOLUTION = 4;
/**
 * Draw a track based on the track specification in a Gosling grammar.
 */
export declare function drawMark(HGC: import('@higlass/types').HGC, trackInfo: any, tile: Tile, model: GoslingTrackModel): void;
/**
 * Draw chart embellishments before rendering marks.
 */
export declare function drawPreEmbellishment(HGC: import('@higlass/types').HGC, trackInfo: any, tile: Tile, model: GoslingTrackModel, theme: Required<CompleteThemeDeep>): void;
/**
 * Draw chart embellishments after rendering marks.
 */
export declare function drawPostEmbellishment(HGC: import('@higlass/types').HGC, trackInfo: any, tile: Tile, model: GoslingTrackModel, theme: Required<CompleteThemeDeep>): void;
//# sourceMappingURL=index.d.ts.map