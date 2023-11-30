var plot_spec = {
    "title": "FST",
    //"subtitle": "Per base and per kbase",
    "static": false, // enables zoom & pan for the tracks
    //"layout": { type: 'linear', },
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 1000,
    "height": 300,
    "assembly": "unknown",


    //Specifying Light gray color as background color
    "style": {
        "background": "#D3D3D3", "backgroundOpacity": 0.1
        //,"withinLinkVerticalLines": "true",
        //"grid": "true"

    },

    "tracks": [
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "FST",
                "binSize": 10,
                "sampleLength": "1000",
            },
            "mark": "point",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom"},
            //"x": { "field": "POS", "type": "genomic", "axis": "bottom", "grid": "true", "linkingId": "GenomicPositions" },
            "y": { "field": "FST", "type": "quantitative", "axis": "left", "domain": [0, 1], "legend": "false" },
            "color": { "field": "TYPE", "type": "nominal", "legend": true },
            "opacity": { "value": 0.8 },
            "size": { "value": 4 },
            "tooltip": [
                { "field": "FST", "type": "quantitative", "format": "0.2f", "alt": "SNPs (per bp) - FST:" }
            ],

        },
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "FST",
                "sampleLength": "1000",
            },
            "mark": "line",

            // "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": { "field": "FST", "type": "quantitative", "axis": "none", "domain": [0, 1] },

            "color": { "value": "darkblue" },
            "opacity": { "value": 0.5 },
            "size": { "value": 2 },
            "tooltip": [
                { "field": "FST", "type": "quantitative", "format": "0.2f", "alt": "Window-based (per kB) - FST:" }
            ],
        }]
};

export { plot_spec };