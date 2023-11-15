"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// general_test_gosling.ts
var gosling_js_1 = require("gosling.js"); // Correct path to the embed function
var el = document.getElementById('vis');
var opts = {}; // You can add options here if needed
if (el) {
    (0, gosling_js_1.embed)(el, {
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
    }, opts).catch(function (err) {
        console.error('Error embedding Gosling visualization:', err);
    });
}
