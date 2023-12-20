<h1> How to use the web app </h1>
<h2> Prerequisites for using the web app </h2>
<h3> Using the web app with local data</h3>
To use the web application with local data, **running a local server in the background is required.** <br>
Its up to the user to decide which local server tool to use, but in this project we have chosen to use an extension in Visual Studio Code (VS Code) called “Live server” which can be found [here](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). <br>
**Assuming you are using Live server here comes the steps:**
<p>
  <ul>
  <li> 1: Download the extension "Live server" in VS Code  </li>
  <li> 2: Right click on the HTML file containing the GUI start page in VS code and choose the option "Open with Live Server".  <br> 
    This step will redirect you to the web application and you are now set to use the application. </li> 
  </ul>
</p>

<h3> Using the web app with data fetched from remote servers (URL) </h3>
To use the web application with data fetched from web servers instead, you are required to:
<p>
  <ul>
  <li> 1: Have (and use) a **CORS-extension** installed in the browser you intend to use when running the application. <br>
This step is necessary due to the built-in security restrictions in browsers.  </li>
  <li> 2: Open the web app (krill_GUI.html) in the browser you intend to use.  <br> 
  and you are now set to use the application.
  </ul>
</p>



<h2> Using the web app</h2>
Once you are able to run the application, you have the option to: 
<p>
  <ul>
  <li> Use up to 2 files within a plot, one file for each track.  
  </li>
  <li> Do individual manipulation for each track, to suit your plotting needs. <br>
  This is achieved by pressing the "track"-button on the top of the page to specify which track you want to modify. You are now able to modify the specified track by using the different plot configuration buttons on the webpage. <br>
</p>
<br>
All the changes to the plot will dynamically update it so the user gets instant response. 

<br>
For explanations and default values for each setting, click on **“More info”**.

<h3> Bookmarking </h3>
To promote accessibility of your findings, all the modifications to the plot **(except for the specification of which file(s) you have used)**, will bestored in the url.  <br>
This enables the user to save a certain plot configuration as a bookmark, so you can save the plot configurations you have made and retrieve them back later in the future.
