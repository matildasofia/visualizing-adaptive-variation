import type { SingleTrack, GoslingSpec, View, SingleView, Track, PartialTrack, CommonTrackDef, CommonViewDef, MultipleViews } from '@gosling-lang/gosling-schema';
/**
 * Traverse individual tracks and call the callback function to read and/or update the track definition.
 * @param spec
 * @param callback
 */
export declare function traverseTracks(spec: GoslingSpec | View | PartialTrack, callback: (t: Partial<Track>, i: number, ts: Partial<Track>[]) => void): void;
/**
 * Traverse individual tracks and views and call the callback function to read and/or update the common definition of views and tracks.
 * @param spec
 * @param callback
 */
export declare function traverseTracksAndViews(spec: GoslingSpec | View | PartialTrack, callback: (tv: CommonViewDef | CommonTrackDef) => void): void;
/**
 * Traverse individual view arrangements and call the callback function to read and/or update the arrangement information.
 * @param spec
 * @param callback
 */
export declare function traverseViewArrangements(spec: GoslingSpec, callback: (tv: MultipleViews) => void): void;
/**
 * This convert the nested track definitions into a flat array.
 * @param spec
 */
export declare function convertToFlatTracks(spec: SingleView): Track[];
/**
 * Traverse views and tracks to use parents's properties if missing.
 * @param spec
 * @param callback
 */
export declare function traverseToFixSpecDownstream(spec: GoslingSpec | SingleView, parentDef?: CommonViewDef | MultipleViews): void;
/**
 * Get an encoding template for the `higlass-vector` data type.
 * @param column
 * @param value
 */
export declare function getVectorTemplate(column: string, value: string): SingleTrack;
export declare function getMultivecTemplate(row: string, column: string, value: string, categories: string[] | undefined): SingleTrack;
/**
 * Override default visual encoding in each track for given data type.
 * @param spec
 */
export declare function overrideDataTemplates(spec: GoslingSpec): void;
//# sourceMappingURL=spec-preprocess.d.ts.map