import type { SingleTrack, Track, DataDeep } from '@gosling-lang/gosling-schema';
/**
 * Resolve superposed tracks into multiple track specifications.
 * Some options are corrected to ensure the resolved tracks use consistent visual properties, such as the existence of the axis for genomic coordinates.
 */
export declare function resolveSuperposedTracks(track: Track): SingleTrack[];
/**
 * Spread overlaid tracks if they are assigned to different data/metadata.
 * This process is necessary since we are passing over each track to HiGlass, and if a single track is mapped to multiple datastes, HiGlass cannot handle that.
 */
export declare function spreadTracksByData(tracks: Track[]): Track[];
export declare function isIdenticalDataSpec(specs: (DataDeep | undefined)[]): boolean;
//# sourceMappingURL=overlay.d.ts.map