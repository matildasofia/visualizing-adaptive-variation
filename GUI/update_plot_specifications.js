import { GoslingPlotWithLocalData } from './plot.js';
import { plot_spec as plot_1_Spec } from './plot_spec.js';

export async function handleOptions(fileInput, track, fileURL, button_data_track_number) {
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

    bcolor.addEventListener('change', async function () {
        const chosenBcolor = bcolor.value;
        plot_1_Spec.style.background = chosenBcolor;
        await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
    });

    x_interval_button.addEventListener('click', async function () {
        const startValue = document.getElementById('x_start').value;
        const endValue = document.getElementById('x_end').value;
        const start = parseFloat(startValue);
        const end = parseFloat(endValue);

        const intervalArray = [start, end];
        plot_1_Spec.xDomain.interval = intervalArray;
        await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
    });

    y_interval_button.addEventListener('click', async function () {
        const startValue = document.getElementById('y_start').value;
        const endValue = document.getElementById('y_end').value;
        const start = parseFloat(startValue);
        const end = parseFloat(endValue);

        const intervalArray = [start, end];
        track.y.domain = intervalArray;
        await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
    });

    binsize_button.addEventListener('click', async function () {
        const binsize = document.getElementById('binsize').value;
        track.data.binSize = binsize;
        await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
    });

    samplelength_button.addEventListener('click', async function () {
        const samplelength = document.getElementById('samplelength').value;
        track.data.sampleLength = samplelength;
        await GoslingPlotWithLocalData(fileURL, button_data_track_number, track);
    });
};


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
