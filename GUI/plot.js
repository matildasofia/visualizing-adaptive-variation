import { embed } from 'gosling.js';
import { plot_spec as plot_1_Spec } from './GUI_plot_spec.js';

/* Generates a URL for the selected file(s), plots if URL has been created. */
async function URLfromFile(fileInputs, button_data_track_number) {
    try {
        const fileURL = URL.createObjectURL(fileInputs[button_data_track_number].files[0]);;
        if (fileURL) {
            GoslingPlotWithLocalData(fileURL, button_data_track_number, fileInputs[button_data_track_number].files[0]);
        }
    } catch (error) {
        console.error(error);
    }
}

async function GoslingPlotWithLocalData(fileURL, button_data_track_number, fileInput) {
    try {
        let trackData;
        let plotSpec;
        let containerId;

        if (button_data_track_number == 0) {
            trackData = plot_1_Spec.tracks[button_data_track_number].data;
            plotSpec = plot_1_Spec;
            containerId = 'plot-container';
            trackData.url = fileURL;

            configureDataType(fileInput, trackData);
        }
        else {
            console.error('Invalid button_data_track_number:', button_data_track_number);
            return;
        }
        if (button_data_track_number >= 0 && button_data_track_number <= 1) {
            // Create a new plot for each container
            const container = document.getElementById(containerId);
            const newPlot = await embed(container, plotSpec);
        }
    }
    catch (error) {
        console.error(error);
    }
}

async function configureDataType(fileInput, trackData) {
    const fileType = fileInput.type;
    
    if (fileType == "text/tab-separated-values") {
        trackData.type = "csv";
        trackData.separator = "\t";
    }
    else if (fileType == "text/csv") {
        trackData.type = "csv";
        trackData.separator = ",";
    }
    else {
        console.error('Invalid data type');
        return;
    }
}

export { URLfromFile, GoslingPlotWithLocalData };