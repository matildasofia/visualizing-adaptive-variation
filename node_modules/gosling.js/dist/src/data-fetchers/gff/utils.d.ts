import type { GFF3Feature, GFF3Sequence } from '@gmod/gff';
/**
 * Type guard for GFF3Feature
 * @param entry An element from GFF.parseStringSync() return value
 * @returns True if type is GFF3Feature
 */
export declare function isGFF3Feature(entry: GFF3Feature | GFF3Sequence): entry is GFF3Feature;
/** Returns an array of the unique values sampled n times between 0 and maxValue */
export declare function makeRandomSortedArray(n: number, maxValue: number): number[];
//# sourceMappingURL=utils.d.ts.map