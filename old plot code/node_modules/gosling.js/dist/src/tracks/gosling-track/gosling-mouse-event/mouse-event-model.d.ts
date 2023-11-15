import type { Datum } from '@gosling-lang/gosling-schema';
export type MouseEventData = PointEventData | LineEventData | PolygonEventData;
interface CommonEventData {
    uid: string;
    value: Datum;
}
interface PointEventData extends CommonEventData {
    type: 'point';
    polygon: [number, number, number];
}
interface LineEventData extends CommonEventData {
    type: 'line';
    polygon: number[];
}
interface PolygonEventData extends CommonEventData {
    type: 'polygon';
    polygon: number[];
}
/**
 * A model to manage mouse events.
 */
export declare class MouseEventModel {
    private data;
    constructor();
    /**
     * Access the number of mouse events stored.
     */
    size(): number;
    /**
     * Add a new mouse event that is polygon-based.
     */
    addPolygonBasedEvent(value: Datum, polygon: number[]): void;
    /**
     * Add a new mouse event that is point-based.
     */
    addPointBasedEvent(value: Datum, pointAndRadius: [number, number, number]): void;
    /**
     * Add a new mouse event that is line-based.
     */
    addLineBasedEvent(value: Datum, path: number[]): void;
    /**
     * Make the data array empty.
     */
    clear(): void;
    /**
     * Find the first event data that is within the mouse position.
     */
    find(x: number, y: number, reverse?: boolean): MouseEventData | undefined;
    /**
     * Find all event data that is within the mouse position.
     */
    findAll(x: number, y: number, reverse?: boolean): MouseEventData[];
    /**
     * Find all event data that matches the id values in the source and return them.
     */
    getSiblings(source: MouseEventData[], idField: string): MouseEventData[];
    /**
     * Test if a mouse position is within a given object.
     */
    isMouseWithin(data: MouseEventData, x: number, y: number): boolean;
    /**
     * Find all event data that is within the range along the x-axis.
     */
    findAllWithinRange(x1: number, x2: number, reverse?: boolean): MouseEventData[];
    /**
     * Test if a given object is within an 1D range.
     */
    isWithinRange(data: MouseEventData, x1: number, x2: number): boolean;
}
export {};
//# sourceMappingURL=mouse-event-model.d.ts.map