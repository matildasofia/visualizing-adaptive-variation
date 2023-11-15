import type { GoslingSpec, TrackApiData, View } from '@gosling-lang/gosling-schema';
/**
 * This collect information of views by referring to the track information.
 * The information includes the bounding box of tracks.
 * @param spec
 * @param tracks
 * @returns
 */
export declare function getViewApiData(spec: GoslingSpec, tracks: TrackApiData[]): {
    id: string;
    spec: View;
    shape: {
        width: number;
        height: number;
        x: number;
        y: number;
        xe: number;
        ye: number;
    };
}[];
//# sourceMappingURL=api-data.d.ts.map