/**
 * Repeat elements in the array until its size becomes to `targetLength`.
 */
export declare function arrayRepeat<T>(base: T[], targetLength: number): T[];
/**
 * Insert item to an array and return it.
 * @param array Array to be updated.
 * @param index Index of array to insert new item.
 * @param item Item to be inserted.
 * @returns Updated array.
 */
export declare function insertItemToArray<T>(array: T[], index: number, item: T): T[];
/**
 * Insert item to an array and return it.
 * @param array Array to be updated.
 * @param index Index of array to change item.
 * @param item Item to be inserted.
 * @returns Updated array.
 */
export declare function modifyItemInArray<T>(array: T[], index: number, item: T): T[];
/**
 * Remove item from an array stored in a certain index.
 * @param array Array to be updated.
 * @param index Index of an item to be removed.
 * @returns Updated array.
 */
export declare function removeItemFromArray<T>(array: T[], index: number): T[];
/**
 * Convert 1D array into 2D array where each pair of elements are grouped.
 * @param array Array to be used.
 * @returns Updated array.
 */
export declare function flatArrayToPairArray<T>(array: T[]): [T, T][];
/**
 * Check if all elements in an array satisfy a type guard.
 * @param array Array to check
 * @param is Type guard to check each element
 */
export declare function isEvery<T, Arr extends any[]>(array: any[], is: (x: Arr[number]) => x is T): array is T[];
/** Check if all elements in an array are numbers. */
export declare function isNumberArray(array: any[]): array is number[];
/** Check if all elements in an array are strings. */
export declare function isStringArray(array: any[]): array is string[];
//# sourceMappingURL=array.d.ts.map