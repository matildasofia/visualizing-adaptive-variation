/**
 * HiGlass data fetcher specific for Gosling which ultimately will accept any types of data other than JSON values.
 */
declare function JsonDataFetcher(HGC: any, ...args: any): any;
declare namespace JsonDataFetcher {
    var config: {
        type: string;
    };
}
export default JsonDataFetcher;
//# sourceMappingURL=json-data-fetcher.d.ts.map