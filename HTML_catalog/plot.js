
import { embed } from 'gosling.js';
import { plot_spec as plot_1_Spec } from '../plot_1_FST.js';
import { plot_spec as plot_2_θ_Spec } from '../plot_2_θ.js';
import { plot_spec as plot_2_π_Spec } from '../plot_2_π.js';
import { plot_spec as plot_2_td_Spec } from '../plot_2_td.js';
import { plot_spec as plot_3_Spec_MD } from '../plot_3_mapping_depths.js';
import { plot_spec as plot_3_Spec_Nr_samples } from '../plot_3_nr_of_samples.js';
import { plot_spec as plot_3_Spec_MD_Normalized } from '../plot_3_mapping_depths_normalized.js';
import { plot_spec as plot_3_Spec_Nr_samples_Normalized } from '../plot_3_nr_of_samples_normalized.js';
async function PlotAll() {
    try {
        const plotSpec = {
            "arrangement": "vertical",
            "views":
                [plot_1_Spec,
                    {
                        "arrangement": "horizontal",
                        "views": [
                            plot_2_π_Spec,
                            plot_2_θ_Spec
                        ]
                    },
                    plot_2_td_Spec,
                    {
                        "arrangement": "horizontal",
                        "views": [plot_3_Spec_MD,
                            plot_3_Spec_Nr_samples
                        ]
                    },
                    {
                        "arrangement": "horizontal",
                        "views": [
                            plot_3_Spec_MD_Normalized
                            ,
                            plot_3_Spec_Nr_samples_Normalized,
                        ]
                    }

                ],


            "responsiveSize": true
        };

        const container = document.getElementById('plot-container-1');
        await embed(container, plotSpec);
    }
    catch (error) {
        console.error("Error embedding plot:", error);
    }
};

async function URLfromFile(filePath, button_data_track_number) {
    try {
        const fileURL = filePath;
        if (fileURL) {
            GoslingPlotWithLocalData(fileURL, button_data_track_number);
        }
    } catch (error) {
        console.error(error);
    }
}

async function GoslingPlotWithLocalData(fileURL, button_data_track_number) {
    try {
        let trackData;
        let plotSpec;

        if (button_data_track_number <= 1) {
            trackData = plot_1_Spec.tracks[button_data_track_number].data;
            trackData.url = fileURL;
        }

        else if (button_data_track_number == 2) {
            plot_2_π_Spec.tracks.slice(0, 1).forEach((track) => {
                track.data.url = fileURL;
            });

            plot_2_π_Spec.tracks.slice(1, 2).forEach((track) => {
                track.data.url = fileURL;
            });

            plot_2_θ_Spec.tracks.slice(0, 1).forEach((track) => {
                track.data.url = fileURL;
            });

            plot_2_θ_Spec.tracks.slice(1, 2).forEach((track) => {
                track.data.url = fileURL;
            });

            plot_2_td_Spec.tracks.slice(0, 1).forEach((track) => {
                track.data.url = fileURL;
            });
            plot_2_td_Spec.tracks.slice(1, 2).forEach((track) => {
                track.data.url = fileURL;
            });
        }
        else if (button_data_track_number == 3) {
            plot_3_Spec_MD.tracks.slice(0, 1).forEach((track) => {
                track.data.url = fileURL;
            });

            plot_3_Spec_Nr_samples.tracks.slice(0, 1).forEach((track) => {
                track.data.url = fileURL;
            });

            plot_3_Spec_MD_Normalized.tracks.slice(0, 1).forEach((track) => {
                track.data.url = fileURL;
            });

            plot_3_Spec_Nr_samples_Normalized.tracks.slice(0, 1).forEach((track) => {
                track.data.url = fileURL;
            });
        }

        else if (button_data_track_number == 4) {
            plot_3_Spec_MD.tracks.slice(1, 2).forEach((track) => {
                track.data.url = fileURL;
            });

            plot_3_Spec_Nr_samples.tracks.slice(1, 2).forEach((track) => {
                track.data.url = fileURL;
            });
            plot_3_Spec_MD_Normalized.tracks.slice(1, 2).forEach((track) => {
                track.data.url = fileURL;
            });

            plot_3_Spec_Nr_samples_Normalized.tracks.slice(1, 2).forEach((track) => {
                track.data.url = fileURL;
            });

        }
        else {
            console.error('Invalid button_data_track_number:', button_data_track_number);
            return;
        }

    }
    catch (error) {
        console.error(error);
    }
}


export { PlotAll, URLfromFile, GoslingPlotWithLocalData };