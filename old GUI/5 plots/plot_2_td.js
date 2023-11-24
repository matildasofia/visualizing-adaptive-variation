const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 0.5;
const color_td = "red"


var plot_spec = {
    "title": "Diversity plot - Visualization of Tajimas D ",
    // "description": "Atlantic population is shown in bold, Mediterranean in lighter color",
    "subtitle": "Atlantic population (bold) and Mediterranean (light)",

    "static": false,
    //"layout": { "type": "linear" },
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 1000,
    "height": 300,
    "assembly": "unknown",
    "tracks": [
        {
        // ¤¤¤¤¤¤¤¤¤ Atlantic  ¤¤¤¤¤¤¤¤¤
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "at_TD",
                "sampleLength": "100000", 
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-1" },
            "y": { "field": "at_TD", "type": "quantitative", "axis": "left", "domain": [-2.5, 2.5] }, 
            "color": { "value": color_td }, // Color for td
            "opacity": { "value": opacity_AT}, // Opacity for Atlantic
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
        {"field": "at_TD", "type": "quantitative", "format":"0.2f","alt":"Atlantic - Tajima's D (TD):"}
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
                "sampleLength": "100000", 
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "none", "linkingId": "link-1" },
            "y": { "field": "me_TD", "type": "quantitative", "axis": "left", "domain": [-2.5, 2.5] }, 
            "color": { "value": color_td }, // Color for td
            "opacity": { "value": opacity_ME}, // Opacity for Mediterranean
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
        {"field": "me_TD", "type": "quantitative", "format":"0.2f","alt":"Mediterranean - Tajima's D (TD):"}
                    ],
        
        }

    ]
};                   
export { plot_spec };
