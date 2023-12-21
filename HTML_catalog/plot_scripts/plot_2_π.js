// Plot specification for "Pi"
const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 1;
const color_pi_AT = "darkorange"
const color_pi_ME = "gold"

var plot_spec = {
    "title": "Pi",
    "static": false,
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 490,
    "height": 200,
    "assembly": "unknown",

    "style": { "background": "#D3D3D3", "backgroundOpacity": 0.1 },

    "tracks": [
        {
            // ¤¤¤¤¤¤¤¤¤ Atlantic  ¤¤¤¤¤¤¤¤¤    
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "at_PI",
                "sampleLength": "1000",
            },

            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-1" },
            "y": { "field": "at_PI", "type": "quantitative", "axis": "left", "domain": [0, 0.05], "grid": true },
            "color": { "value": color_pi_AT },
            "opacity": { "value": opacity_AT },
            "size": { "value": size_val },
            "tooltip": [
                { "field": "at_PI", "type": "quantitative", "format": "0.2f", "alt": "Atlantic - π (pi)" }
            ],
        },
        // ¤¤¤¤¤¤¤¤¤ Mediterranean  ¤¤¤¤¤¤¤¤¤
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "me_PI",
                "sampleLength": "1000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-1" },
            "y": { "field": "me_PI", "type": "quantitative", "axis": "none", "domain": [0, 0.05] },
            "color": { "value": color_pi_ME },
            "opacity": { "value": opacity_ME },
            "size": { "value": size_val },
            "tooltip": [
                { "field": "me_PI", "type": "quantitative", "format": "0.2f", "alt": "Mediterranean - π (pi):" }
            ],
        },
    ]
};
export { plot_spec };
