// plot_3_automated_url.js

var plot_spec = {
    "title": "Plot 3",
    "subtitle": "Example",
    "xDomain": { "interval": [0, 200000] },
    "alignment": "overlay",
    "width": 1000,
    "height": 200,
    "assembly": "unknown",
    "views": [
        {
            "tracks": [
                {
                    "data": {
                        "url": "",
                        "type": "csv",
                        "column": "START",
                        "value": "all_PI",
                        "sampleLength": "100000",
                    },
                    "mark": "line",
                    "x": { "field": "START", "type": "genomic", "axis": "bottom" },
                    "y": { "field": "all_PI", "type": "quantitative", "axis": "left", "domain": [0, 1] },
                    "color": { "value": "red" },
                    "opacity": { "value": 0.5 },
                    "size": { "value": 2 },
                },
            ],
        },
    ],
};

export { plot_spec };
