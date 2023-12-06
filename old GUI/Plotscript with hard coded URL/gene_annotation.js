const size_val = 1.5;
const opacity = 1;
const color_td_AT = "red"


var plot_spec = {
    "static": false,
    "layout": { "type": "linear" },
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 1100,
    "height": 300,
    "assembly": "unknown",

    "style": {"background":"#D3D3D3", "backgroundOpacity":0.1},

    "tracks":[{
        "data": {
          "url": "http://localhost:8888/ex_data_annot/seq_c_23164.REF_STRG_1_64511_XLOC_008442.gff.sorted.gff.gz",
          "indexUrl": "http://localhost:8888/ex_data_annot/seq_c_23164.REF_STRG_1_64511_XLOC_008442.gff.sorted.gff.gz.tbi",
          "type": "gff",
          //"extractAttributes": true
        },
        "mark": "rect", 
          "x": {"field": "start", "type": "genomic", "axis": "bottom"}, 
          "xe": {"field": "end", "type": "genomic"},
          "size": {"value": 40 }
    }
]
    
};
                   
export { plot_spec };


var annotation_spec = {
    "alignment": "overlay",
    "title": "Corces et al.",
    "data": {
      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=gene-annotation",
      "type": "beddb",
      "genomicFields": [
        {"index": 1, "name": "start"},
        {"index": 2, "name": "end"}
      ],
      "valueFields": [
        {"index": 5, "name": "strand", "type": "nominal"},
        {"index": 3, "name": "name", "type": "nominal"}
      ],
      "exonIntervalFields": [
        {"index": 12, "name": "start"},
        {"index": 13, "name": "end"}
      ]
    },
    "tracks": [
      {
        "dataTransform": [
          {"type": "filter", "field": "type", "oneOf": ["gene"]},
          {"type": "filter", "field": "strand", "oneOf": ["+"]}
        ],
        "mark": "text",
        "text": {"field": "name", "type": "nominal"},
        "x": {"field": "start", "type": "genomic"},
        "xe": {"field": "end", "type": "genomic"},
        "size": {"value": 8},
        "style": {"textFontSize": 8, "dy": -12}
      },
      {
        "dataTransform": [
          {"type": "filter", "field": "type", "oneOf": ["gene"]},
          {"type": "filter", "field": "strand", "oneOf": ["-"]}
        ],
        "mark": "text",
        "text": {"field": "name", "type": "nominal"},
        "x": {"field": "start", "type": "genomic"},
        "xe": {"field": "end", "type": "genomic"},
        "size": {"value": 8},
        "style": {"textFontSize": 8, "dy": 10}
      },
      {
        "dataTransform": [
          {"type": "filter", "field": "type", "oneOf": ["gene"]},
          {"type": "filter", "field": "strand", "oneOf": ["+"]}
        ],
        "mark": "rect",
        "x": {"field": "end", "type": "genomic"},
        "size": {"value": 7}
      },
      {
        "dataTransform": [
          {"type": "filter", "field": "type", "oneOf": ["gene"]},
          {"type": "filter", "field": "strand", "oneOf": ["-"]}
        ],
        "mark": "rect",
        "x": {"field": "start", "type": "genomic"},
        "size": {"value": 7}
      },
      {
        "dataTransform": [
          {"type": "filter", "field": "type", "oneOf": ["exon"]}
        ],
        "mark": "rect",
        "x": {"field": "start", "type": "genomic"},
        "xe": {"field": "end", "type": "genomic"},
        "size": {"value": 14}
      },
      {
        "dataTransform": [
          {"type": "filter", "field": "type", "oneOf": ["gene"]}
        ],
        "mark": "rule",
        "x": {"field": "start", "type": "genomic"},
        "xe": {"field": "end", "type": "genomic"},
        "strokeWidth": {"value": 3}
      }
    ],
    "row": {"field": "strand", "type": "nominal", "domain": ["+", "-"]},
    "color": {
      "field": "strand",
      "type": "nominal",
      "domain": ["+", "-"],
      "range": ["#012DB8", "#BE1E2C"]
    },
    "visibility": [
      {
        "operation": "less-than",
        "measure": "width",
        "threshold": "|xe-x|",
        "transitionPadding": 10,
        "target": "mark"
      }
    ],
    "width": 350,
    "height": 100
  }