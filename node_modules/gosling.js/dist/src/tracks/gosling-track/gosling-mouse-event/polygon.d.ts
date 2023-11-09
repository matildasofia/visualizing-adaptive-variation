/**
 * @param point Tuple of the form `[x,y]` to be tested.
 * @param center Tuple of the form `[x,y]` that correspond to the center of an arc.
 * @param radius The inner and outer radius of the arc.
 * @param angle The start and end angle the arc in the range of [0, 360]. Anticlockwise, starting from 12 o'clock.
 * @returns If `true` point lies within the arc, i.e., the slice of the donut.
 */
export declare const isPointInsideDonutSlice: (point: [number, number], center: [number, number], radius: [number, number], angle: [number, number]) => boolean;
/**
 * @param point Tuple of the form `[x,y]` to be tested.
 * @param point2 Tuple of the form `[x,y]` to be tested.
 * @param radius A radius of the second point.
 * @returns If `true` point lies within the point.
 */
export declare const isPointNearPoint: (point: [number, number], point2: number[], radius?: number) => boolean;
/**
 * @param range Tuple of the form `[x1,x2]` to be tested.
 * @param point A value x to be tested.
 * @returns If `true` point lies within the point.
 */
export declare const isPointInsideRange: (range: [number, number], x: number) => boolean;
/**
 * @param range Tuple of the form `[x1,x2]` to be tested.
 * @param x A value x to be tested.
 * @param radius A radius of the point.
 * @returns If `true` point lies within the point.
 */
export declare const isCircleWithinRange: (range: [number, number], x: number, radius?: number) => boolean;
/**
 * @param point Tuple of the form `[x1,x2]` to be tested.
 * @param path 1D list of vertices defining the line segments.
 * @return If `true` point lies within the polygon.
 */
export declare const isAllPointsWithinRange: (range: [number, number], path: number[]) => boolean;
/**
 * From: https://www.geeksforgeeks.org/minimum-distance-from-a-point-to-the-line-segment-using-vectors/
 * @param point Tuple of the form `[x,y]` to be tested.
 * @param path 1D list of vertices defining the line segments.
 * @param dist A threshold distance for test.
 * @return If `true` point lies within the polygon.
 */
export declare const isPointNearLine: (point: [number, number], path: number[], dist?: number) => boolean;
/**
 * Adopted from
 * https://github.com/flekschas/utils
 * https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html
 * @param point Tuple of the form `[x,y]` to be tested.
 * @param polygon 1D list of vertices defining the polygon.
 * @return If `true` point lies within the polygon.
 */
export declare const isPointInPolygon: (point: [number, number], polygon: number[]) => boolean;
//# sourceMappingURL=polygon.d.ts.map