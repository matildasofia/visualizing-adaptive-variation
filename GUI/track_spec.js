const y_col_preset = "" 
const x_col_preset = "" 


const trackTemplate = {
    "data": {
        "url": "",
        "type": "",
        "separator": "",
        "column": x_col_preset,
        "value": y_col_preset,
        "binSize": 10,
        "sampleLength": 1000,
    },
    "mark": "line",
    "x": { "field": x_col_preset, "type": "genomic", "axis": "bottom"},
    "y": { "field": y_col_preset, "type": "quantitative", "axis": "left", "domain": [0, 1] },
    "color": {"value": "orange"},
    //"color": { "field": "TYPE", "type": "nominal", "legend": true },
    "opacity": { "value": 0.8 },
    "size": { "value": 2 },
    //"tooltip": [
        //{ "field": "FST", "type": "quantitative", "format": "0.2f", "alt": "SNPs (per bp) - FST:" }
    //],
};

export { trackTemplate };