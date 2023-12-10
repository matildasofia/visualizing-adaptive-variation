// Importing other modules
import { trackTemplate } from './track_spec.js';

function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }

  const copied = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copied[key] = deepCopy(obj[key]);
    }
  }

  return copied;
}

class PlotSpecSingleton {
  constructor() {
    if (!PlotSpecSingleton.instance) {
      this.plotSpec = {
        "title": "",
        "static": false,
        "xDomain": { "interval": [0, 200000] },
        "alignment": "overlay",
        "width": 1100,
        "height": 300,
        "assembly": "unknown",
        "style": {
          "background": "#D3D3D3",
          "backgroundOpacity": 0.1
        },
        "tracks": [this.createTrack(), this.createTrack()]
      };
      PlotSpecSingleton.instance = this;
    }

    return PlotSpecSingleton.instance;
  }

  createTrack() {
    return deepCopy(trackTemplate);
  }

  updatePlotSpec(newPlotSpec) {
    this.plotSpec = newPlotSpec;
  }

  getPlotSpec() {
    return this.plotSpec;
  }
}

const plotSpecSingleton = new PlotSpecSingleton();

export { plotSpecSingleton };
