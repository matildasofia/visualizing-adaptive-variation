var plot_spec = {
    "title": "Diversity",
    "subtitle": "A visualization of Theta, pi and tajimas D.",
    //"static": false,
    //"layout": { type: 'linear', },
    "xDomain": { "interval": [0, 250000] },
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
                "value": "at_THETA",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": { "field": "at_THETA", "type": "quantitative", "axis": "left" },
            "color": { "value": "darkblue" },
            "opacity": { "value": 0.8 },
            "size": { "value": 4 },
            //"strokeWidth": { "type": "quantitative", "field": "at_THETA"}
        },
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "at_PI",
                "sampleLength": "100000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "none" },
            "y": { "field": "at_PI", "type": "quantitative", "axis": "none" },
            "color": { "value": "red" },
            "size": { "value": 4 },
        },
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "at_TD",
                "sampleLength": "100000", 
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "none" },
            "y": { "field": "at_TD", "type": "quantitative", "axis": "right", "domain": [-2, 2] },
            "color": { "value": "turquoise" },
            "opacity": { "value": 0.8 },
            "size": { "value": 4 },
        }

    ]
};
                    
export { plot_spec };