// HTML options for user
export async function row1(container) {
    container.innerHTML = `
    <button class="plot-button" data-track="0">Choose file</button>
    <input type="file" class="file-input" style="display: none;">

    <div class="column-container" id="column-container">
        <div id="columnLabelX"></div>
        <select name="xcolumn" id="columnSelectorX_0" class="columnSelectorX" data-track="0">
            <option value="" disabled selected>Select a column for X</option>
        </select>
    </div>

    <div class="column-container" id="column-container">
        <div id="columnLabelY"></div>
        <select name="ycolumn" id="columnSelectorY_0" class="columnSelectorY" data-track="0">
            <option value="" disabled selected>Select a column for Y</option>
        </select>
    </div>`
};
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

  <label for="binsize_0">Bin size:</label>
  <input type="number" class="interval-input" name="binsize" id="binsize_0">
  <button class="binsize"  id="binsize_button_1" data-track="0">Apply</button>

  <label for="samplelength_0">Sample length:</label>
<input type="number" class="interval-input" name="samplelength" id="samplelength_0">
<button class="samplelength" id="samplelength_button_0" data-track="0">Apply</button>`
};

export async function row3(container) {
    // console.log(container); // Check the value of 'container'
    container.innerHTML = `
    <button class="plot-button" data-track="1">Choose file</button>
    <input type="file" class="file-input" style="display: none;">

    <div class="column-container" id="column-container">
    <div id="columnLabelX"></div>
    <select name="xcolumn" id="columnSelectorX_1" class="columnSelectorX" data-track="1">
        <option value="" disabled selected>Select a column for X</option>
    </select>
    </div>

    <div class="column-container" id="column-container">
        <div id="columnLabelY"></div>
        <select name="ycolumn" id="columnSelectorY_1" class="columnSelectorY" data-track="1">
            <option value="" disabled selected>Select a column for Y</option>
        </select>
    </div>`
};
export async function row4(container) {
    // console.log(container); // Check the value of 'container'
    container.innerHTML = `
    <label for="binsize_1">Bin size:</label>
    <input type="number" class="interval-input" name="binsize" id="binsize_1">
    <button class="binsize" id="binsize_button_1" data-track="1">Apply</button>  

    <label for="samplelength_1">Sample length:</label>
    <input type="number" class="interval-input" name="samplelength" id="samplelength_1">
    <button class="samplelength" id="samplelength_button_1" data-track="1">Apply</button>`
};