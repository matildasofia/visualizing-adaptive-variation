var plot_spec = {
    "title": "FST",
    "subtitle": "Per base and per kbase",
    //"static": false,
    //"layout": { type: 'linear', },
    "xDomain": { "interval": [0, 200000] },
    "alignment": "overlay",
    "width": 1000,
    "height": 200,
    "assembly": "unknown",
    "style": {"dashed": [3, 3]},
    "tracks": [
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
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
            },
        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS", 
                "value": "FST",
  
                "sampleLength": "270000",
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": { "field": "FST", "type": "quantitative", "axis": "left", "domain": [0, 1] },
  
            "color": { "value": "darkblue" },
            "opacity": { "value": 0.5 },
            "size": { "value": 2 }
                },
        {
            "data": {
                "type": "json",
                "values": [
                  {"c": "10000", "p": 100000, "v": 0.1},
                  {"c": "20000", "p": 100000, "v": 0.6},
                ],
                "chromosomeField": "c",
                "genomicFields": ["p"]
              },
              "mark": "rule",
              "x": {"field": "p", "type": "genomic"},
              "y": {"field": "v", "type": "quantitative", "domain": [0, 0.003]},
              "strokeWidth": {"field": "v", "type": "quantitative"},
              "color": {"value": "red"}
            },                          
        ]   
    }; 
export { plot_spec };