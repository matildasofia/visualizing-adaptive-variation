// Content added to every page in the HTML catalog.
// Displays a box with the colors associated to Atlantic and Mediterranian data respectively.
export async function addOverlay(container) {
    container.innerHTML = `
    <div class="overlay" style="margin-top: 20em;">
            <p><b>Atlantic</b><br>
                Darker colors:
                <div class="circles">
                    <div class="circle" style="background-color: rgba(255, 0, 0, 1);"></div>
                    <div class="circle" style="background-color: blue;"></div>
                    <div class="circle" style="background-color: darkorange;"></div>
                    <div class="circle" style="background-color: purple;"></div>
                    <div class="circle" style="background-color: green;"></div>
                </div>
            </p>
            <p>
                <b>Mediterranian</b><br>
                    Lighter colors:
                    <div class="circles">
                        <div class="circle" style="background-color: rgba(255, 0, 0, 0.4);"></div>
                        <div class="circle" style="background-color: lightblue;"></div>
                        <div class="circle" style="background-color: gold"></div>
                        <div class="circle" style="background-color: violet;"></div>
                        <div class="circle" style="background-color: lightgreen;"></div>
                    </div>
            </p>
        </div>`

}
