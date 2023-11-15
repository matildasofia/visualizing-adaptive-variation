import type * as PIXI from 'pixi.js';
import React from 'react';
import type { HiGlassSpec } from '@gosling-lang/higlass-schema';
export type HiGlassApi = {
    api: Record<string, any>;
    pixiRenderer: PIXI.Renderer;
    pixiStage: PIXI.IRenderableObject;
};
export interface HiGlassComponentWrapperProps {
    size: {
        width: number;
        height: number;
    };
    viewConfig?: HiGlassSpec;
    options: {
        padding?: number;
        margin?: number;
        border?: string;
        background?: string;
        responsiveWidth?: boolean;
        responsiveHeight?: boolean;
        alt?: string;
    };
    id?: string;
    className?: string;
}
export declare const HiGlassComponentWrapper: React.ForwardRefExoticComponent<HiGlassComponentWrapperProps & React.RefAttributes<HiGlassApi | undefined>>;
//# sourceMappingURL=higlass-component-wrapper.d.ts.map