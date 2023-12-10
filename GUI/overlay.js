export async function overlay(container) {
    container.innerHTML = `
    <div class="information">
    <p> <b>Fuck Gosling <3</b> </p>
    <p> <b>Choose a data file</b> </p>
    <p>The datafiles supported are TSV or CSV.</p>
    <p> <b>X and Y column</b> </p>
    <p> From the header (first row) in your provided data file, the coloumns are read and displayed in a drowdown menu </p>
    <p> <b>X and Y domain </b> </p>
    <p> </p>
    <p> <b>Bin size </b> </p>
    <p> </p>
    <p> <b>Sample length </b> </p>
    <p> </p>
    <p> <b>Mark</b> </p>
    <p> </p>
    <p> <b>Color</b> </p>
    <p> </p>
    <p> <b>Size</b> </p>
    <p> </p>
    <p> <b>Background color</b> </p>
    <p> </p>
    <button id="close_button">Close</button>
    </div>`
}