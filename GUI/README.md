<h1> How to use the web app </h1>
<h2> Prerequisites for using the web app </h2>
<h3> Using the web app with local data</h3>
To use the web application with local data, <b>running a local server in the background is required.</b> <br>
Its up to the user to decide which local server tool to use, but in this project we have chosen to use an extension in Visual Studio Code (VS Code) called “Live Server” <b>, which can be found here: </b>https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer. <br>
<b><br> Guide on how to setup your local server (Assuming you are using Live Server):</b>
<p>
  <ul>
  <li> 1: Download the extension "Live Server" in VS Code  </li>
  <li> 2: Right click on the HTML file for the web app <b> (krill_GUI.html)</b> in VS code and click on the option <b>"Open with Live Server"</b>.  <br> 
    This step will redirect you to the web application and you are now set to use the application. </li> 
  </ul>
</p>

<h3> Using the web app with data fetched from remote servers (URL) </h3>
To use the web application with data fetched from web servers instead, you are required to:
<p>
  <ul>
  <li> 1: Use a <b>CORS-extension</b>, installed in the browser you intend to use when running the application. <br>
This step is necessary due to the built-in security restrictions in browsers.  </li>
  <li> 2: Open the web app <b> (krill_GUI.html)</b> in the browser you intend to use,  <br> 
  and you are now set to use the application!
  </ul>
</p>



<h2> Using the web app</h2>

<h3> Configuring your plot </h3>
<b> Once you are able to run the application, you have the option to: </b>
<p>
  <ul>
  <li> Use up to 2 files within a plot, one file for each track.  
  </li>
  <li> Do individual manipulation for each track, to suit your plotting needs. <br>
  This is achieved by pressing on of the <b> "track"-buttons </b> on the top of the page to specify which track you want to modify. You are now able to modify the specified track by using the different plot configuration buttons on the webpage. <br>
  </ul>
</p>
<br>
All the changes made to the plot will be dynamically updated to the plot, so the user gets instant response when they configure their plot. 

<br>
For explanations and information about the default values for each setting, click on <b>“More info”</b>.

<h3> Bookmarking </h3>
To promote accessibility of your findings, all the modifications to the plot <b>(except for the specification of which file(s) you have used)</b>, will be stored in the url.  <br>
<b>This enables the user to save a certain plot configuration as a bookmark </b>, so you can save the plot configurations you have made and retrieve them back later in the future.
