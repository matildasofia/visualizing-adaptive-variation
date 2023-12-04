// const y_col_preset = "FST" // column set as FST for development
const y_col_preset = "" // if user should specify column


const trackTemplate = {
    "data": {
        "url": "",
        "type": "",
        "separator": "",
        "column": "POS",
        // "value": "",
        "value": y_col_preset,
        "binSize": 10,
        "sampleLength": "1000",
    },
    "mark": "point",
    "x": { "field": "POS", "type": "genomic", "axis": "bottom"},
    // "y": { "field": "", "type": "quantitative", "axis": "left", "domain": [0, 1] },
    "y": { "field": y_col_preset, "type": "quantitative", "axis": "left", "domain": [0, 1] },
    "color": { "field": "TYPE", "type": "nominal", "legend": true },
    "opacity": { "value": 0.8 },
    "size": { "value": 4 },
    "tooltip": [
        { "field": "FST", "type": "quantitative", "format": "0.2f", "alt": "SNPs (per bp) - FST:" }
    ],
};

export { trackTemplate };