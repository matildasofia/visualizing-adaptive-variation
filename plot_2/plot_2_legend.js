/* {
    "tracks": [ {
      "mark": "rect",
      "color": {
        "field": "Stain",
        "type": "nominal",
        "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
        "range": ["white", "#D9D9D9", "#979797", "#636363", "black", "#A0A0F2"]
      },
      ... // other visual channels
    }]
  }

  {
    "tracks": [{
      "data": {
        "url": ...,
        "type": ...
      },
      "mark": "line",
      
      "x": {
        "field": "position",
        "type": "genomic"
      },
      
      "y": {
          "field": "peak", 
          "type": "quantitative"
          },
      // visual channel color is assigned a constant value
      "color": {"value": "steelblue"}
    }]
} */

var plot_spec_AT = {
    "title": "Diversity Atlantic",
    "subtitle": "A visualization of Theta, pi and tajimas D.",
    "static": false,
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 1000,
    "height": 300,
    "assembly": "unknown",
    "tracks": [
        {
            "data": {
                "url": "../data/gene_regions/seq_c_23164.REF_STRG_1_64511_XLOC_008442.windows.tsv",
                "type": "csv",
                "separator": "\t",
                "sampleLength": "100000", //how many rows the file is
            },
            "metadata": {
                "row": "metrics",
                "column": "POS",
                "value": "peak",
                "categories": ["at_THETA", "at_PI", "at_TD", "me_THETA", "me_PI", "meTD"]
              },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
            "y": {"field": "peak", "type": "quantitative"},
            "color": {"field": "metrics", "type": "nominal", "legend": true},
            "row": {"field": "metric", "type": "nominal"},
            /* "color": {
                "field": "peak",
                "type": "nominal",
                "domain": ["at_THETA", "at_PI", "at_TD", "me_THETA", "me_PI", "meTD"],
                "range": ["white", "#D9D9D9", "#979797", "#636363", "black", "#A0A0F2"]
              }, */
            "opacity": { "value": 0.8 },
            "size": { "value": 2 }, //the width of the line
        },
    ]
};

export { plot_spec_AT};