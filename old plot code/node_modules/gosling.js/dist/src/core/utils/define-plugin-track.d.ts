import type * as HiGlass from '@higlass/types';
export type PluginTrackFactory<Tile, Options> = (HGC: HiGlass.HGC, context: HiGlass.Context<Tile, Options>, options: Options) => HiGlass.Track<Options>;
export type TrackConfig<Options> = Omit<HiGlass.TrackConfig<Options>, 'availableOptions'>;
export declare function createPluginTrack<Tile, Options>(config: TrackConfig<Options>, factory: PluginTrackFactory<Tile, Options>): (new (HGC: HiGlass.HGC, context: HiGlass.Context<Tile, Options>, options: Options) => HiGlass.Track<Options>) & {
    config: HiGlass.TrackConfig<Options>;
} & {
    config: {
        availableOptions: (keyof Options)[];
    };
};
//# sourceMappingURL=define-plugin-track.d.ts.map