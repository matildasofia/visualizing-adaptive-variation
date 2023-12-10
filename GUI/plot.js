import { embed } from 'gosling.js';
import { plot_spec as plot_1_Spec } from './plot_spec.js';
import { track } from './track_spec.js';
import { handleOptions } from './update_plot_specifications.js';
import { track_params, spec_params } from "./parameters/spec_parameters.js";

export async function URLfromFile(fileInputs, button_data_track_number) {
    try {
        const fileURL = URL.createObjectURL(fileInputs[button_data_track_number].files[0]);
        if (fileURL) {
            await checkURLParameters(track);
            await configureDataType(fileInputs[button_data_track_number].files[0], track);
            await handleOptions(fileInputs[button_data_track_number].files[0], track, fileURL, button_data_track_number);
        }
    } catch (error) {
        console.error(error);
    }
}

async function configureDataType(fileInput, track) {
    try {
        const fileName = fileInput.name;
        const extension = fileName.substring(fileName.lastIndexOf('.') + 1);

        if (!track.data || typeof track.data !== 'object') {
            track.data = {};
        }

        if (extension === 'tsv') {
            track.data.type = 'csv';
            track.data.separator = '\t';
        } else if (extension === 'csv') {
            track.data.type = 'csv';
            track.data.separator = ',';
        } else {
            console.error('Invalid data type');
            return;
        }
    } catch (error) {
        console.error(error);
    }
}

export async function GoslingPlotWithLocalData(fileURL, button_data_track_number, track) {
    try {
        if (button_data_track_number === 0) {
            track = plot_1_Spec.tracks[button_data_track_number];
            track.data.url = fileURL;
            if (track.y && typeof track.y.field !== 'undefined' && track.y.field !== '' && track.x && typeof track.x.field !== 'undefined' && track.x.field !== '') {
                const container = document.getElementById('plot-container');
                await embed(container, { ...plot_1_Spec, tracks: [track] });
            } else {
                console.error('track.y.field or track.x.field is not defined');
            }
        } else {
            console.error('Invalid button_data_track_number:', button_data_track_number);
            return;
        }
    } catch (error) {
        console.error(error);
    }
}

async function checkURLParameters(track) {
    var url = new window.URL(document.location); 
    try {
        if (url.searchParams.size > 0) { 
            var urlSearch = url.searchParams;
            if (urlSearch.has("xcolumn")) {
                track.data.column = urlSearch.get("xcolumn");
                track.x.field = urlSearch.get("xcolumn");
            }
            if (urlSearch.has("ycolumn")) {
                track.data.value = urlSearch.get("ycolumn");
                track.y.field = urlSearch.get("ycolumn");
            }
            if (urlSearch.has("mark")) {
                track.mark = urlSearch.get("mark");
            }
            if (urlSearch.has("color")) {
                track.color.value = urlSearch.get("color");
            }
            if (urlSearch.has("yInterval")) {
                track.y.domain = urlSearch.get("yInterval").split(",").map(Number);
            }
            if (urlSearch.has("binsize")) {
                track.data.binSize = urlSearch.get("binsize");
            }
            if (urlSearch.has("samplelength")) {
                track.data.sampleLength = urlSearch.get("samplelength");
            }
            if (urlSearch.has("xInterval")) {
                plot_1_Spec.xDomain.interval = urlSearch.get("xInterval").split(",").map(Number);
            }
            if (urlSearch.has("bcolor")) {
                plot_1_Spec.style.background = urlSearch.get("bcolor");
            }
            console.log(plot_1_Spec);
            console.log(urlSearch);
        }
    } catch (error) {
        console.error(error);
    }
}

