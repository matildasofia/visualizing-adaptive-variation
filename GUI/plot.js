import { embed } from 'gosling.js';
import { plot_spec as plot_1_Spec } from './GUI_plot_spec.js';
import { trackTemplate as track } from './track.js';

async function URLfromFile(fileInputs, button_data_track_number) {
    try {
        const fileURL = URL.createObjectURL(fileInputs[button_data_track_number].files[0]);

        if (fileURL) {
            document.getElementById('columnSelectorX').innerHTML = '<option value="" disabled selected>Select a column for X</option>';
            document.getElementById('columnSelectorY').innerHTML = '<option value="" disabled selected>Select a column for Y</option>';

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
        setOptions(fileInput, track, fileURL, button_data_track_number);

    } catch (error) {
        console.error(error);
    }
}

async function setOptions(fileInput, track, fileURL, button_data_track_number) {
    const header = await extractHeader(fileInput, track);

    header.forEach((column, index) => {
        const optionX = document.createElement('option');
        const optionY = document.createElement('option');
        optionX.value = index;
        optionX.textContent = column;
        optionY.value = index;
        optionY.textContent = column;
        document.getElementById('columnSelectorX').appendChild(optionX);
        document.getElementById('columnSelectorY').appendChild(optionY);
    });

    columnSelectorX.addEventListener('change', async function () {
        const chosenColumnName = columnSelectorX.options[columnSelectorX.selectedIndex].textContent;
        track.data.column = chosenColumnName;
        const trackX = track.x;
        trackX.field = chosenColumnName;
        await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
    });
    columnSelectorY.addEventListener('change', async function () {
        const chosenColumnName = columnSelectorY.options[columnSelectorY.selectedIndex].textContent;
        track.data.value = chosenColumnName;
        const trackY = track.y;
        trackY.field = chosenColumnName;
        await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
    });

    mark.addEventListener('change', async function () {
        const chosenMark = mark.value;
        track.mark = chosenMark;
        await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
    });

    color.addEventListener('change', async function () {
        const chosenColor = color.value;
        track.color.value = chosenColor;
        await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
    });

    size.addEventListener('change', async function () {
        const chosenSize = size.value;
        track.size.value = chosenSize;
        await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
    });

    bcolor.addEventListener('change', async function () {
        const chosenBcolor = bcolor.value;
        plot_1_Spec.style.background = chosenBcolor;
        await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
    });
};


async function GoslingPlotWithLocalData(fileURL, button_data_track_number, track) {
    try {
        const containerId = 'plot-container';
        if (button_data_track_number === 0) {
            track = plot_1_Spec.tracks[button_data_track_number];
            track.data.url = fileURL;
            if (track.y && typeof track.y.field !== 'undefined' && track.y.field !== '' && track.x && typeof track.x.field !== 'undefined' && track.x.field !== '') {
                const container = document.getElementById(containerId);
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


export { URLfromFile, GoslingPlotWithLocalData };

