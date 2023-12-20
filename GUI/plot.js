import { embed } from 'gosling.js';
import { plotSpecSingleton } from './PlotSpecSingleton.js';
import { handleOptions } from './update_plot_specifications.js';

const plotSpec = plotSpecSingleton.getPlotSpec(); // Get the current plot spec

/**
 * Handle data from a local file input.
 * 
 * @param {FileList} fileInputs - List of file inputs.
 * @param {number} button_data_track_number - Button data track number.
 */
export async function URLfromFile(fileInputs, button_data_track_number) {
    try {
        const fileInput = fileInputs[button_data_track_number].files[0];
        const fileName = fileInput.name;
        const extension = fileName.substring(fileName.lastIndexOf('.') + 1);
        const current_track = plotSpec.tracks[button_data_track_number];
        const fileURL = URL.createObjectURL(fileInput);
        if (fileURL) {
            current_track.data.url = fileURL;
            await checkURLParameters(current_track, button_data_track_number);
            await configureDataType(extension, current_track);
            await handleOptions(fileInput, button_data_track_number);
            await GoslingPlotWithLocalData();

        }
    } catch (error) {
        console.error(error);
    }
}

/**
 * Handle data from a server URL input.
 * 
 * @param {string} URL_input - Server URL input.
 * @param {number} button_data_track_number - Button data track number.
 */
export async function URLfromServer(URL_input, button_data_track_number) {
    try {
        const current_track = plotSpec.tracks[button_data_track_number];
        if (URL_input) {
            current_track.data.url = URL_input;
            // #1: Extracting the file extension from the URL (Everything after the final "/")
            const filename = URL_input.substring(URL_input.lastIndexOf('/') + 1);
            const extension = filename.substring(filename.lastIndexOf('.') + 1); // Exclude the "."
            // #2: Retrieve the webserver data (fetching the file)
            const response = await fetch(URL_input);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const fileBlob = await response.blob(); // Retrieve the file data
            await checkURLParameters(current_track, button_data_track_number);
            await configureDataType(extension, current_track);
            await handleOptions(fileBlob, button_data_track_number);
            await GoslingPlotWithLocalData();

        }
    } catch (error) {
        console.error(error);
    }
}

/**
 * Configure data type based on file extension.
 * 
 * @param {string} extension - File extension.
 * @param {object} track - Track object.
 */
async function configureDataType(extension, track) {
    try {

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

/**
 * Embed the Gosling plot with local data.
 */
export async function GoslingPlotWithLocalData() {
    try {
        const plotSpec = plotSpecSingleton.getPlotSpec(); // Get the current plot spec            
        const container = document.getElementById('plot-container');
        await embed(container, plotSpec); // Embed the updated plotSpec
    } catch (error) {
        console.error(error);
    }
}

/**
 * Check and update URL parameters for a track.
 * 
 * @param {object} track - Track object.
 * @param {number} track_nr - Track number.
 */
async function checkURLParameters(track, track_nr) {
    var url = new window.URL(document.location);
    try {
        if (url.searchParams.size > 0) {
            var urlSearch = url.searchParams;
            if (urlSearch.has("columnSelectorX_" + track_nr.toString())) {
                track.data.column = urlSearch.get("columnSelectorX_0");
                track.x.field = urlSearch.get("columnSelectorX_0");
            }
            if (urlSearch.has("columnSelectorY_" + track_nr.toString())) {
                track.data.value = urlSearch.get("columnSelectorY_0");
                track.y.field = urlSearch.get("columnSelectorY_0");
            }
            if (urlSearch.has("mark_" + track_nr.toString())) {
                track.mark = urlSearch.get("mark_0");
            }
            if (urlSearch.has("color_" + track_nr.toString())) {
                track.color.value = urlSearch.get("color_0");
            }
            if (urlSearch.has("yInterval")) {
                track.y.domain = urlSearch.get("yInterval").split(",").map(Number);
            }
            if (urlSearch.has("binsize_" + track_nr.toString())) {
                track.data.binSize = urlSearch.get("binsize_0");
            }
            if (urlSearch.has("samplelength_" + track_nr.toString())) {
                track.data.sampleLength = urlSearch.get("samplelength_0");
            }
            if (urlSearch.has("xInterval")) {
                plotSpec.xDomain.interval = urlSearch.get("xInterval").split(",").map(Number);
            }
            if (urlSearch.has("bcolor")) {
                plotSpec.style.background = urlSearch.get("bcolor");
            }
        }
    } catch (error) {
        console.error(error);
    }
}

