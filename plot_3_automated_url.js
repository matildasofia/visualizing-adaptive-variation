var plot_spec = {
    "title": "Plot 3",
    "subtitle": "Example",
    //"static": false,
    //"layout": { type: 'linear', },
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
                "column": "START",
                "value": "cds_COVERED",
                "sampleLength": "100000",
            },
            "mark": "line",
            "x": { "field": "START", "type": "genomic", "axis": "bottom" },
            "y": { "field": "cds_COVERED", "type": "quantitative", "axis": "left", "domain": [0, 1] },
            "color": { "value": "red" },
            "opacity": { "value": 0.5 },
            "size": { "value": 2 },

        },
        {
            "data": {
                "url": "",
                "type": "csv",
                "column": "START",
                "value": "intron_COVERED",
                "sampleLength": "100000",
            },
            "mark": "line",
            "x": { "field": "START", "type": "genomic", "axis": "bottom" },
            "y": { "field": "intron_COVERED", "type": "quantitative", "axis": "left", "domain": [0, 1] },
            "color": { "value": "blue" },
            "opacity": { "value": 0.5 },
            "size": { "value": 2 },

        },

    ]
};
                    
export { plot_spec };