// Plot specification for "Tajimas D"
const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 0.4;
const color_td_AT = "red"
const color_td_ME = "red"


var plot_spec = {
    "title": "Tajimas D ",
    "static": false,
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 1000,
    "height": 300,
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
                "value": "at_TD",
                "sampleLength": "1000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": { "field": "at_TD", "type": "quantitative", "axis": "left", "domain": [-3.5, 3.5], "grid": true },
            "color": { "value": color_td_AT },
            "opacity": { "value": opacity_AT },
            "size": { "value": size_val },
            "tooltip": [
                { "field": "at_TD", "type": "quantitative", "format": "0.2f", "alt": "Atlantic - Tajima's D (TD):" }
            ],
        },
        // ¤¤¤¤¤¤¤¤¤ Mediterranean  ¤¤¤¤¤¤¤¤¤
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "me_TD",
                "sampleLength": "1000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-1" },
            "y": { "field": "me_TD", "type": "quantitative", "axis": "none", "domain": [-3.5, 3.5] },
            "color": { "value": color_td_ME },
            "opacity": { "value": opacity_ME },
            "size": { "value": size_val },
            "tooltip": [
                { "field": "me_TD", "type": "quantitative", "format": "0.2f", "alt": "Mediterranean - Tajima's D (TD):" }
            ],

        }

    ]
};
export { plot_spec };
