var plot_spec_ME = {
    "title": "Mapping depth Mediterranean",
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
                "url": "../gosling/gene_regions.data_mappings/seq_c_23164.REF_STRG_1_64511_XLOC_008442.mappings.windows_1000.me.tsv",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "SAMPLES",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": { "field": "SAMPLES", "type": "quantitative", "axis": "left" },
            "color": { "value": "orange" },
            "opacity": { "value": 0.8 },
            "size": { "value": 2 }, //the width of the line
        },
        {
            "data": {
                "url": "../gosling/gene_regions.data_mappings/seq_c_23164.REF_STRG_1_64511_XLOC_008442.mappings.windows_1000.me.tsv",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "DEPTH",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": { "field": "DEPTH", "type": "quantitative", "axis": "right" },
            "color": { "value": "purple" },
            "opacity": { "value": 0.8 },
            "size": { "value": 2 }, //the width of the line
        }
    ]
};

var plot_spec_AT = {
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
                "value": "SAMPLES",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": { "field": "SAMPLES", "type": "quantitative", "axis": "left" },
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
                "value": "DEPTH",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": { "field": "DEPTH", "type": "quantitative", "axis": "right" },
            "color": { "value": "purple" },
            "opacity": { "value": 0.8 },
            "size": { "value": 2 }, //the width of the line
        }
    ]
}
                    
export { plot_spec_AT, plot_spec_ME };