import { embed } from 'gosling.js';

embed(document.getElementById('gosling-container'), {
    "tracks": [
        {
            "data": {
                "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                "type": "multivec",
                "row": "sample",
                "column": "position",
                "value": "peak",
                "categories": ["sample 1"],
            },
            "mark": "rect",
            "x": { "field": "position", "type": "genomic" },
            "color": { "field": "peak", "type": "quantitative", "legend": true },
            "width": 600,
            "height": 130,
        },
    ],
});
