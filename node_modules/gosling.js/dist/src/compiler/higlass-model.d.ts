import type { HiGlassSpec, Track } from '@gosling-lang/higlass-schema';
import type { Assembly, AxisPosition, Domain, DummyTrack, Orientation, ZoomLimits } from '@gosling-lang/gosling-schema';
import type { RelativePosition } from './bounding-box';
import type { CompleteThemeDeep } from '../core/utils/theme';
export declare const HIGLASS_AXIS_SIZE = 30;
/**
 * Model for managing the HiGlass view config.
 * We are currently only using a center track with additional tracks for axes in a single view.
 */
export declare class HiGlassModel {
    private assembly?;
    private orientation?;
    private hg;
    constructor();
    spec(): Readonly<HiGlassSpec>;
    setViewOrientation(orientation?: Orientation): this;
    addDefaultView(uid: string, assembly?: Assembly): this;
    setAssembly(assembly?: Assembly): this;
    getAssembly(): Assembly | undefined;
    setTextTrack(width: number, height: number, text: string, textColor?: string, fontSize?: number, fontWeight?: string, align?: string, backgroundColor?: string, fontFamily?: string): this;
    /**
     * Add a dummy track to the last view
     * @param track
     */
    setDummyTrack(track: DummyTrack): this;
    addBrush(layout: 'circular' | 'linear', viewId: string, theme: Required<CompleteThemeDeep>, fromViewUid?: string, style?: {
        color?: string;
        stroke?: string;
        opacity?: string;
        strokeWidth?: number;
        startAngle?: number;
        endAngle?: number;
        innerRadius?: number;
        outerRadius?: number;
    }): this | undefined;
    getLastView(): import("@gosling-lang/higlass-schema").View;
    getMainTrackPosition(): "left" | "center";
    /**
     * Get the last view that renders any visualization, so skiping empty tracks.
     */
    getLastVisView(): import("@gosling-lang/higlass-schema").View;
    getView(viewId: string): import("@gosling-lang/higlass-schema").View | undefined;
    validateSpec(silence?: boolean): boolean;
    setDomain(xDomain: Domain | undefined, yDomain: Domain | undefined): this;
    /**
     * This is a hacky function that adjust x domain to properly show vertical tracks.
     *
     * In HiGlass, the range of vertical tracks is affected by a center track. For example, if a center track is small, the vertical tracks become small as well.
     * Currently, the actual size of center track for vertical gosling tracks is `1px`. So, we re-scale the x domain so that gosling's vertical tracks properly use the entire height of a view.
     * @param orientation
     * @param width
     * @returns
     */
    adjustDomain(orientation: Orientation | undefined, width: number, height: number): this;
    /**
     * Allow a zoom interaction?
     */
    setZoomFixed(zoomFixed: boolean): this;
    /**
     * Set limits of zoom levels in base pairs.
     */
    setZoomLimits(zoomLimits: ZoomLimits): this;
    setLayout(layout: RelativePosition): this;
    private setEditable;
    private setChromInfoPath;
    addTrackSourceServers(trackSourceServers: string | undefined): this;
    setMainTrack(track: Track): this;
    addTrackToCombined(track: Track): this;
    setAxisTrack(position: Exclude<AxisPosition, 'none'>, type: "regular" | "narrow" | "narrower" | undefined, options: {
        id?: string;
        layout?: 'circular' | 'linear';
        innerRadius?: number;
        outerRadius?: number;
        width?: number;
        height?: number;
        startAngle?: number;
        endAngle?: number;
        theme: Required<CompleteThemeDeep>;
    }): this;
    setExampleHiglassViewConfig(): void;
}
//# sourceMappingURL=higlass-model.d.ts.map