import { track } from './track_spec.js';

var plot_spec = {
    "title": "",
    "static": false, 
    "xDomain": { "interval": [0, 200000] },
    "alignment": "overlay",
    "width": 1100,
    "height": 300,
    "assembly": "unknown",

    "style": {
        "background": "#D3D3D3", "backgroundOpacity": 0.1
    },

    "tracks": [
        track
    ]
};

export { plot_spec };