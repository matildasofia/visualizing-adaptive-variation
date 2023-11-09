// Import Gosling.js library
import * as gosling from "https://esm.sh/gosling.js@0.9.22?bundle&deps=react-dom@17,react@17,pixi.js@6,higlass@1.11";

// Your Gosling.js code to create and embed the visualization
let el = document.querySelector('#vis');
let spec = {
    // Your Gosling specification goes here
};
let opts = {
    // Your options go here
};
gosling.embed(el, spec, opts).catch(err => {
    // Handle errors if any
});
