import { embed } from 'gosling.js';
import { plot_spec as plot_1_Spec } from './GUI_plot_spec.js';
import { trackTemplate } from './track.js';
let plotSpec;
async function URLfromFile(fileInputs, button_data_track_number) {
    try {
        const fileURL = URL.createObjectURL(fileInputs[button_data_track_number].files[0]);
        if (fileURL) {
            const track = { ...trackTemplate };
            const columnSelectorX = document.getElementById('columnSelectorX');
            const columnLabelX = document.getElementById('columnLabelX');
            const columnSelectorY = document.getElementById('columnSelectorY');
            const columnLabelY = document.getElementById('columnLabelY');
            columnSelectorX.style.display = 'block';
            columnLabelX.style.display = 'block';
            columnSelectorX.innerHTML = '<option value="" disabled selected>Select a column for X</option>';
            columnSelectorY.style.display = 'block';
            columnLabelY.style.display = 'block';
            columnSelectorY.innerHTML = '<option value="" disabled selected>Select a column for Y</option>';
            // Display initial plot before column selection
            await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
            // Continue with column selection setup
            await configureDataType(fileInputs[button_data_track_number].files[0], track, fileURL, button_data_track_number);
        }
    } catch (error) {
        console.error(error);
    }
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
        const columnSelectorX = document.getElementById('columnSelectorX');
        const columnSelectorY = document.getElementById('columnSelectorY');
        header.forEach((column, index) => {
            const optionX = document.createElement('option');
            const optionY = document.createElement('option');
            optionX.value = index;
            optionX.textContent = column;
            optionY.value = index;
            optionY.textContent = column;
            columnSelectorX.appendChild(optionX);
            columnSelectorY.appendChild(optionY);
        });
        // Check if X column is predefined
        if (track.data.column !== "") {
            const presetXInfo = document.createElement('div');
            presetXInfo.textContent = `The X column is predefined in track.js: ${track.data.column}`;
            presetXInfo.style.color = 'red';
            presetXInfo.style.fontWeight = 'bold';
            document.body.appendChild(presetXInfo);
        }
        // Check if Y column is predefined
        if (track.data.value !== "") {
            const presetYInfo = document.createElement('div');
            presetYInfo.textContent = `The Y column is predefined in track.js: ${track.data.value}`;
            presetYInfo.style.color = 'red';
            presetYInfo.style.fontWeight = 'bold';
            document.body.appendChild(presetYInfo);
        }
        // Continue with the X and Y selection setup
        columnSelectorX.addEventListener('change', async function () {
            const chosenColumnName = columnSelectorX.options[columnSelectorX.selectedIndex].textContent;
            track.data.column = chosenColumnName;
            const trackX = track.x;
            trackX.field = chosenColumnName;
            await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
            console.log('Track after X column selection:', track);
        });
        columnSelectorY.addEventListener('change', async function () {
            const chosenColumnName = columnSelectorY.options[columnSelectorY.selectedIndex].textContent;
            track.data.value = chosenColumnName;
            const trackY = track.y;
            trackY.field = chosenColumnName;
            await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
            console.log('Track after Y column selection:', track);
        });
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
async function GoslingPlotWithLocalData(fileURL, button_data_track_number, track) {
    try {
        const containerId = 'plot-container';
        if (button_data_track_number === 0) {
            track = plot_1_Spec.tracks[button_data_track_number];
            const trackData = track.data;
            plotSpec = plot_1_Spec;
            trackData.url = fileURL;
            console.log('Track before embedding:', track);
            if (track.y && typeof track.y.field !== 'undefined' && track.y.field !== '' && track.x && typeof track.x.field !== 'undefined' && track.x.field !== '') {
                const container = document.getElementById(containerId);
                // Embed the plotSpec directly
                const newPlot = await embed(container, { ...plotSpec, tracks: [track] });
                // Additional actions with the newPlot if needed
            } else {
                console.error('track.y.field or track.x.field is not defined');
                // Handle the case where track.y.field or track.x.field is not defined or empty
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

