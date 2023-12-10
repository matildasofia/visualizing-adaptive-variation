export async function overlay(container) {
    container.innerHTML = `
    <div class="information">
    <p><b> Track 1 & 2 </b><br>
    You can visualize two different tracks in this plot. Click on the track (Track 1 or Track 2) that you want to work with. 
    </p><p>
    <b>Choose file</b><br>
    Choose a local file. The supported data types are TSV and CSV.
    </p><p> <b>Select a column for X and Y</b><br>
    From the header (first row) in your data file, the coloumns are read and displayed in a dropdown menu. Choose what column to use for X- and Y-values. </p>
    
    <p><b>Bin size </b><i>(default = 10)</i><br> Binning the genomic interval in tiles (unit size: 256).

    </p>
    
    <p><b>Sample length </b><i>(default = 1000)</i><br> Specify the number of rows loaded from the file. 
    </p>
  
    <p><b>X- and Y-domain </b><i>(X-domain default = [0, 200000], Y-domain default = [0-1])</i> <br> Specify the visible region of x- and y-axis. </p>

    <p> <b>Background color </b> <i>(default = white)</i><br>
    Select white or grey background color from the dropdown menu. </p>

    <p> <b>Mark </b><i>(default = line)</i><br>
    Select a mark from the dropdown menu. </p>
   
    <p> <b>Color </b><i>(default = orange)</i><br> Select a mark color from the dropdown menu. </p>
  
    <p> <b>Size </b><i>(default = 2)</i><br> Select a mark size. </p>

    <button id="close_button">Close</button>
    </div>`
}