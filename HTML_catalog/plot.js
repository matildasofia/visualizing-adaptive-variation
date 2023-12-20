// Functions used to embed, display and update Gosling visualizations.

// Imports needed for using functions in this script.
import { embed } from 'gosling.js';
import { plot_spec as plot_1_Spec } from './plot_scripts/plot_1_FST.js';
import { plot_spec as plot_2_θ_Spec } from './plot_scripts/plot_2_θ.js';
import { plot_spec as plot_2_π_Spec } from './plot_scripts/plot_2_π.js';
import { plot_spec as plot_2_td_Spec } from './plot_scripts/plot_2_td.js';
import { plot_spec as plot_3_Spec_MD } from './plot_scripts/plot_3_mapping_depths.js';
import { plot_spec as plot_3_Spec_Nr_samples } from './plot_scripts/plot_3_nr_of_samples.js';
import { plot_spec as plot_3_Spec_MD_Normalized } from './plot_scripts/plot_3_mapping_depths_normalized.js';
import { plot_spec as plot_3_Spec_Nr_samples_Normalized } from './plot_scripts/plot_3_nr_of_samples_normalized.js';

/**
 * Asynchronous function to embed and display a collection of Gosling visualizations.
 *
 * @throws {Error} If there is an issue embedding the plot specification.
 */
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

/**
 * Asynchronous function to update Gosling plots with local data.
 * 
 * Inputs:
 * @param {string} filePath - The file path to the local data.
 * @param {number} data_track_number - The number specifying the data track to be updated.
 * 
 * @throws {Error} If an unsupported data_track_number is provided.
 */
async function GoslingPlotWithLocalData(filePath, data_track_number) {
    try {
        let trackData;

        // Data tracks for plot 1
        if (data_track_number <= 1) {
            trackData = plot_1_Spec.tracks[data_track_number].data;
            trackData.url = filePath;
        }

        // Data tracks for plot 2-4
        else if (data_track_number == 2) {
            plot_2_π_Spec.tracks.slice(0, 1).forEach((track) => {
                track.data.url = filePath;
            });

            plot_2_π_Spec.tracks.slice(1, 2).forEach((track) => {
                track.data.url = filePath;
            });

            plot_2_θ_Spec.tracks.slice(0, 1).forEach((track) => {
                track.data.url = filePath;
            });

            plot_2_θ_Spec.tracks.slice(1, 2).forEach((track) => {
                track.data.url = filePath;
            });

            plot_2_td_Spec.tracks.slice(0, 1).forEach((track) => {
                track.data.url = filePath;
            });
            plot_2_td_Spec.tracks.slice(1, 2).forEach((track) => {
                track.data.url = filePath;
            });
        }

        // Data tracks for plot 5-8
        // Atlantic data
        else if (data_track_number == 3) {
            plot_3_Spec_MD.tracks.slice(0, 1).forEach((track) => {
                track.data.url = filePath;
            });

            plot_3_Spec_Nr_samples.tracks.slice(0, 1).forEach((track) => {
                track.data.url = filePath;
            });

            plot_3_Spec_MD_Normalized.tracks.slice(0, 1).forEach((track) => {
                track.data.url = filePath;
            });

            plot_3_Spec_Nr_samples_Normalized.tracks.slice(0, 1).forEach((track) => {
                track.data.url = filePath;
            });
        }

        // Data tracks for plot 5-8
        // Mediterranian data
        else if (data_track_number == 4) {
            plot_3_Spec_MD.tracks.slice(1, 2).forEach((track) => {
                track.data.url = filePath;
            });

            plot_3_Spec_Nr_samples.tracks.slice(1, 2).forEach((track) => {
                track.data.url = filePath;
            });
            plot_3_Spec_MD_Normalized.tracks.slice(1, 2).forEach((track) => {
                track.data.url = filePath;
            });

            plot_3_Spec_Nr_samples_Normalized.tracks.slice(1, 2).forEach((track) => {
                track.data.url = filePath;
            });

        }
        else {
            console.error('Invalid data_track_number:', data_track_number);
            return;
        }

    }
    catch (error) {
        console.error(error);
    }
}

// Export functions defined in this script.
export { PlotAll, GoslingPlotWithLocalData };