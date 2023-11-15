import type { Assembly, GenomicPosition } from '@gosling-lang/gosling-schema';
export interface ChromSize {
    size: {
        [chr: string]: number;
    };
    interval: {
        [chr: string]: [number, number];
    };
    total: number;
    path: string;
}
/**
 * Get relative chromosome position (e.g., `100` => `{ chromosome: 'chr1', position: 100 }`)
 * @param absPos number which is the absolute chromosome position
 * @param assembly the assembly used to calculate which chromosome position
 * @param returnWithinAssembly If true, then if the absolute position is before the first chromosome, it returns the
 * first position of the first chromosome. If the absolute position is after the last chromosome, it returns the last
 * position of the last chromosome
 * @returns the genomic position of the absPos
 */
export declare function getRelativeGenomicPosition(absPos: number, assembly?: Assembly, returnWithinAssembly?: boolean): GenomicPosition;
/**
 * Get chromosome sizes.
 * @param assembly (default: 'hg38')
 */
export declare function computeChromSizes(assembly?: Assembly): ChromSize;
/**
 * Some presets of auto-complete IDs (`autocompleteId`) to search for genes using the HiGlass server.
 */
export declare function getAutoCompleteId(assembly?: Assembly): "OHJakQICQD6gTD7skx4EWA" | "QDutvmyiSrec5nX4pA5WGQ" | "GUm5aBiLRCyz2PsBea7Yzg" | "P0PLbQMwTYGy-5uPIQid7A";
/**
 * Calculate cumulative interval of each chromosome.
 */
export declare function getChromInterval(chromSize: {
    [k: string]: number;
}): {
    [k: string]: [number, number];
};
/**
 * Calculate total size of entire chromosomes.
 */
export declare function getChromTotalSize(chromSize: {
    [k: string]: number;
}): number;
export declare function parseGenomicPosition(position: string): {
    chromosome: string;
    start?: number;
    end?: number;
};
/**
 * A class that consistently manage and convert genomics positions.
 */
export declare class GenomicPositionHelper {
    chromosome: string;
    start?: number | undefined;
    end?: number | undefined;
    constructor(chromosome: string, start?: number | undefined, end?: number | undefined);
    static fromString(str: string): GenomicPositionHelper;
    toAbsoluteCoordinates(assembly?: Assembly, padding?: number): [number, number];
}
//# sourceMappingURL=assembly.d.ts.map