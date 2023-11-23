const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 1;
const color_theta_AT = "blue"
const color_theta_ME = "lightblue"

var plot_spec = {
    "title": "Diversity plot - Visualization of Theta (blue)",
    // "description": "Atlantic population is shown in bold, Mediterranean in lighter color",
    "subtitle": "Atlantic population (dark) and Mediterranean (light)",

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
                "value": "at_THETA",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-1" }, //think legend should show whats shown on the axis, but no.
            "y": { "field": "at_THETA", "type": "quantitative", "axis": "left" },
            "color": { "value": color_theta_AT }, // Color for theta
            "opacity": { "value": opacity_AT}, // Opacity for Atlantic
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
    {"field": "at_THETA", "type": "quantitative", "format":"0.2f","alt":"Atlantic - θ (theta):"}
                   ],              
                

        },
        // ¤¤¤¤¤¤¤¤¤ Mediterranean  ¤¤¤¤¤¤¤¤¤
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "me_THETA",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-1" }, //think legend should show whats shown on the axis, but no.
            "y": { "field": "me_THETA", "type": "quantitative", "axis": "none" },
            "color": { "value": color_theta_ME }, // Color for theta
            "opacity": { "value": opacity_ME}, // Opacity for Mediterranean
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
        {"field": "me_THETA", "type": "quantitative", "format":"0.2f","alt":"Mediterranean - θ (theta):"}
        ],
        },
    ]
};                   
export { plot_spec };
