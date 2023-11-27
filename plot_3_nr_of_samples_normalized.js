const size_val = 1.5;
const opacity_AT = 1;
const opacity_ME = 1;
const color_nr_samples_AT = "green"
const color_nr_samples_ME = "lightgreen"

var plot_spec = {
    "title": "Window size: 1000",
    //"subtitle": "Atlantic population (dark) and Mediterranean (light)",
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
                "value": "NORMALIZED_SAMPLES",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-2"},
            "y": { "field": "NORMALIZED_SAMPLES", "type": "quantitative", "axis": "left"},
            "color": { "value": color_nr_samples_AT }, // Green for Nr. of samples
            "opacity": { "value": opacity_AT}, // Opacity for Atlantic
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
                {"field": "NORMALIZED_SAMPLES", "type": "quantitative", "format":"0.2f","alt":"Atlantic - Nr of samples:"}
                   ],              
            
        },
        // ¤¤¤¤¤¤¤¤¤ Mediterranean  ¤¤¤¤¤¤¤¤¤

        {
            "data": {
                "url": "",
                "type": "csv",
                "separator": "\t",
                "column": "POS",
                "value": "NORMALIZED_SAMPLES",
                "sampleLength": "100000", //how many rows the file is
            },
            "mark": "line",
            "x": { "field": "POS", "type": "genomic", "axis": "bottom", "linkingId": "link-2" },
            "y": { "field": "NORMALIZED_SAMPLES", "type": "quantitative", "axis": "none" },
            "color": { "value": color_nr_samples_ME }, // Green for Nr. of samples
            "opacity": { "value": opacity_ME}, // Opacity for Mediterranean
            "size": { "value": size_val }, //the width of the line
            "tooltip": [
                {"field": "NORMALIZED_SAMPLES", "type": "quantitative", "format":"0.2f","alt":"Mediterranean - Nr of samples:"}
                   ],              
    
        },
    ]
};

export { plot_spec }; 
// console.log(plot_spec.title);
// console.log(JSON.stringify(plot_spec.tracks, null, 2));