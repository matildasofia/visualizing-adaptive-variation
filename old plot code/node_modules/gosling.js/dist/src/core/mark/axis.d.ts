import type { Tile } from '@gosling-lang/gosling-track';
import type { GoslingTrackModel } from '../../tracks/gosling-track/gosling-track-model';
import type { CompleteThemeDeep } from '../utils/theme';
/**
 * Draw linear scale Y axis
 */
export declare function drawLinearYAxis(HGC: {
    libraries: {
        PIXI: typeof import('pixi.js');
    };
}, trackInfo: any, _tile: unknown, model: GoslingTrackModel, theme: Required<CompleteThemeDeep>): void;
/**
 * Draw linear scale Y axis
 */
export declare function drawCircularYAxis(HGC: import('@higlass/types').HGC, trackInfo: any, tile: Tile, model: GoslingTrackModel, theme: Required<CompleteThemeDeep>): void;
//# sourceMappingURL=axis.d.ts.map