var spec = {
    "title": "Mapping depth",
    "subtitle": "A first plot by Matilda",
    "xDomain": {"interval": [0, 270000] },
    "alignment": "overlay",
    "tracks": [
      {
        "layout": "linear",
        "width": 800,
        "height": 180,
        "data": {
          //"url": "https://export.uppmax.uu.se/uppstore2018098/genomelens/data/test/at_vs_me.csv.gz.genic.seq_s_18363.csv",
          "url": "./gosling/gene_regions.data_mappings/seq_s_18363.COM_SPAL_1_010415_XLOC_038300.mappings.windows_100.at.tsv",
          "type": "csv",
          "column": "POS",
          "value": "SAMPLES",
          //"binSize": 10,
          //"sampleLength": "100000",
        },
        "mark": "point",
        "x": {"field": "POS", "type": "genomic", "axis": "bottom"},
        "y": {"field": "SAMPLES", "type": "quantitative", "axis": "right", "domain": [0, 70]},
      }
    ],
    "responsiveSize": false
  } 

export { spec }; 