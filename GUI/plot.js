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
 * Check and update plot specifications based on URL query parameters.
 * 
 * @param {object} track - Track object.
 * @param {number} track_nr - Track number.
 */
async function checkURLParameters(track, track_nr) {
    var url = new window.URL(document.location);
    try {
        if (url.searchParams.size > 0) {
            const urlSearch = url.searchParams;
            const generateParamName = param => `${param}${track_nr}`;
            
            track.data.column = track.x.field = track.tooltip[1].field = track.tooltip[1].alt = urlSearch.get(generateParamName("x.field")) || track.data.column;
            track.data.value = track.y.field = track.tooltip[0].field = track.tooltip[0].alt = urlSearch.get(generateParamName("y.field")) || track.data.value;
            track.mark = urlSearch.get(generateParamName("mark")) || track.mark;
            track.size.value = parseInt(urlSearch.get(generateParamName("size.value"))) || track.size.value;
            track.color.value = urlSearch.get(generateParamName("color.value")) || track.color.value;
            track.data.binSize = urlSearch.get(generateParamName("data.binSize")) || track.data.binSize;
            track.data.sampleLength = urlSearch.get(generateParamName("sampleLength")) || track.data.sampleLength;

            plotSpec.tracks[0].y.domain = urlSearch.has("y.domain") ? urlSearch.get("y.domain").split(",").map(Number) : track.y.domain;
            plotSpec.tracks[1].y.domain = urlSearch.has("y.domain") ? urlSearch.get("y.domain").split(",").map(Number) : track.y.domain;
            plotSpec.xDomain.interval = urlSearch.has("xDomain.interval") ? urlSearch.get("xDomain.interval").split(",").map(Number) : plotSpec.xDomain.interval;
            plotSpec.style.background = urlSearch.get("background") || plotSpec.style.background;
        }
        console.log(plotSpec);
    } catch (error) {
        console.error(error);
    }
}

