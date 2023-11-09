import type { CommonTrackDef, CommonViewDef, GoslingSpec, PartialTrack, View } from '@gosling-lang/gosling-schema';
/**
 * A table that maps Gosling track IDs to HiGlass view IDs.
 */
export type IdTable = Record<string, string>;
/**
 * Manage IDs of Gosling tracks and compiled HiGlass views.
 * The HiGlass view IDs correspond to the "UIDs" of HiGlass *views*,
 * which are used for calling HiGlass APIs internally in Gosling.js.
 * It is 1:1 or N:1 mapping between Gosling tracks IDs and HiGlass views IDs.
 * https://docs.higlass.io/view_config.html#uids
 */
export declare class GoslingToHiGlassIdMapper {
    #private;
    addMapping(gtId: string, hvId: string): void;
    getTable(): IdTable;
    getGoslingIds(): string[];
    getHiGlassId(gtId: string): string;
    /**
     * Get IDs of Gosling tracks that became the same HiGlass view.
     * @param HiGlassId
     * @returns
     */
    getSiblingGoslingIds(HiGlassId: string): string[];
}
/**
 * Find all unique IDs of 'views' in a Gosling spec and return them as an array.
 * @param spec
 * @returns
 */
export declare function getViewIds(spec: GoslingSpec | View | PartialTrack): string[];
/**
 * Find all unique IDs of 'tracks' in a Gosling spec and return them as an array.
 * @param spec
 * @returns
 */
export declare function getTrackIds(spec: GoslingSpec | View | PartialTrack): string[];
/**
 * Get an internal spec using an ID of a track or a view. `undefined` if unfound.
 * @param spec
 * @returns
 */
export declare function getInternalSpecById(spec: GoslingSpec | View | PartialTrack, id: string): CommonViewDef | CommonTrackDef | undefined;
//# sourceMappingURL=track-and-view-ids.d.ts.map