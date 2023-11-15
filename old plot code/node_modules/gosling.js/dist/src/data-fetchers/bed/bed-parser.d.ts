import type { BedTile } from './bed-worker';
/**
 * A class to create a BED file parser
 */
declare class BedParser {
    #private;
    /**
     * Constructor for BedParser
     * @param customFields An array of strings, where each string is the name of a custom column
     * @param n_columns A number which is the number of columns in the Bed File
     */
    constructor(opt?: {
        customFields: string[];
        n_columns: number;
    });
    /**
     * Parses a single BED file line
     * @returns An object which contains the parsed data from the line
     */
    parseLine(line: string, chromStart: number): BedTile;
    /**
     * Generates an autoSql schema for a BED file that has custom columns
     * @returns A string which is the autoSql spec
     */
    constructBedAutoSql(): string;
}
export default BedParser;
//# sourceMappingURL=bed-parser.d.ts.map