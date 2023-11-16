// plot_3_automated_url.js

var plot_spec = {
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
          //"url": "./gosling/gene_regions.data_mappings/seq_s_18363.COM_SPAL_1_010415_XLOC_038300.mappings.windows_100.at.tsv",
          //"url": "http://localhost:8888/gosling/gene_regions.data_mappings/seq_c_23164.REF_STRG_1_64511_XLOC_008442.mappings.windows_100.at.tsv",
          //"url": "http://127.0.0.1:5500/gosling/gene_regions.data_mappings/seq_c_23164.REF_STRG_1_64511_XLOC_008442.mappings.windows_100.at.tsv",
          //"url": "./Users/matildastyfberg/Desktop/UppsalaUniversitet/Applied_bioinformatics/Repository/Visualizing-adaptive-variation/gosling/gene_regions/seq_c_23164.REF_STRG_1_64511_XLOC_008442.snps.tsv",
          "url": "",
          "type": "csv",
          "column": "POS",
          "value": "FST",
          "binSize": 10,
          "sampleLength": "100000",
        },
        "mark": "point",
        "x": {"field": "POS", "type": "genomic", "axis": "bottom"},
        "y": {"field": "FST", "type": "quantitative", "axis": "right", "domain": [0, 1]},
      }
    ],
    "responsiveSize": false
};

export { plot_spec };