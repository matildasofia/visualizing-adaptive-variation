export async function options(container) {
    container.innerHTML = `
    <label for="mark">Mark:</label>
    <select name="mark" id="mark" class="mark">
        <option value="point">point</option>
        <option value="line">line</option>
        <option value="area" selected>area</option>
        <option value="bar">bar</option>
        <option value="rect">rect</option>
        <option value="text">text</option>
        <option value="link">link</option>
        <option value="triangle">triangle</option>
    </select>

    <label for="color">Color:</label>
    <select name="color" id="color">
        <option value="blue">blue</option>
        <option value="pink" selected>pink</option>
        <option value="red">red</option>
        <option value="gold">gold</option>
        <option value="green">green</option>
        <option value="purple">purple</option>
        <option value="black">black</option>
        <option value="orange">orange</option>
    </select>

    <label for="size">Mark size:</label>
    <select name="size" id="size">
        <option value="one">1</option>
        <option value="two">2</option>
        <option value="three">3</option>
        <option value="four" selected>4</option>
    </select>

    <label for="bcolor">Background color:</label>
    <select name="bcolor" id="bcolor">
        <option value="white" selected>white</option>
        <option value="grey">grey</option>
    </select>
`};