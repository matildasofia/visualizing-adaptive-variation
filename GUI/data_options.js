// HTML options for user
export async function row1(container) {
    container.innerHTML = `

<button class="plot-button" data-track="0">Choose file</button>
<input type="file" class="file-input" style="display: none;">

<div class="column-container" id="column-container">
    <div id="columnLabelX"></div>
    <select id="columnSelectorX">
        <option value="" disabled selected>Select a column for X</option>
    </select>
</div>

<div class="column-container" id="column-container">
    <div id="columnLabelY"></div>
    <select id="columnSelectorY">
        <option value="" disabled selected>Select a column for Y</option>
    </select></div>`};
export async function row2(container) {
    container.innerHTML = `

  <label for="x_start">X-domain:</label>
  <input type="text" class="interval-input" id="x_start">
  <span>-</span>
  <input type="text" class="interval-input" id="x_end">
  <button id="x_interval_button">Apply</button>

  <label for="y_start">Y-domain:</label>
  <input type="text" class="interval-input" id="y_start">
  <span>-</span>
  <input type="text" class="interval-input" id="y_end">
  <button id="y_interval_button">Apply</button>

<label for="binsize">Bin size:</label>
<input type="text" class="interval-input" id="binsize">
<button id="binsize_button">Apply</button>

<label for="samplelength">Sample length:</label>
<input type="text" class="interval-input" id="samplelength">
<button id="samplelength_button">Apply</button>

  `};
