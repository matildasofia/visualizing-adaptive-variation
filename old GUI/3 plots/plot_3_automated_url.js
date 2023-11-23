const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 0.5;
const color_nr_samples = "silver"
const color_mapping_depth = "orange"

var plot_spec = {
    "title": " Mapping depths plot - Depth of coverage (orange) & nr of samples (grey), normalized (window size: 1000)",
    "subtitle": "Atlantic population (bold) and Mediterranean (light)",
    // "description": "Atlantic population is shown in bold, Mediterranean in lighter color",
    // "description": "At (bold), Me (light)",
    "static": false,
    //"layout": { "type": "linear" },
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 1000,
    "height": 300,
    "assembly": "unknown",

      "tracks": [
        {

            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "NORMALIZED_SAMPLES",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom"},
            "y": { "field": "NORMALIZED_SAMPLES", "type": "quantitative", "axis": "left"},
            "color": { "value": color_nr_samples }, // Green for Nr. of samples
            // "color": { "value": "orange" },
            /* "color": { "field": "metric", "type": "nominal", "legend": true }, */
            "opacity": { "value": opacity_AT}, // Opacity for Atlantic
            // "opacity": { "value": 0.8 },
            "size": { "value": size_val }, //the width of the line
            // "size": { "value": 2 }, //the width of the line
            "tooltip": [
                {"field": "NORMALIZED_SAMPLES", "type": "quantitative", "format":"0.2f","alt":"Atlantic - Nr of samples:"}
                   ],              
            
        },
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "NORMALIZED_DEPTH",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": { "field": "NORMALIZED_DEPTH", "type": "quantitative", "axis": "right" },
            "color": { "value": color_mapping_depth }, // orange for Mapping depth
            // "color": { "value": "orange" },
            "opacity": { "value": opacity_AT}, // Opacity for Atlantic
            // "opacity": { "value": 0.8 },
            "size": { "value": size_val }, //the width of the line
            // "size": { "value": 2 }, //the width of the line
            "tooltip": [
            {"field": "NORMALIZED_DEPTH", "type": "quantitative", "format":"0.2f","alt":"Atlantic - Mapping depth:"}
                   ],              

        },
                // ¤¤¤¤¤¤¤¤¤ Mediterranean  ¤¤¤¤¤¤¤¤¤

        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "NORMALIZED_SAMPLES",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": { "field": "NORMALIZED_SAMPLES", "type": "quantitative", "axis": "none" },
            "color": { "value": color_nr_samples }, // Green for Nr. of samples
            // "color": { "value": "orange" },
            "opacity": { "value": opacity_ME}, // Opacity for Mediterranean
            // "opacity": { "value": 0.8 },
            "size": { "value": size_val }, //the width of the line
            // "size": { "value": 2 }, //the width of the line
            "tooltip": [
                {"field": "NORMALIZED_SAMPLES", "type": "quantitative", "format":"0.2f","alt":"Mediterranean - Nr of samples:"}
                   ],              
    
        },
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "NORMALIZED_DEPTH",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom"},
            "y": { "field": "NORMALIZED_DEPTH", "type": "quantitative", "axis": "none" },
            "color": { "value": color_mapping_depth }, // orange for Mapping depth
            // "color": { "value": "red" },
            "opacity": { "value": opacity_ME}, // Opacity for Mediterranean
            // "opacity": { "value": 0.8 },
            "size": { "value": size_val }, //the width of the line
            // "size": { "value": 2 }, //the width of the line
            // "legend": { "value": "depth"}
            "tooltip": [
                {"field": "NORMALIZED_DEPTH", "type": "quantitative", "format":"0.2f","alt":"Mediterranean - Mapping depth:"}
                   ],              

        }
    ]
};

export { plot_spec }; 
// console.log(plot_spec.title);
// console.log(JSON.stringify(plot_spec.tracks, null, 2));