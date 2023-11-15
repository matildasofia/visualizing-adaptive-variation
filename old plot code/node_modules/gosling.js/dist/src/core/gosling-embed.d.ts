import type { GoslingSpec } from '@gosling-lang/gosling-schema';
import type { UrlToFetchOptions } from './gosling-component';
import { type Theme } from './utils/theme';
import { type GoslingApi } from '../api/api';
import { type HiGlassComponentWrapperProps } from './higlass-component-wrapper';
export type GoslingEmbedOptions = Omit<HiGlassComponentWrapperProps['options'], 'background'> & {
    id?: string;
    className?: string;
    theme?: Theme;
    urlToFetchOptions?: UrlToFetchOptions;
};
/**
 * Embed a Gosling component to a given HTMLElement.
 * @param element
 * @param spec
 */
export declare function embed(element: HTMLElement, spec: GoslingSpec, opts?: GoslingEmbedOptions): Promise<GoslingApi>;
//# sourceMappingURL=gosling-embed.d.ts.map