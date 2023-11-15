var plot_spec = {
    "title": "Plot 1",
    "subtitle": "Example",
    //"static": false,
    //"layout": { type: 'linear', },
    "xDomain": { "interval": [0, 200000] },
    "alignment": "overlay",
    "width": 1000,
    "height": 300,
    "assembly": "unknown",
    "tracks": [
        {
            "data": {
                // "url": "http://127.0.0.1:5500/FST_divergence-Plot-1-Example/POS_FST_at_vs_me.csv.gz.genic.seq_s_18363.csv",
                "url": "http://127.0.0.1:5500/FST_divergence-Plot-1-Example/POS_FST_at_vs_me.csv.gz.genic.seq_s_18363.csv",
                "type": "csv",
                "column": "POS",
                "value": "FST",
                "binSize": 10,
                "sampleLength": "100000",
            },
            "mark": "point",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": { "field": "FST", "type": "quantitative", "axis": "none", "domain": [0, 1] },
            "color": { "field": "TYPE", "type": "nominal", "legend": true },
            "opacity": { "value": 0.8 },
            "size": { "value": 4 },
            //"size": {"field": "FST", "type": "quantitative"}
            },
        {
            "data": {
                // "url": "http://127.0.0.1:5500/FST_divergence-Plot-1-Example/START_FST_at_vs_me_ALL.at_vs_me.consolidated_windows.1000bp.GT.seq_s_18363.csv",
                "url": "http://127.0.0.1:5500/FST_divergence-Plot-1-Example/START_FST_at_vs_me_ALL.at_vs_me.consolidated_windows.1000bp.GT.seq_s_18363.csv",
                "type": "csv",
                "column": "START",
                "value": "FST_at_vs_me",
                "sampleLength": "100000",
            },
            "mark": "line",
            "x": { "field": "START", "type": "genomic", "axis": "bottom" },
            "y": { "field": "FST_at_vs_me", "type": "quantitative", "axis": "left", "domain": [0, 1] },
            "color": { "value": "darkblue" },
            "opacity": { "value": 0.5 },
            "size": { "value": 2 }
                }
            ]
        };
                    
export { plot_spec };
