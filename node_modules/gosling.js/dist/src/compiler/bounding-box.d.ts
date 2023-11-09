import type { GoslingSpec, Track } from '@gosling-lang/gosling-schema';
import type { CompleteThemeDeep } from '../core/utils/theme';
export interface Size {
    width: number;
    height: number;
}
/**
 * Position information of each track.
 */
export interface BoundingBox extends Size {
    x: number;
    y: number;
}
/**
 * Relative positioning of views, used in HiGlass view configs as `layout`.
 */
export interface RelativePosition {
    w: number;
    h: number;
    x: number;
    y: number;
}
/**
 * Track information for its arrangement.
 */
export interface TrackInfo {
    track: Track;
    boundingBox: BoundingBox;
    layout: RelativePosition;
}
/**
 * Return the size of entire visualization.
 * @param trackInfos
 */
export declare function getBoundingBox(trackInfos: TrackInfo[]): {
    width: number;
    height: number;
};
/**
 * Collect information of individual tracks including their size/position and specs
 * @param spec
 */
export declare function getRelativeTrackInfo(spec: GoslingSpec, theme: CompleteThemeDeep): {
    trackInfos: TrackInfo[];
    size: {
        width: number;
        height: number;
    };
};
export declare function getNumOfXAxes(tracks: Track[]): number;
export declare function getNumOfYAxes(tracks: Track[]): number;
//# sourceMappingURL=bounding-box.d.ts.map