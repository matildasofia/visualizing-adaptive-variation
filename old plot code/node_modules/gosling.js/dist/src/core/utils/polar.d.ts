export declare const RADIAN_GAP = 0;
/**
 * Convert a value in a single-linear axis to a radian value. Anticlockwise, starts from 12 o'clock.
 * v span from zero to `max`.
 */
export declare function valueToRadian(v: number, max: number, sa: number, ea: number, g?: number): number;
/**
 * Convert a position in a cartesian system to a polar coordinate.
 */
export declare function cartesianToPolar(x: number, max: number, r: number, cx: number, cy: number, sa: number, ea: number): {
    x: number;
    y: number;
};
export declare function positionToRadian(x: number, y: number, cx: number, cy: number): number;
/**
 * Calculate a degree in the range of [0, 360) based on two points. Anticlockwise, starts from 12 o'clock.
 */
export declare function pointsToDegree(x: number, y: number, cx: number, cy: number): number;
//# sourceMappingURL=polar.d.ts.map