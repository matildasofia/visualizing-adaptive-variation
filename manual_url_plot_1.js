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
              // "url": "http://127.0.0.1:5500/data/gene_regions/seq_s_18363.COM_SPAL_1_010415_XLOC_038300.snps.tsv",
              "url": "http://127.0.0.1:5500/data/seq_s_18363.COM_SPAL_1_010415_XLOC_038300.snps.csv",

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
              // "url": "http://127.0.0.1:5500/data/gene_regions/seq_s_18363.COM_SPAL_1_010415_XLOC_038300.windows.tsv",
              "url": "http://127.0.0.1:5500/data/seq_s_18363.COM_SPAL_1_010415_XLOC_038300.windows.csv",
              "type": "csv",
              // "column": "START",
              "column": "POS", 
              // "value": "FST_at_vs_me",
              "value": "FST",

              "sampleLength": "100000",
          },
          "mark": "line",
          // "x": { "field": "START", "type": "genomic", "axis": "bottom" },
          "x": { "field": "POS", "type": "genomic", "axis": "bottom" },
          // "y": { "field": "FST_at_vs_me", "type": "quantitative", "axis": "left", "domain": [0, 1] },
          "y": { "field": "FST", "type": "quantitative", "axis": "left", "domain": [0, 1] },

          "color": { "value": "darkblue" },
          "opacity": { "value": 0.5 },
          "size": { "value": 2 }
              }
          ]
      };
                  
export { plot_spec };
