// Plot specification for "number of samples"
const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 1;
const color_nr_samples_AT = "green"
const color_nr_samples_ME = "lightgreen"

var plot_spec = {
    "title": "Nr of Samples - Window size: 1000",
    "static": false,
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 495,
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
                "value": "SAMPLES",
                "sampleLength": "1000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-2" },
            "y": { "field": "SAMPLES", "type": "quantitative", "axis": "left", "domain": [0, 70], "grid": true },
            "color": { "value": color_nr_samples_AT },
            "opacity": { "value": opacity_AT },
            "size": { "value": size_val },
            "tooltip": [
                { "field": "SAMPLES", "type": "quantitative", "format": "0.2f", "alt": "Atlantic - Nr of samples:" }
            ],

        },
        // ¤¤¤¤¤¤¤¤¤ Mediterranean  ¤¤¤¤¤¤¤¤¤

        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "SAMPLES",
                "sampleLength": "1000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-2" },
            "y": { "field": "SAMPLES", "type": "quantitative", "axis": "none", "domain": [0, 70] },
            "color": { "value": color_nr_samples_ME },
            "opacity": { "value": opacity_ME },
            "size": { "value": size_val },
            "tooltip": [
                { "field": "SAMPLES", "type": "quantitative", "format": "0.2f", "alt": "Mediterranean - Nr of samples:" }
            ],

        },
    ]
};

export { plot_spec };