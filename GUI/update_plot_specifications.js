import { GoslingPlotWithLocalData } from './plot.js';
import { plotSpecSingleton } from './PlotSpecSingleton.js';

const plotSpec = plotSpecSingleton.getPlotSpec(); // Get the current plot spec
const fileHeaders = new Map();
export async function handleOptions(data, button_data_track_number) {
    const columnSelectorsX = document.querySelectorAll(`.columnSelectorX[data-track="${button_data_track_number}"]`);
    const columnSelectorsY = document.querySelectorAll(`.columnSelectorY[data-track="${button_data_track_number}"]`);
    let header = []; // Declare header outside the if-else blocks
    // Check if the provided data is a file or a URL
    if (data instanceof File) {
        // Data is a local file, use FileReader to extract header
        header = await extractHeader(data, button_data_track_number);
        console.log("Header extracted from file:", header);
        // Proceed with handling the extracted header...
    } else if (data instanceof Blob) {
        // Data is a Blob (assumed to be from a server)
        header = await extractHeaderFromServer(data, button_data_track_number);
        console.log("Header extracted from server data:", header);
        // Proceed with handling the extracted header...
    } else {
        console.error("Invalid data type. Expected File or Blob.");
    }
    // ¤¤¤¤¤¤¤¤¤¤ Creating the dropdown menues for each track ¤¤¤¤¤¤¤¤¤¤  

    if (!fileHeaders.has(button_data_track_number)) {
        fileHeaders.set(button_data_track_number, new Set());
    }

    const columns = fileHeaders.get(button_data_track_number);
    console.log("Current track:", button_data_track_number)
    console.log("header", header)

    console.log("columns for track 0:", fileHeaders.get(0))
    console.log("columns for track 1:", fileHeaders.get(1))

    if (!arraysEqual(Array.from(columns), header)) {
        columns.clear();
        header.forEach(column => {
            columns.add(column);
        });

        columnSelectorsX.forEach(columnSelectorX => {
            clearOptions(columnSelectorX);
            header.forEach((column, index) => {
                const optionX = document.createElement('option');
                optionX.value = index;
                optionX.textContent = column;
                columnSelectorX.appendChild(optionX);
            });
        });

        columnSelectorsY.forEach(columnSelectorY => {
            clearOptions(columnSelectorY);
            header.forEach((column, index) => {
                const optionY = document.createElement('option');
                optionY.value = index;
                optionY.textContent = column;
                columnSelectorY.appendChild(optionY);
            });
        });
    }
    // Event listeners for dropdown menu changes (adapt as needed)
    columnSelectorsX.forEach(columnSelectorX => {
        columnSelectorX.addEventListener('change', async function () {
            const trackValue = columnSelectorX.getAttribute('data-track');
            const selectedValue = columnSelectorX.value;
            const chosenColumnName = columnSelectorX.options[selectedValue].textContent;

            plotSpec.tracks[trackValue].data.column = chosenColumnName;
            plotSpec.tracks[trackValue].x.field = chosenColumnName;

            // Update plot data
            await GoslingPlotWithLocalData();
            // Update URL parameters
            updateURLParameters(columnSelectorX.getAttribute("id"), chosenColumnName);
        });
    });

    // Event listeners for dropdown menu changes (adapt as needed)
    columnSelectorsY.forEach(columnSelectorY => {
        columnSelectorY.addEventListener('change', async function () {
            const trackValue = columnSelectorY.getAttribute('data-track');
            const selectedValue = columnSelectorY.value;
            const chosenColumnName = columnSelectorY.options[selectedValue].textContent;

            plotSpec.tracks[trackValue].data.value = chosenColumnName;
            plotSpec.tracks[trackValue].y.field = chosenColumnName;

            // Update plot data
            await GoslingPlotWithLocalData();
            // Update URL parameters
            updateURLParameters(columnSelectorY.getAttribute("id"), chosenColumnName);
        });
    });

    const markButtons = document.querySelectorAll('.mark'); // Find buttons belonging to the 'mark' class
    markButtons.forEach(button => {
        button.addEventListener('change', async function () {
            const trackValue = button.getAttribute('data-track');
            const chosenmark = button.value;

            plotSpec.tracks[trackValue].mark = chosenmark;

            // Update plot data
            await GoslingPlotWithLocalData();
            // Update URL
            await updateURLParameters(button.getAttribute("id"), button.value);
        });
    });

    const colorButtons = document.querySelectorAll('.color'); // Find buttons belonging to the 'color' class
    colorButtons.forEach(button => {
        button.addEventListener('change', async function () {
            const trackValue = button.getAttribute('data-track');
            const chosencolor = button.value;

            plotSpec.tracks[trackValue].color.value = chosencolor;

            // Update plot data
            await GoslingPlotWithLocalData();
            // Update URL
            await updateURLParameters(button.getAttribute("id"), button.value);
        });
    });



    bcolor.addEventListener('change', async function () {
        const chosenBcolor = bcolor.value;
        plotSpec.style.background = chosenBcolor;
        await GoslingPlotWithLocalData();
        // updateURLParameters(bcolor.name, bcolor.value);
        // Update URL
        await updateURLParameters(bcolor.name, bcolor.value);
    });

    x_interval_button.addEventListener('click', async function () {
        const startValue = document.getElementById('x_start').value;
        const endValue = document.getElementById('x_end').value;
        const start = parseFloat(startValue);
        const end = parseFloat(endValue);

        const intervalArray = [start, end];
        plotSpec.xDomain.interval = intervalArray;
        await GoslingPlotWithLocalData();

        const xInterval = "xInterval";
        updateURLParameters(xInterval, intervalArray);
    });

    y_interval_button.addEventListener('click', async function () {
        const startValue = document.getElementById('y_start').value;
        const endValue = document.getElementById('y_end').value;
        const start = parseFloat(startValue);
        const end = parseFloat(endValue);

        const intervalArray = [start, end];
        plotSpec.tracks[0].y.domain = intervalArray;
        plotSpec.tracks[1].y.domain = intervalArray;
        await GoslingPlotWithLocalData();

        const yInterval = "yInterval";
        updateURLParameters(yInterval, intervalArray);
    });

    const binsizeButtons = document.querySelectorAll('.binsize'); // Find buttons belonging to the 'binsize' class
    binsizeButtons.forEach(button => {
        button.addEventListener('click', async function () {
            const trackValue = button.getAttribute('data-track');
            // const chosenbinsize = parseFloat(button.value);
            // Find the associated input field or use a data attribute
            const inputField = document.getElementById(`binsize_${trackValue}`);
            // Parse the value from the input field or data attribute
            const chosenbinsize = parseFloat(inputField.value);

            plotSpec.tracks[trackValue].data.binSize = chosenbinsize;

            // Update plot data
            await GoslingPlotWithLocalData();
            //Update URL parameters
            updateURLParameters(button.getAttribute('id'), chosenbinsize);
        });
    });

    const samplelengthButtons = document.querySelectorAll('.samplelength'); // Find buttons belonging to the 'samplelength' class

    samplelengthButtons.forEach(button => {
        button.addEventListener('click', async function () {
            const trackValue = button.getAttribute('data-track');
            // Find the associated input field
            const inputField = document.getElementById(`samplelength_${trackValue}`);
            // Parse the value from the input field as a float
            const chosensamplelength = parseFloat(inputField.value);

            plotSpec.tracks[trackValue].data.sampleLength = chosensamplelength;

            // Update plot data
            await GoslingPlotWithLocalData();
            // Uptade URL parameters
            updateURLParameters(button.getAttribute('id'), chosensamplelength);
        });
    });


    const marksizeButtons = document.querySelectorAll('.marksize'); // Find buttons belonging to the 'marksize' class
    marksizeButtons.forEach(button => {
        button.addEventListener('click', async function () {
            const trackValue = button.getAttribute('data-track');
            // Find the associated input field
            const inputField = document.getElementById(`marksize_${trackValue}`);
            // Parse the value from the input field
            const chosenmarksize = parseFloat(inputField.value);
            console.log("chosen marker size", chosenmarksize)

            plotSpec.tracks[trackValue].size.value = chosenmarksize;

            // Update plot data
            await GoslingPlotWithLocalData();
            // Uptade URL parameters
            updateURLParameters(button.getAttribute('id'), chosenmarksize);
        });
    });
}


function clearOptions(selectElement) {
    while (selectElement.options.length > 0) {
        selectElement.remove(0);
    }
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}



async function extractHeader(file, button_data_track_number) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const text = reader.result;
            const data = text.split('\n').map(row => row.split(plotSpec.tracks[button_data_track_number].data.separator));
            const header = data[0];
            resolve(header);
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

async function extractHeaderFromServer(fileBlob, button_data_track_number) {
    try {
        const text = await new Response(fileBlob).text(); // Convert fileBlob to text
        const data = text.split('\n').map(row => row.split(plotSpec.tracks[button_data_track_number].data.separator));
        const header = data[0];
        
        return header;
    } catch (error) {
        console.error('Error fetching or processing data:', error);
        return null;
    }
}



async function updateURLParameters(parameter, value) {
    var url = new window.URL(document.location);
    url.searchParams.set(parameter, value);
    history.pushState({}, '', url);
}
