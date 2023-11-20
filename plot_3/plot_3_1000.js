var plot_spec = {
    "title": "Mapping depth and nr of samples, normalized (window size: 1000)",
    "subtitle": "Mapping depth and nr of samples.",
    "static": false,
    //"layout": { "type": "linear" },
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 1000,
    "height": 300,
    "assembly": "unknown",
    /* "metadata": {
        "row": "metric",
        "column": "position",
        "value": "peak",
        "categories": ["samples ME", "depth ME", "samples AT", "depth AT"]
    }, */
    /* "color": { "field": "metric", "type": "nominal", "legend": true }, */
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
            /* "metadata": {
                "row": "metric",
                "column": "position",
                "value": "peak",
                "categories": ["samples ME", "depth ME", "samples AT", "depth AT"]
            }, */
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "legend": true },
            "y": { "field": "NORMALIZED_SAMPLES", "type": "quantitative", "axis": "left", "legend": true },
            "color": { "value": "pink" },
            /* "color": { "field": "metric", "type": "nominal", "legend": true }, */
            "opacity": { "value": 0.8 },
            "size": { "value": 2 }, //the width of the line
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
            "color": { "value": "purple" },
            "opacity": { "value": 0.8 },
            "size": { "value": 2 }, //the width of the line
        },
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
            "color": { "value": "orange" },
            "opacity": { "value": 0.8 },
            "size": { "value": 2 }, //the width of the line
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
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "legend": true },
            "y": { "field": "NORMALIZED_DEPTH", "type": "quantitative", "axis": "none" },
            "color": { "value": "red" },
            "opacity": { "value": 0.8 },
            "size": { "value": 2 }, //the width of the line
            "legend": { "value": "depth"}
        }
    ]
};

// This is if we want them to be separate plots.
/* var plot_spec_AT = {
    "title": "Mapping depth Atlantic",
    "subtitle": "Mapping depth and nr of samples.",
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
                "url": "../gosling/gene_regions.data_mappings/seq_c_23164.REF_STRG_1_64511_XLOC_008442.mappings.windows_1000.at.tsv",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "NORMALIZED_SAMPLES",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "MAP" },
            "y": { "field": "NORMALIZED_SAMPLES", "type": "quantitative", "axis": "left" },
            "color": { "value": "orange" },
            "opacity": { "value": 0.8 },
            "size": { "value": 2 }, //the width of the line
        },
        {
            "data": {
                "url": "../gosling/gene_regions.data_mappings/seq_c_23164.REF_STRG_1_64511_XLOC_008442.mappings.windows_1000.at.tsv",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "NORMALIZED_DEPTH",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "MAP" },
            "y": { "field": "NORMALIZED_DEPTH", "type": "quantitative", "axis": "right" },
            "color": { "value": "red" },
            "opacity": { "value": 0.8 },
            "size": { "value": 2 }, //the width of the line
        }
    ]
}
*/

export { plot_spec}; 