import type { SingleTrack, ChannelDeep, OverlaidTrack, Track } from './gosling.schema';
export interface Validity {
    message: string;
    state: 'success' | 'warn' | 'error';
    details?: string;
}
export declare function validateGoslingSpec(spec: any): Validity;
/**
 *
 */
export declare function validateSpec(schema: any, spec: any, silence?: boolean): Validity;
export declare function validateTrack(track: Track): {
    valid: boolean;
    errorMessages: string[];
};
/**
 * Find an axis channel that is encoded with genomic coordinate.
 * `undefined` if not found.
 */
export declare function getGenomicChannelFromTrack(track: SingleTrack | OverlaidTrack): ChannelDeep | undefined;
/**
 * Find an axis channel that is encoded with genomic coordinate and return 'x' or 'y'.
 * `undefined` if not found.
 */
export declare function getGenomicChannelKeyFromTrack(track: SingleTrack | OverlaidTrack): 'x' | 'xe' | 'y' | 'ye' | 'x1' | 'y1' | 'x1e' | 'y1e' | undefined;
//# sourceMappingURL=validate.d.ts.map