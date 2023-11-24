const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 1;
const color_pi_AT = "darkorange"
const color_pi_ME = "gold"

var plot_spec = {
    "title": "Visualization of Pi",
    // "description": "Atlantic population is shown in bold, Mediterranean in lighter color",
    //"subtitle": "Atlantic population (orange) and Mediterranean (gold)",

    "static": false, // enables zoom & pan for the tracks

    //"layout": { "type": "linear" },
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 500,
    "height": 200,
    "assembly": "unknown",

    // Specifying Light gray color as background color
    "style": {"background":"#D3D3D3", "backgroundOpacity":0.1},

    "tracks": [
        {
        // ¤¤¤¤¤¤¤¤¤ Atlantic  ¤¤¤¤¤¤¤¤¤    
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "at_PI",
                "sampleLength": "100000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId":"GenomicPositions" },
            "y": { "field": "at_PI", "type": "quantitative", "axis": "left" },
            "color": { "value": color_pi_AT }, // Color for Pi    
            "opacity": { "value": opacity_AT}, // Opacity for Mediterranean
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
        {"field": "at_PI", "type": "quantitative", "format":"0.2f","alt":"Atlantic - π (pi)"}
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
                "sampleLength": "100000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "none", "linkingId":"GenomicPositions" },
            "y": { "field": "me_PI", "type": "quantitative", "axis": "none" },
            "color": { "value": color_pi_ME }, // Color for Pi
            "opacity": { "value": opacity_ME}, // Opacity for Mediterranean
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
        {"field": "me_PI", "type": "quantitative", "format":"0.2f","alt":"Mediterranean - π (pi):"}
                        ],
        },
    ]
};                   
export { plot_spec };
