var plot_spec = {
    "title": "Plot 3",
    "subtitle": "Example",
    "xDomain": { "interval": [0, 200000] },
    "alignment": "overlay",
    "width": 1000,
    "height": 200,
    "assembly": "unknown",
    "tracks": [
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "NORMALIZED_SAMPLES",
                "sampleLength": "100000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": { "field": "NORMALIZED_SAMPLES", "type": "quantitative", "axis": "left"},
            "color": { "value": "red" },
            "opacity": { "value": 0.5 },
            "size": { "value": 2 },

        },
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "NORMALIZED_DEPTH",
                "sampleLength": "100000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": { "field": "NORMALIZED_DEPTH", "type": "quantitative", "axis": "right" },
            "color": { "value": "blue" },
            "opacity": { "value": 0.5 },
            "size": { "value": 2 },

        },

    ]
};
                    
export { plot_spec };