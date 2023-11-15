import type { ChannelDeep, ChannelValue, DataDeep, Datum, DomainChr, DomainInterval, DomainChrInterval, Style, Track, SingleTrack, OverlaidTrack, ChannelTypes, Channel, FieldType, Domain, FilterTransform, OneOfFilter, RangeFilter, IncludeFilter, BeddbData, MultivecData, MatrixData, VectorData, DataTrack, BigWigData, SingleView, FlatTracks, OverlaidTracks, StackedTracks, BamData, Range, TemplateTrack, MouseEventsDeep, DataTransform, DummyTrack } from './gosling.schema';
import type { TabularDataFetcher } from '@data-fetchers';
export declare const PREDEFINED_COLOR_STR_MAP: {
    [k: string]: (t: number) => string;
};
export declare function isObject(x: unknown): x is Record<PropertyKey, unknown>;
export declare function isTabularDataFetcher(dataFetcher: unknown): dataFetcher is TabularDataFetcher<unknown>;
export declare function hasDataTransform(spec: SingleTrack | OverlaidTrack, type: DataTransform['type']): boolean;
/**
 * This returns an array of color strings that can be assigned to HiGlass' option, `colorRange`
 */
export declare function getHiGlassColorRange(colorStr?: string, step?: number): string[];
export declare function IsFlatTracks(_: SingleView): _ is FlatTracks;
export declare function IsOverlaidTracks(_: SingleView): _ is OverlaidTracks;
export declare function IsStackedTracks(_: SingleView): _ is StackedTracks;
export declare function IsDataTrack(_: Track): _ is DataTrack;
export declare function IsDummyTrack(_: Track): _ is DummyTrack;
export declare function IsDataTemplate(_: Partial<Track>): boolean;
export declare function IsDataDeep(data: DataDeep | Datum[]): data is DataDeep;
export declare function IsDomainFlat(domain: Domain): domain is string[] | number[];
export declare function IsDomainChr(domain: Domain): domain is DomainChr;
export declare function IsDomainInterval(domain: Domain): domain is DomainInterval;
export declare function IsDomainChrInterval(domain: Domain): domain is DomainChrInterval;
export declare function IsTrackStyle(track: Style | undefined): track is Style;
export declare function IsSingleTrack(track: Track): track is SingleTrack;
export declare function IsOverlaidTrack(track: Partial<Track>): track is OverlaidTrack;
export declare function IsTemplateTrack(track: Partial<Track>): track is TemplateTrack;
/**
 * Is this a vertical rule, i.e., y genomic axis?
 */
export declare function IsVerticalRule(track: Track): boolean;
/**
 * Is this 2D track, i.e., two genomic axes?
 */
export declare function Is2DTrack(track: Track): boolean;
/**
 * Do we want to use HiGlass matrix track (i.e., 'heatmap') to rendering the given visualization?
 */
export declare function IsHiGlassMatrix(track: SingleTrack): false | ChannelValue | import("./gosling.schema").Y | undefined;
export declare function IsChannelValue(channel: ChannelDeep | ChannelValue | undefined | 'none'): channel is ChannelValue;
export declare function IsDataDeepTileset(_: DataDeep | undefined): _ is BeddbData | VectorData | MultivecData | BigWigData | BamData | MatrixData;
/**
 * Checks if a channel is of type ChannelDeep
 */
export declare function IsChannelDeep(channel: ChannelDeep | ChannelValue | undefined): channel is ChannelDeep;
export declare function IsOneOfFilter(_: FilterTransform): _ is OneOfFilter;
export declare function IsRangeFilter(_: FilterTransform): _ is RangeFilter;
export declare function IsIncludeFilter(_: FilterTransform): _ is IncludeFilter;
/**
 * Check whether domain is in array shape.
 */
export declare function IsDomainArray(domain?: Domain): domain is string[] | number[];
/**
 * Check whether range is in array shape.
 */
export declare function IsRangeArray(range?: Range): range is string[] | number[];
/**
 * Check whether visual marks can be stacked on top of each other.
 */
export declare function IsStackedMark(track: SingleTrack): boolean;
/**
 * Check whether visual marks in this channel are stacked on top of each other.
 * For example, `area` marks with a `quantitative` `y` channel are being stacked.
 */
export declare function IsStackedChannel(track: SingleTrack, channelKey: keyof typeof ChannelTypes): boolean;
/**
 * Retreive value using a `channel`.
 * `undefined` if unable to retreive the value.
 */
export declare function getValueUsingChannel(datum: {
    [k: string]: string | number;
}, channel: Channel): string | number | undefined;
export declare function getChannelKeysByAggregateFnc(spec: SingleTrack): ("x" | "y" | "xe" | "ye" | "x1" | "y1" | "x1e" | "y1e" | "row" | "color" | "size" | "text" | "stroke" | "strokeWidth" | "opacity")[];
/**
 * Get channel keys by a field type.
 */
export declare function getChannelKeysByType(spec: SingleTrack, t: FieldType): ("x" | "y" | "xe" | "ye" | "x1" | "y1" | "x1e" | "y1e" | "row" | "color" | "size" | "text" | "stroke" | "strokeWidth" | "opacity")[];
export declare function IsXAxis(_: Track): boolean;
export declare function IsYAxis(_: Track): boolean;
export declare function IsMouseEventsDeep(_?: boolean | MouseEventsDeep): _ is MouseEventsDeep;
//# sourceMappingURL=gosling.schema.guards.d.ts.map