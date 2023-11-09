var spec = {
    "title": "Basic Marks: line",
    "subtitle": "Tutorial Examples",
    "tracks": [
      {
        "layout": "linear",
        "width": 800,
        "height": 180,
        "data": {
          "url": "https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ",
          "type": "multivec",
          "row": "sample",
          "column": "position",
          "value": "peak",
          "categories": ["sample 1"]
        },
        "mark": "line",
        "x": {"field": "position", "type": "genomic", "axis": "bottom"},
        "y": {"field": "peak", "type": "quantitative", "axis": "right"},
        "size": {"value": 2}
      }
    ]
  };
  
  export { spec };
  