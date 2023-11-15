import type { GoslingSpec, TemplateTrackDef, VisUnitApiData } from '@gosling-lang/gosling-schema';
import type { HiGlassSpec } from '@gosling-lang/higlass-schema';
import { type Size } from './bounding-box';
import type { CompleteThemeDeep } from '../core/utils/theme';
import type { UrlToFetchOptions } from 'src/core/gosling-component';
import type { IdTable } from '../api/track-and-view-ids';
/** The callback function called everytime after the spec has been compiled */
export type CompileCallback = (hg: HiGlassSpec, size: Size, gs: GoslingSpec, tracksAndViews: VisUnitApiData[], idTable: IdTable) => void;
export declare function compile(spec: GoslingSpec, callback: CompileCallback, templates: TemplateTrackDef[], theme: Required<CompleteThemeDeep>, containerStatus: {
    containerSize?: {
        width: number;
        height: number;
    };
    containerParentSize?: {
        width: number;
        height: number;
    };
}, urlToFetchOptions?: UrlToFetchOptions): void;
//# sourceMappingURL=compile.d.ts.map