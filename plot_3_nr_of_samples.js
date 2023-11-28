const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 1;
const color_nr_samples_AT = "green"
const color_nr_samples_ME = "lightgreen"

var plot_spec = {
    "title": "Nr of Samples - Window size: 1000",
    //"subtitle": "Atlantic population (dark) and Mediterranean (light)",
    // "description": "Atlantic population is shown in bold, Mediterranean in lighter color",
    // "description": "At (bold), Me (light)",
    "static": false,
    //"layout": { "type": "linear" },
    "xDomain": { "interval": [0, 250000] },
    "alignment": "overlay",
    "width": 500,
    "height": 200,
    "assembly": "unknown",

    // Specifying Light gray color as background color
    "style": {"background":"#D3D3D3", "backgroundOpacity":0.1},


      "tracks": [
        {
        // ¤¤¤¤¤¤¤¤¤ Atlantic  ¤¤¤¤¤¤¤¤¤
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "SAMPLES",
                "sampleLength": "1000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom","linkingId": "link-2"},
            "y": { "field": "SAMPLES", "type": "quantitative", "axis": "left","domain":[0,70]},
            "color": { "value": color_nr_samples_AT }, // Green for Nr. of samples
            "opacity": { "value": opacity_AT}, // Opacity for Atlantic
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
                {"field": "SAMPLES", "type": "quantitative", "format":"0.2f","alt":"Atlantic - Nr of samples:"}
                   ],              
            
        },
        // ¤¤¤¤¤¤¤¤¤ Mediterranean  ¤¤¤¤¤¤¤¤¤

        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "SAMPLES",
                "sampleLength": "1000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-2" },
            "y": { "field": "SAMPLES", "type": "quantitative", "axis": "none", "domain":[0,70]},
            "color": { "value": color_nr_samples_ME }, // Green for Nr. of samples
            "opacity": { "value": opacity_ME}, // Opacity for Mediterranean
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
                {"field": "SAMPLES", "type": "quantitative", "format":"0.2f","alt":"Mediterranean - Nr of samples:"}
                   ],              
    
        },
    ]
};

export { plot_spec }; 
// console.log(plot_spec.title);
// console.log(JSON.stringify(plot_spec.tracks, null, 2));