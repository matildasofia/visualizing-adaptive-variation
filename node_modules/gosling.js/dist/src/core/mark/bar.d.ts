import type { Tile } from '@gosling-lang/gosling-track';
import type { GoslingTrackModel } from '../../tracks/gosling-track/gosling-track-model';
import type { PIXIVisualProperty } from '../visual-property.schema';
export declare function drawBar(track: any, tile: Tile, model: GoslingTrackModel): void;
export declare function barProperty(gm: GoslingTrackModel, propertyKey: PIXIVisualProperty, datum?: {
    [k: string]: string | number;
}, additionalInfo?: {
    tileUnitWidth?: number;
    markWidth?: number;
}): any;
//# sourceMappingURL=bar.d.ts.map