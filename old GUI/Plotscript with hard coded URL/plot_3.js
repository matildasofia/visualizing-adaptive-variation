var plot_spec = {
    // "title": "ME - Mapping depth and nr of samples, normalized (window size: 1000)",
    // "subtitle": "Mapping depth and nr of samples.",
    "static": false,
    //"layout": { "type": "linear" },
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 1000,
    "height": 300,
    "assembly": "unknown",
    /* "metadata": {
        "row": "metric",
        "column": "position",
        "value": "peak",
        "categories": ["samples ME", "depth ME", "samples AT", "depth AT"]
    }, */
    /* "color": { "field": "metric", "type": "nominal", "legend": true }, */

    "track_style": {
        "legendTitle":"SV Class",
        // "legendTitle": "ooooooooooooooooooooook",
        "inlineLegend": true,
        //  * style-related properties 
        //  * specify the style of all tracks
        //  */
      },



    "tracks": [
        {
            "data": {
                "url": "../data/gene_regions.data_mappings/seq_c_23164.REF_STRG_1_64511_XLOC_008442.mappings.windows_1000.me.tsv",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "NORMALIZED_SAMPLES",
                "sampleLength": "100000", //how many rows the file is
                // "legend": "true",
                // "categories": ["MEEEEEEEEEEEEEEEE"],
                // "row": "SAMPLES",
                // "categories": ["6", "4", "7"]
                
                
            },
            /* "metadata": {
                "row": "metric",
                "column": "position",
                "value": "peak",
                "categories": ["samples ME", "depth ME", "samples AT", "depth AT"]
            }, */
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom","legend": true},
            // "x": { "field": "POS", "type": "genomic", "axis": "bottom"},
            "y": { "field": "NORMALIZED_SAMPLES", "type": "quantitative", "axis": "left","domain":[0,2]},
            // "row": {"type": "nominal", "legend": true},

            // "color": {"field":"SAMPLES","type": "nominal", "legend": true},
            "color": {"field": "NORMALIZED_SAMPLES", "type": "quantitative","value": "pink", "legend": true,"title":"ok"},
            // "color": {"value": "pink","style.legendTitle":"heeeej"},

            // "color": {"field":"", "value": "pink", "type": "nominal", "legend": true,"title":"SAMPLES"},

            /* "color": { "field": "metric", "type": "nominal", "legend": true }, */
            "opacity": { "value": 0.8 },
            "size": { "value": 2 }, //the width of the line

            "tooltip": [
{"field": "NORMALIZED_SAMPLES", "type": "quantitative", "format":"0.2f","alt":"ME Normalized Samples"}

],
            // "legend": { "title": "Samples" },
            // "subtitle":"test",
            // "style":"track_style",
            // "style.legendTitle":"heeeej",
            // "mark": "text",  
            // "text": "heeeeej",
            // "title": "heeeeej",
            // "subtitle": "ooook",
        },
        // {"data":{
        //     "type": "dummy-track",
        //     "title": "Placeholder",
        //     "id": "my_track",
        //     "height": 200,
        //     "width": 300,
        //     "style": {"background": "#e6e6e6", "textFontSize": 8, "textFontWeight": "normal"}
        //   },
        //   "color": {"value": "pink","style.legendTitle":"heeeej"},
        // }
        
        

    ]
};


export { plot_spec }; 
// console.log(plot_spec.title);
console.log(JSON.stringify(plot_spec.tracks, null, 2));