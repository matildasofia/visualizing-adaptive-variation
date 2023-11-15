import type { GoslingTrackModel } from '../../tracks/gosling-track/gosling-track-model';
import type { Assembly, Domain } from '@gosling-lang/gosling-schema';
/**
 * Get a numeric domain based on a domain specification.
 * For example, domain: { chromosome: 'chr1', interval: [1, 300,000] } => domain: [1, 300,000]
 */
export declare function getNumericDomain(domain: Domain, assembly?: Assembly): number[] | undefined;
/**
 * Use a shared scale (i.e., `domain`) across multiple gosling tracks.
 */
export declare function shareScaleAcrossTracks(trackModels: GoslingTrackModel[], force?: boolean): void;
//# sourceMappingURL=scales.d.ts.map