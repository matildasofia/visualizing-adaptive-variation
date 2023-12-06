// HTML options for user
export async function data_options(container) {
    container.innerHTML = `

<button class="plot-button" data-track="0">Select file</button>
<input type="file" class="file-input" style="display: none;">

<div class="column-container" id="column-container">
    <div id="columnLabelX">X-axis:</div>
    <select id="columnSelectorX">
        <option value="" disabled selected>Select a column for X</option>
    </select>
</div>

<div class="column-container" id="column-container">
    <div id="columnLabelY">Y-axis:</div>
    <select id="columnSelectorY">
        <option value="" disabled selected>Select a column for Y</option>
    </select>
</div>

`};