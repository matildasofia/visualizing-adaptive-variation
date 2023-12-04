import { trackTemplate } from './track.js';

var plot_spec = {
    "title": "FST",
    "static": false, // enables zoom & pan for the tracks
    "xDomain": { "interval": [0, 200000] },
    "alignment": "overlay",
    "width": 1100,
    "height": 300,
    "assembly": "unknown",

    //Specifying Light gray color as background color
    "style": {
        "background": "#D3D3D3", "backgroundOpacity": 0.1
    },

    "tracks": [
        trackTemplate
    ]
};

export { plot_spec };