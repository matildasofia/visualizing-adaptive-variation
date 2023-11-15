import { HiGlassModel } from './higlass-model';
import type { Track } from '@gosling-lang/gosling-schema';
import type { BoundingBox, RelativePosition } from './bounding-box';
import type { CompleteThemeDeep } from '../core/utils/theme';
import type { GoslingToHiGlassIdMapper } from '../api/track-and-view-ids';
import type { UrlToFetchOptions } from '../core/gosling-component';
/**
 * Convert a gosling track into a HiGlass view and add it into a higlass model.
 */
export declare function goslingToHiGlass(hgModel: HiGlassModel, gosTrack: Track, bb: BoundingBox, layout: RelativePosition, theme: Required<CompleteThemeDeep>, idMapper: GoslingToHiGlassIdMapper, urlToFetchOptions?: UrlToFetchOptions): HiGlassModel;
//# sourceMappingURL=gosling-to-higlass.d.ts.map