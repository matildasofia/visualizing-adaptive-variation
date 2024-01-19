<h1> How to use the web app </h1>
<h2> Prerequisites for using the web app </h2>
To use the web application,<b> running a local server in the background is required.</b> <br>
It is up to the user to decide which local server tool to use, but in the development of this GUI, an extension in Visual Studio Code (VS Code) called <b> 'Live Server' </b> has been used for this purpose, <b> which can be found here: </b> <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">Live Server-Extension for Visual Studio Code</a>
 <br>
<b><br> 

Guide on how to setup your local server (Assuming you are using Live Server):</b>
<p>
  <ul>
  <li> <b> 1: Download and install the extension 'Live Server' in VS Code </b>  </li>
  <li> <b> 2: To launch the application</b>, right click on the HTML file for the web app <b> (krill_GUI.html)</b> in VS code and then choose the <b>"Open with Live Server"</b> option.  <br> 
    This step will redirect you to the web application and if you intend to only use local data in your plots, you are now set to use the application. </li> 
  </ul>
</p>

<h3> Additional requirement if you intend to use the web app with data fetched from remote servers (URL) </h3>

If you instead plan to use data coming from remote servers, you will also be required to <b> install a CORS-extension </b> in the browser where you want to run the web application in. This additional requirement is essential to bypass the built-in security policies of web browsers when handling data coming from external sources.
<br><br>
<b> Any CORS-extension can be used for this purpose. </b> As an example for Microsoft Edge users, the following CORS-extension can be used: <a href="https://microsoftedge.microsoft.com/addons/detail/cors-unblock/hkjklmhkbkdhlgnnfbbcihcajofmjgbh" target="_blank">CORS Unblock-Extension for Microsoft Edge</a>
<br>

<h2> Using the web app</h2>

<h3> Configuring your plot </h3>
<b> Once you are able to run the application, you have the option to: </b>
<p>
  <ul>
  <li> <b> Use up to two data files within a plot</b>, one file for each track.  
  </li>
  <li> <b>Do individual manipulation for each track</b>, to suit your plotting needs. <br>
  This is achieved by pressing on one of the <b> "Track"-buttons </b> on the top of the page, to specify which track you want to modify. After a track has been selected, you are now able to modify the specified track by interacting with the different plot configuration buttons and input fields on the webpage. <br>
  </ul>
</p>
All changes made to the plot specifications will dynamically update the plot, so the user gets instant response when they configure their plot. 

<br>
For explanations and information about the default values for each setting, click on the <b>“More info”</b> button.

<h3> Bookmarking </h3>
To promote accessibility of your findings, all the modifications made to the plot <b>(except for the specification of which data file(s) you have used)</b>, will be stored in the url.  <br>
<b>This functionality enables the user to save a certain plot configuration as a bookmark</b>, so it can be seamlessly retrieved back for later use in the future or to be shared with others.
