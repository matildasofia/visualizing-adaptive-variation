import type * as d3 from 'd3';
import type { SingleTrack, Datum, FilterTransform, LogTransform, ExonSplitTransform, Assembly, StrConcatTransform, StrReplaceTransform, GenomicLengthTransform, SvTypeTransform, CoverageTransform, DisplaceTransform, JsonParseTransform } from '@gosling-lang/gosling-schema';
/**
 * Apply filter
 */
export declare function filterData(filter: FilterTransform, data: Datum[]): Datum[];
/**
 * Calculate new data, like log transformation.
 */
export declare function concatString(concat: StrConcatTransform, data: Datum[]): Datum[];
export declare function replaceString(_: StrReplaceTransform, data: Datum[]): Datum[];
/**
 * Calculate new data, like log transformation.
 */
export declare function calculateData(log: LogTransform, data: Datum[]): Datum[];
/**
 * Calculate genomic length using two genomic fields.
 */
export declare function calculateGenomicLength(_: GenomicLengthTransform, data: Datum[]): Datum[];
export declare function inferSvType(_: SvTypeTransform, data: Datum[]): Datum[];
/**
 * Aggregate data rows and calculate coverage of reads.
 */
export declare function aggregateCoverage(_: CoverageTransform, data: Datum[], scale: d3.ScaleContinuousNumeric<number, number>): Datum[];
/**
 * Mark displacement transform furnctions.
 * @param t An object that contains data transformation spec.
 * @param data An array of objects that contain data.
 * @param scale A d3's linear scale that map between data-level values to screen-level values (px).
 * @returns
 */
export declare function displace(t: DisplaceTransform, data: Datum[], scale: d3.ScaleContinuousNumeric<number, number>): Datum[];
export declare function splitExon(split: ExonSplitTransform, data: Datum[], assembly?: Assembly): Datum[];
export declare function parseSubJSON(_: JsonParseTransform, data: Datum[]): Datum[];
/**
 * Experimental! Only support one category supported yet.
 */
export declare function aggregateData(spec: SingleTrack, data: Datum[]): Datum[];
//# sourceMappingURL=data-transform.d.ts.map