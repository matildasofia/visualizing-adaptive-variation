// HTML options for user
export async function plot_options(container) {
    container.innerHTML = `
    <select name="mark" id="mark_0" class="mark" data-track="0">
        <option value="" disabled selected>Select mark</option>
        <option value="point">point</option>
        <option value="line">line</option>
        <option value="area">area</option>
        <option value="bar">bar</option>
        <option value="rect">rect</option>
        <option value="text">text</option>
        <option value="link">link</option>
        <option value="triangle">triangle</option>
    </select>

    <select name="mark" id="mark_1" class="mark" data-track="1">
        <option value="" disabled selected>Select mark</option>
        <option value="point">point</option>
        <option value="line">line</option>
        <option value="area">area</option>
        <option value="bar">bar</option>
        <option value="rect">rect</option>
        <option value="text">text</option>
        <option value="link">link</option>
        <option value="triangle">triangle</option>
    </select>


    <select name="color" id="color_0" class="color" data-track="0">
        <option value="" disabled selected>Select color</option>
        <option value="blue">blue</option>
        <option value="pink">pink</option>
        <option value="red">red</option>
        <option value="gold">gold</option>
        <option value="green">green</option>
        <option value="purple">purple</option>
        <option value="black">black</option>
        <option value="orange">orange</option>
    </select>
    <select name="color" id="color_1" class="color" data-track="1">
        <option value="" disabled selected>Select color</option>
        <option value="blue">blue</option>
        <option value="pink">pink</option>
        <option value="red">red</option>
        <option value="gold">gold</option>
        <option value="green">green</option>
        <option value="purple">purple</option>
        <option value="black">black</option>
        <option value="orange">orange</option>
    </select>

    <label for="marksize_0">Mark size:</label>
    <input name="size" type="number" class="interval-input" id="marksize_0" data-track="0">
    <button class="marksize" id="marksize_button_0" data-track="0">>Apply Track 1</button>

    <label for="marksize_1">Mark size:</label>
    <input name="size" type="number" class="interval-input" id="marksize_1" data-track="1">
    <button class="marksize" id="marksize_button_1" data-track="1">>Apply Track 2</button>

    <select name="bcolor" id="bcolor">
        <option value="" disabled selected>Select background color</option>
        <option value="white">white</option>
        <option value="grey">grey</option>
    </select>

    <button id="info_button">More info</button>
`};