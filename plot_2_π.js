const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 0.5;
const color_pi_AT = "orange"
const color_pi_ME = "orange"

var plot_spec = {
    "title": "Diversity plot - Visualization of Pi (orange)",
    // "description": "Atlantic population is shown in bold, Mediterranean in lighter color",
    "subtitle": "Atlantic population (bold) and Mediterranean (light)",

    "static": false,
    //"layout": { "type": "linear" },
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 1000,
    "height": 300,
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
            "x": { "field": "POS", "type": "genomic", "axis": "none", "linkingId": "link-1" },
            "y": { "field": "at_PI", "type": "quantitative", "axis": "none" },
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
            "x": { "field": "POS", "type": "genomic", "axis": "none", "linkingId": "link-1" },
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
