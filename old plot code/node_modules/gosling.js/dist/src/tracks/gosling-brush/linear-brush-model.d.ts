import type * as D3Selection from 'd3-selection';
import type { EventStyle } from '@gosling-lang/gosling-schema';
interface LinearBrushEvents {
    brush: (range: [number, number] | null, skipApiTrigger: boolean) => void;
}
/**
 * A model to manage 1D brush graphics and its data.
 */
export declare class LinearBrushModel {
    private brushSelection;
    private readonly style;
    private range;
    private data;
    private startEvent;
    private prevExtent;
    private offset;
    private size;
    private externals;
    private emitter;
    constructor(selection: D3Selection.Selection<SVGGElement, unknown, null, unknown>, hgLibraries: any, style?: EventStyle);
    getRange(): [number, number] | null;
    setSize(size: number): this;
    /**
     * Update the left and top offsets for drawing the brush.
     */
    setOffset(offsetX: number, offsetY: number): this;
    /**
     * Update brush data based on the positions of two edges.
     */
    updateRange(range: [number, number] | null): this;
    /**
     * Update the brush using the internal range value. By default,
     * This function calls a render function from gosling-track.
     */
    drawBrush(skipApiTrigger?: boolean): this;
    enable(): this;
    disable(): this;
    visible(): this;
    hidden(): this;
    clear(): this;
    remove(): this;
    /**
     * Based on the extent values, generate a JSON object for the brush.
     */
    private rangeToData;
    private onDrag;
    on<E extends keyof LinearBrushEvents>(event: E, callback: LinearBrushEvents[E]): void;
}
export {};
//# sourceMappingURL=linear-brush-model.d.ts.map