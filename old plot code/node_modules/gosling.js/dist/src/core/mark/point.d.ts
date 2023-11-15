import type * as PIXI from 'pixi.js';
import type { GoslingTrackModel } from '../../tracks/gosling-track/gosling-track-model';
import type { PIXIVisualProperty } from '../visual-property.schema';
export declare function drawPoint(track: any, g: PIXI.Graphics, model: GoslingTrackModel): void;
export declare function pointProperty(model: GoslingTrackModel, propertyKey: PIXIVisualProperty, datum?: {
    [k: string]: string | number;
}): any;
//# sourceMappingURL=point.d.ts.map