import type { Tile } from '@gosling-lang/gosling-track';
import type { GoslingTrackModel } from '../../tracks/gosling-track/gosling-track-model';
import type { PIXIVisualProperty } from '../visual-property.schema';
export declare function drawRect(HGC: import('@higlass/types').HGC, track: any, tile: Tile, model: GoslingTrackModel): void;
export declare function rectProperty(gm: GoslingTrackModel, propertyKey: PIXIVisualProperty, datum?: {
    [k: string]: string | number;
}, additionalInfo?: {
    markHeight?: number;
    markWidth?: number;
}): any;
//# sourceMappingURL=rect.d.ts.map