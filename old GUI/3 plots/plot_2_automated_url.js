const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 0.4;
const color_theta = "blue"
const color_pi = "purple"
const color_td = "green"


var plot_spec = {
    "title": "Diversity plot - Visualization of Theta (blue), Pi (purple) & Tajimas D (green)",
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
                "value": "at_THETA",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-1" }, //think legend should show whats shown on the axis, but no.
            "y": { "field": "at_THETA", "type": "quantitative", "axis": "left" },
            // "color": { "value": "orange" },
            // "color": { "value": "#d97900" }, // Darker orange for Atlantic
            "color": { "value": color_theta }, // Orange for theta
            // "opacity": { "value": 0.8 },
            "opacity": { "value": opacity_AT}, // Opacity for Atlantic
            // "size": { "value": 2 }, //the width of the line
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
    {"field": "at_THETA", "type": "quantitative", "format":"0.2f","alt":"Atlantic - θ (theta):"}
                   ],              
                

        },
        {
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
            // "color": { "value": "purple" },
            // "color": { "value": "#733e80" }, // Darker purple for Atlantic
            "color": { "value": color_pi }, // Purple for Pi    
            // "size": { "value": 2 },
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
        {"field": "at_PI", "type": "quantitative", "format":"0.2f","alt":"Atlantic - π (pi)"}
                ],
        },
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "at_TD",
                "sampleLength": "100000", 
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "none", "linkingId": "link-1" },
            "y": { "field": "at_TD", "type": "quantitative", "axis": "right", "domain": [-2.5, 2.5] }, 
            // "color": { "value": "green" },
            // "color": { "value": "#1d6d17" }, // Darker green for Atlantic
            "color": { "value": color_td }, // Green for td
            // "opacity": { "value": 0.8 },
            "opacity": { "value": opacity_AT}, // Opacity for Atlantic
            // "size": { "value": 2 },
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
                "value": "me_THETA",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-1" }, //think legend should show whats shown on the axis, but no.
            "y": { "field": "me_THETA", "type": "quantitative", "axis": "none" },
            // "y": { "field": "me_THETA", "type": "quantitative", "axis": "left" },
            // "color": { "value": "orange", "title": "Theta" },
            // "color": { "value": "#ffcc99", "title": "Theta" }, // Lighter orange for Mediterranean
            "color": { "value": color_theta }, // Orange for theta
            // "opacity": { "value": 0.8 },
            "opacity": { "value": opacity_ME}, // Opacity for Mediterranean
            // "size": { "value": 2 }, //the width of the line
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
        {"field": "me_THETA", "type": "quantitative", "format":"0.2f","alt":"Mediterranean - θ (theta):"}
        ],
        },
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
            // "color": { "value": "purple" },
            // "color": { "value": "#d1b8e0" },
            "color": { "value": color_pi }, // Purple for Pi
            "opacity": { "value": opacity_ME}, // Opacity for Mediterranean
            // Lighter purple for Mediterranean
            // "size": { "value": 2 },
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
        {"field": "me_PI", "type": "quantitative", "format":"0.2f","alt":"Mediterranean - π (pi):"}
                        ],
        },
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
            "y": { "field": "me_TD", "type": "quantitative", "axis": "right", "domain": [-2.5, 2.5] }, 
            // "color": { "value": "green" }, 
            // "color": { "value": "#b3e6b3" },// Lighter green for Mediterranean
            "color": { "value": color_td }, // Green for td
            "opacity": { "value": opacity_ME}, // Opacity for Mediterranean
            // "opacity": { "value": 0.8 },
            // "size": { "value": 2 },
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
        {"field": "me_TD", "type": "quantitative", "format":"0.2f","alt":"Mediterranean - Tajima's D (TD):"}
                    ],
        
        }

    ]
};                   
export { plot_spec };
