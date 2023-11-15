// general_test_gosling.ts
import { embed } from 'gosling.js'; // Correct path to the embed function

const el = document.getElementById('vis');
const opts = {}; // You can add options here if needed

if (el) {
  embed(el, {
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
  }, opts).catch((err) => {
    console.error('Error embedding Gosling visualization:', err);
  });
}
