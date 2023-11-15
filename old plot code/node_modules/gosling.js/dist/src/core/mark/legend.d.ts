import type { GoslingTrackModel } from '../../tracks/gosling-track/gosling-track-model';
import type { CompleteThemeDeep } from '../utils/theme';
type Libraries = Pick<typeof import('@higlass/libraries'), 'PIXI' | 'd3Selection' | 'd3Drag'>;
type LegendOffset = {
    offsetRight: number;
};
export declare function drawColorLegend(HGC: {
    libraries: Libraries;
}, trackInfo: any, _tile: unknown, model: GoslingTrackModel, theme: Required<CompleteThemeDeep>): void;
export declare function drawColorLegendQuantitative(HGC: {
    libraries: Libraries;
}, trackInfo: any, _tile: unknown, model: GoslingTrackModel, theme: Required<CompleteThemeDeep>, channelKey: 'color' | 'stroke', offset: LegendOffset): void;
export declare function drawColorLegendCategories(HGC: {
    libraries: Libraries;
}, track: any, _tile: unknown, tm: GoslingTrackModel, theme: Required<CompleteThemeDeep>): void;
export declare function drawRowLegend(HGC: {
    libraries: Libraries;
}, trackInfo: any, _tile: unknown, tm: GoslingTrackModel, theme: Required<CompleteThemeDeep>): void;
export {};
//# sourceMappingURL=legend.d.ts.map