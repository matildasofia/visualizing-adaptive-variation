/// <reference types="src/missing-types" />
import { type DummyTrackStyle } from '@gosling-lang/gosling-schema';
interface DummyTrackOptions extends DummyTrackStyle {
    title: string;
    height: number;
    width: number;
}
declare const _default: (new (HGC: import("@higlass/types").HGC, context: import("@higlass/tracks").Context<never, DummyTrackOptions>, options: DummyTrackOptions) => import("@higlass/tracks").Track<DummyTrackOptions>) & {
    config: import("@higlass/tracks").TrackConfig<DummyTrackOptions>;
} & {
    config: {
        availableOptions: (keyof DummyTrackOptions)[];
    };
};
export default _default;
//# sourceMappingURL=dummy-track.d.ts.map