import { embed } from 'gosling.js';
import { plot_spec as plot_1_Spec } from './GUI_plot_spec.js';
import { trackTemplate } from './track.js';

let plotSpec;

async function URLfromFile(fileInputs, button_data_track_number) {
    try {
        const fileURL = URL.createObjectURL(fileInputs[button_data_track_number].files[0]);
        if (fileURL) {
            const track = { ...trackTemplate };
            const columnSelector = document.getElementById('columnSelector');
            const columnLabel = document.getElementById('columnLabel');

            columnSelector.style.display = 'block';
            columnLabel.style.display = 'block';
            columnSelector.innerHTML = '<option value="" disabled selected>Select a column</option>';

            // Display initial plot before column selection
            await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);

            // Continue with column selection setup
            await configureDataType(fileInputs[button_data_track_number].files[0], track, fileURL, button_data_track_number);
            // console.log('Track after URLfromFile:', track);
        }
    } catch (error) {
        console.error(error);
    }
}
async function extractHeader(file, track) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const text = reader.result;
            const data = text.split('\n').map(row => row.split(track.data.separator));
            const header = data[0];
            resolve(header);
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

async function configureDataType(fileInput, track, fileURL, button_data_track_number) {
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

        const header = await extractHeader(fileInput, track);
        const columnSelector = document.getElementById('columnSelector');

        header.forEach((column, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = column;
            columnSelector.appendChild(option);
        });

        if (track.data.value === '') {
            const columnLabel = document.getElementById('columnLabel');
            columnSelector.style.display = 'block';
            columnLabel.style.display = 'block';

            columnSelector.addEventListener('change', async function () {
                const chosenColumnName = columnSelector.options[columnSelector.selectedIndex].textContent;
                track.data.value = chosenColumnName;
                const trackY = track.y;
                trackY.field = chosenColumnName;

                await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
                console.log('Track after column selection:', track);
            });
        } else {
            // Display a message if the y column is predefined
            if (track.data.value !== "") {
                const presetYInfo = document.createElement('div');
                presetYInfo.textContent = 'The y-value column is predefined in track.js (y_col_preset is not an empty string).';
                // Adjust the styles for the message as needed
                presetYInfo.style.color = 'red';
                presetYInfo.style.fontWeight = 'bold';
                // Append the message to the document body or any specific container
                document.body.appendChild(presetYInfo);
            }
            
            await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
        }
    } catch (error) {
        console.error(error);
    }
}async function GoslingPlotWithLocalData(fileURL, button_data_track_number, track) {
    try {
        const containerId = 'plot-container';

        if (button_data_track_number === 0) {
            track = plot_1_Spec.tracks[button_data_track_number];
            const trackData = track.data;
            plotSpec = plot_1_Spec;
            trackData.url = fileURL;

            console.log('Track before embedding:', track);

            if (track.y && typeof track.y.field !== 'undefined' && track.y.field !== '') {
                const container = document.getElementById(containerId);
                const newPlot = await embed(container, plotSpec);
                // Additional actions with the newPlot if needed
            } else {
                console.error('track.y.field is not defined');
                // Handle the case where track.y.field is not defined or empty
            }
        } else {
            console.error('Invalid button_data_track_number:', button_data_track_number);
            return;
        }
    } catch (error) {
        console.error(error);
    }
}

export { URLfromFile, GoslingPlotWithLocalData };
