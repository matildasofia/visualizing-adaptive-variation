import type { VcfRecord, VcfTile } from './vcf-data-fetcher';
export declare const getMutationType: (ref: string, alt?: string) => "unknown" | "substitution" | "deletion" | "insertion";
export declare const getSubstitutionType: (ref: string, alt?: string) => "unknown" | "C>A" | "C>G" | "C>T" | "T>A" | "T>C" | "T>G";
/**
 * Convert a VCF record to a tile data
 * @param vcfRecord A row of a VCF files loaded
 * @param chrPos Cumulative start position of a chromosome
 * @param prevAbsPos Previous position of a point mutation for calculating 'distance to previous'
 */
export declare function recordToTile(vcfRecord: VcfRecord, chrPos: number, prevAbsPos?: number): VcfTile;
//# sourceMappingURL=utils.d.ts.map