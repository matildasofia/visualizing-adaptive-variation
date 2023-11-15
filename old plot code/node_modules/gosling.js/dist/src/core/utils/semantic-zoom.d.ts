import type { LogicalOperation } from '@gosling-lang/gosling-schema';
export declare function getMaxZoomLevel(): number;
/**
 * Perform logical operation between a target and a reference value.
 * If the condition is `true`, return `1`.
 */
export declare function logicalComparison(value: number, op: LogicalOperation, ref: number, transitionPadding?: number): number;
//# sourceMappingURL=semantic-zoom.d.ts.map