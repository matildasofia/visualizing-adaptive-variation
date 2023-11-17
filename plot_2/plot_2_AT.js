var plot_spec = {
    "title": "Diversity Atlantic",
    "subtitle": "A visualization of Theta, pi and tajimas D.",
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
                "url": "../gosling/gene_regions/seq_c_23164.REF_STRG_1_64511_XLOC_008442.windows.tsv",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "at_THETA",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" }, //think legend should show whats shown on the axis, but no.
            "y": { "field": "at_THETA", "type": "quantitative", "axis": "left" },
            "color": { "value": "orange", "title": "Theta" },
            "opacity": { "value": 0.8 },
            "size": { "value": 2 }, //the width of the line
        },
        {
            "data": {
                "url": "../gosling/gene_regions/seq_c_23164.REF_STRG_1_64511_XLOC_008442.windows.tsv",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "at_PI",
                "sampleLength": "100000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "none" },
            "y": { "field": "at_PI", "type": "quantitative", "axis": "none" },
            "color": { "value": "purple" },
            "size": { "value": 2 },
        },
        {
            "data": {
                "url": "../gosling/gene_regions/seq_c_23164.REF_STRG_1_64511_XLOC_008442.windows.tsv",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "at_TD",
                "sampleLength": "100000", 
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "none" },
            "y": { "field": "at_TD", "type": "quantitative", "axis": "right", "domain": [-2, 2] }, 
            "color": { "value": "green" },
            "opacity": { "value": 0.8 },
            "size": { "value": 2 },
        }

    ]
};
                    
export { plot_spec };