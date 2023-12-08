

// Dessa parametrar används för goslings exempel
/* const assembly = [["U00096.3", 4641652]];
const xDomain = { "interval": [222000, 240000]};
const url = "https://s3.amazonaws.com/gosling-lang.org/data/gff/E_coli_MG1655.gff3.gz";
const indexUrl = "https://s3.amazonaws.com/gosling-lang.org/data/gff/E_coli_MG1655.gff3.gz.tbi"; */

// Dessa används för krill data
const assembly = [["seq_c_23164", 99317]];
const xDomain = { "interval": [0, 250000] };
const url = "http://localhost:8888/data/genes_index/seq_c_23164.REF_STRG_1_64511_XLOC_008442.gff.sorted.gff.gz";
const indexUrl = "http://localhost:8888/data/genes_index/seq_c_23164.REF_STRG_1_64511_XLOC_008442.gff.sorted.gff.gz.tbi";

var plot_spec = {
    "title": "GFF3 file",
    "subtitle": "E. coli genome, colored by gene type.",
    "spacing": 0,
    "layout": "linear",
    "assembly": assembly,
    "style": {"enableSmoothPath": true},
    "views": [
      {
        "xDomain": xDomain,
        "alignment": "overlay",
        "data": {
          "url": url,
          "indexUrl": indexUrl,
          "type": "gff",
          "attributesToFields": [
            {"attribute": "ID", "defaultValue": "unknown"},
          ]
        },
        "color": {"value": "blue"},
        "color": {
            "type": "nominal",
            "field": "type",
            "domain": [
              "gene",
              "CDS"
            ],
            "range": ["orange", "blue"]
          },
        "tracks": [
          {
            "dataTransform": [
              {"type": "filter", "field": "type", "oneOf": ["gene"]},
              {"type": "filter", "field": "strand", "oneOf": ["+"]}
            ],
            "mark": "triangleRight",
            "x": {"field": "end", "type": "genomic", "axis": "top"},
            "size": {"value": 10}
          },
          {
            "dataTransform": [
              {"type": "filter", "field": "type", "oneOf": ["exon"]},
              {"type": "filter", "field": "strand", "oneOf": ["+"]}
            ],
            "mark": "triangleRight",
            "x": {"field": "end", "type": "genomic"},
            "size": {"value": 10}
          },
          {
            "dataTransform": [
              {"type": "filter", "field": "type", "oneOf": ["gene"]}
            ],
            "mark": "text",
            "text": {"field": "ID", "type": "nominal"},
            "x": {"field": "start", "type": "genomic"},
            "xe": {"field": "end", "type": "genomic"},
            "style": {"dy": -10}
          },
          {
            "dataTransform": [
              {"type": "filter", "field": "type", "oneOf": ["gene"]},
              {"type": "filter", "field": "strand", "oneOf": ["-"]}
            ],
            "mark": "triangleLeft",
            "x": {"field": "start", "type": "genomic"},
            "size": {"value": 10},
            "style": {"align": "right"}
          },
          {
            "dataTransform": [
              {"type": "filter", "field": "type", "oneOf": ["gene"]},
              {"type": "filter", "field": "strand", "oneOf": ["+"]}
            ],
            "mark": "rule",
            "x": {"field": "start", "type": "genomic"},
            "strokeWidth": {"value": 3},
            "xe": {"field": "end", "type": "genomic"},
            "style": {"linePattern": {"type": "triangleRight", "size": 5}}
          },
          {
            "dataTransform": [
              {"type": "filter", "field": "type", "oneOf": ["gene"]},
              {"type": "filter", "field": "strand", "oneOf": ["-"]}
            ],
            "mark": "rule",
            "x": {"field": "start", "type": "genomic"},
            "strokeWidth": {"value": 3},
            "xe": {"field": "end", "type": "genomic"},
            "style": {"linePattern": {"type": "triangleLeft", "size": 5}}
          }
        ],
        "row": {"field": "strand", "type": "nominal", "domain": ["+", "-"]},
        "visibility": [
          {
            "operation": "less-than",
            "measure": "width",
            "threshold": "|xe-x|",
            "transitionPadding": 10,
            "target": "mark"
          }
        ],
        "opacity": {"value": 0.8},
        "width": 800,
        "height": 80
      }
    ]
  }
  export {plot_spec};