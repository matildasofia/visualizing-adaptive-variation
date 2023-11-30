var track = {
    "data": {
        "url": "",
        "type": "",
        "separator": "",
        "column": "POS",
        "value": "FST",
        "binSize": 10,
        "sampleLength": "1000",
    },
    "mark": "point",
    "x": { "field": "POS", "type": "genomic", "axis": "bottom"},
    "y": { "field": "FST", "type": "quantitative", "axis": "left", "domain": [0, 1], "legend": "false" },
    "color": { "field": "TYPE", "type": "nominal", "legend": true },
    "opacity": { "value": 0.8 },
    "size": { "value": 4 },
    "tooltip": [
        { "field": "FST", "type": "quantitative", "format": "0.2f", "alt": "SNPs (per bp) - FST:" }
    ],
}

export {track};