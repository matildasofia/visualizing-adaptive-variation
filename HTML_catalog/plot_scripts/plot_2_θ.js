// Plot specification for "Theta"
const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 1;
const color_theta_AT = "blue"
const color_theta_ME = "lightblue"

var plot_spec = {
    "title": "Theta",
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
                "value": "at_THETA",
                "sampleLength": "1000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-1" },
            "y": { "field": "at_THETA", "type": "quantitative", "axis": "left", "domain": [0, 0.05], "grid": true },
            "color": { "value": color_theta_AT },
            "opacity": { "value": opacity_AT },
            "size": { "value": size_val },
            "tooltip": [
                { "field": "at_THETA", "type": "quantitative", "format": "0.2f", "alt": "Atlantic - θ (theta):" }
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
                "sampleLength": "1000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-1" },
            "y": { "field": "me_THETA", "type": "quantitative", "axis": "none", "domain": [0, 0.05] },
            "color": { "value": color_theta_ME },
            "opacity": { "value": opacity_ME },
            "size": { "value": size_val },
            "tooltip": [
                { "field": "me_THETA", "type": "quantitative", "format": "0.2f", "alt": "Mediterranean - θ (theta):" }
            ],
        },
    ]
};
export { plot_spec };
