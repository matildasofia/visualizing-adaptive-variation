const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 0.7;
const color_mapping_depth_AT = "purple"
const color_mapping_depth_ME = "violet"

var plot_spec = {
    "title": "Mapping Depth - Window size: 1000",
    //"subtitle": "Atlantic population (dark) and Mediterranean (light)",
    "static": false,
    //"layout": { "type": "linear" },
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 495,
    "height": 200,
    "assembly": "unknown",

    // Specifying Light gray color as background color
    "style": { "background": "#D3D3D3", "backgroundOpacity": 0.1 },


    "tracks": [
        {
            // ¤¤¤¤¤¤¤¤¤ Atlantic  ¤¤¤¤¤¤¤¤¤

            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "DEPTH",
                "sampleLength": "1000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-2" },
            "y": { "field": "DEPTH", "type": "quantitative", "axis": "left", "domain":[0,1700],"grid":true},
            "color": { "value": color_mapping_depth_AT }, // orange for Mapping depth
            "opacity": { "value": opacity_AT }, // Opacity for Atlantic
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
                { "field": "DEPTH", "type": "quantitative", "format": "0.2f", "alt": "Atlantic - Mapping depth:" }
            ],

        },
        // ¤¤¤¤¤¤¤¤¤ Mediterranean  ¤¤¤¤¤¤¤¤¤

        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "DEPTH",
                "sampleLength": "1000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-2"},
            "y": { "field": "DEPTH", "type": "quantitative", "axis": "none","domain":[0,1700]},
            "color": { "value": color_mapping_depth_ME }, // orange for Mapping depth
            "opacity": { "value": opacity_ME }, // Opacity for Mediterranean
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
                { "field": "DEPTH", "type": "quantitative", "format": "0.2f", "alt": "Mediterranean - Mapping depth:" }
            ],

        }
    ]
};

export { plot_spec };
// console.log(plot_spec.title);
// console.log(JSON.stringify(plot_spec.tracks, null, 2));