// Plot specification for "mapping depth normalized" 
const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 0.7;
const color_mapping_depth_AT = "purple"
const color_mapping_depth_ME = "violet"


var plot_spec = {
    "title": "Mapping Depth - Window size: 1000 (Normalized)",
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
                "value": "NORMALIZED_DEPTH",
                "sampleLength": "1000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-2" },
            "y": { "field": "NORMALIZED_DEPTH", "type": "quantitative", "axis": "left", "domain": [0, 16] },
            "color": { "value": color_mapping_depth_AT },
            "opacity": { "value": opacity_AT },
            "size": { "value": size_val },
            "tooltip": [
                { "field": "NORMALIZED_DEPTH", "type": "quantitative", "format": "0.2f", "alt": "Atlantic - Mapping depth:" }
            ],

        },
        // ¤¤¤¤¤¤¤¤¤ Mediterranean  ¤¤¤¤¤¤¤¤¤
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "NORMALIZED_DEPTH",
                "sampleLength": "1000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-2" },
            "y": { "field": "NORMALIZED_DEPTH", "type": "quantitative", "axis": "none", "domain": [0, 16], "grid": true },
            "color": { "value": color_mapping_depth_ME },
            "opacity": { "value": opacity_ME },
            "size": { "value": size_val },
            "tooltip": [
                { "field": "NORMALIZED_DEPTH", "type": "quantitative", "format": "0.2f", "alt": "Mediterranean - Mapping depth:" }
            ],

        }
    ]
};

export { plot_spec };