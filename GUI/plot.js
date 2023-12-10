import { embed } from 'gosling.js';
import { plotSpecSingleton } from './PlotSpecSingleton.js';
import { handleOptions } from './update_plot_specifications.js';

const plotSpec = plotSpecSingleton.getPlotSpec(); // Get the current plot spec
export async function URLfromFile(fileInputs, button_data_track_number) {
    try {
        console.log('Plot Spec Before working on new track:', plotSpec);
        const fileURL = URL.createObjectURL(fileInputs[button_data_track_number].files[0]);
        const current_track = plotSpec.tracks[button_data_track_number];
        if (fileURL) {
            current_track.data.url = fileURL;
            console.log('Track:', current_track);
            console.log('Button Data Track Number:', button_data_track_number);
            console.log('Plot Spec after added fileURL in URLfromFile:', plotSpec);

            await checkURLParameters(current_track);
            await configureDataType(fileInputs[button_data_track_number].files[0], current_track);
            console.log('Plot Spec after configureDataType in URLfromFile:', plotSpec);
            await handleOptions(fileInputs[button_data_track_number].files[0],button_data_track_number);
            console.log('Plot Spec after handleOptions in URLfromFile:', plotSpec);
            // await GoslingPlotWithLocalData();

        }
    } catch (error) {
        console.log('URL error');
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
        console.log('CDT error');
        console.error(error);
    }
}

export async function GoslingPlotWithLocalData() {
    try {
        const plotSpec = plotSpecSingleton.getPlotSpec(); // Get the current plot spec
            
        // const trackok = plotSpec.tracks[button_data_track_number];
        // track.data.url = fileURL;
        console.log(plotSpec)
        const container = document.getElementById('plot-container');
        await embed(container, plotSpec); // Embed the updated plotSpec
    } catch (error) {
        console.log('GPWLD error');
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

