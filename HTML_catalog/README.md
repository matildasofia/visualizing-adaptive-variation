<h2> How to generate HTML pages for all candidate genes </h2>
<h3>First step</h3>
<p>
  <ul>
  <li>Copy this repository "Visualizing adaptive variation" to your local computer. </li>
  <li>Place the folder with all the data to be visualized in the Visualizing adaptive variation folder, and name it "data". <br> 
    Keep the subfolders (genes, gene_regions, ..) as they are.</li> 
  <li>Download the extension "Live Server" to Visual Studio Code (or use an equivalent extension/tool).</li>
  <li>Make sure that you can run JavaScripts on your computer. <br>
  Here, a JavaScript will be run in the terminal, with the bash command "node". This command can be used by downloading Node.js.</li>
  </ul>
</p>

<h3>Second step</h3>
<p>
<ul>
  <li>Open the terminal on your computer and go into the HTML_catalog.</li>
  <li>Run the command "node generateHTML.js".</li>
</ul>
</p>
<p>
  <h3>How to look at the result?</h3>
Now, a folder called "all_candidate_genes" should appear in HTML_catalog, containing one HTML file for each candidate gene.<br>
If you open "all_candidate_genes" in Visual Studio Code, you can right click on one of the files and click the option "Open with Live Server".<br>
  You should now be able to see 8 plots.
</p>
