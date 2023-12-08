// HTML options for user
export async function plot_options(container) {
    container.innerHTML = `
    <select name="mark" id="mark" class="mark">
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

    <select name="color" id="color">
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

    <label for="marksize">Mark size:</label>
    <input type="text" class="interval-input" id="marksize">
    <button id="marksize_button">Apply</button>

    <select name="bcolor" id="bcolor">
        <option value="" disabled selected>Select background color</option>
        <option value="white">white</option>
        <option value="grey">grey</option>
    </select>

    <button id="info_button">More info</button>
`};