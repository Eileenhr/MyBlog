// ============== 🌺 NODE - MYBLOG 🌺 ===============

// 💠 PRACTICE FROM 'test.js'

   // console.log('Hello Node');

   // function greeting(name) {
   //   return `Hello ${name}, you have executed a function inNode.js`
   // }
   // console.log(greeting('Matt'));
   

//--------------------- 🟨 RAW NODE 🟨 -----------------------
// https://github.com/stillmattwest/node_lessons_2021

/* 
 🔸BASIC CONCEPTS: https://github.com/stillmattwest/node_lessons_2021/blob/master/basic_concepts.md
    NODE REF: https://nodejs.org/en/docs
    NODE MODULES REF: https://nodejs.org/api/http.html
    SERVER REQ/RES REF: https://nodejs.dev/

 - JS runtime environment that allows us to run code outside the browser.
 - Node contains JS Libraries of boiler plate code in node_modules.
 - By default, Node looks for an 'index' file upon opening project.
 - Coding the 'require' keyword in our code file allows us to access and use code from any node module.
 - The server CALLBACK 'req' receives incoming HTTP requests from the user.
 - The server CALLBACK 'res' sends back the status, headers, and data to the user.
*/

//--------- 🟨 NPM & EXPRESS - GIT - NODEMON - STATIC FILES - EXPRESS STATIC - MIDDLEWARE 🟨 ---------
/*
 🔸NPM & EXPRESS: https://github.com/stillmattwest/node_lessons_2021/blob/master/npm_and_express.md

 ------- 🔰 NPM -------
 📌 NPM 'Node Package Manager'
 - NPM is installed with NODE
 - NPM is an online repository of MANY node modules.
 - Use NPM to bring the node_modules into an 'APP'.
 - Node_Modules is a HUGE file and should be added to the '.gitignore' file in the APP.
 - The Node Modules required to run the APP are called 'DEPENDENCIES'.
 - DEPENDENCIES are held in a 'package.json' file in the APP.

 📌 When TERMINAL prompt is at APP DIRECTORY, 👀INSTALL 👉🏻 Node_Modules:
 - 💥 To bring in the Node_Modules and package.json files into the APP, run 📍'npm init' in the TERMINAL.
  * Accept the defaults for all the 📍questions, but add your name for 'AUTHOR'.
  * There now is a 📍'package.json' file in the APP with basic version info.

 📌 After installing Node_Modules into APP directory, 👀INSTALL 👉🏻 EXPRESS:
 - 📍'npm install express'
 - npm looks for the EXPRESS module and adds it to the APP as a DEPENDENCY.
 - 'node_modules' file is now in APP.
  * All module folders inside 'node_modules' contains a small app that is a dependency of EXPRESS (and a dependency of our APP).
  * package.json file now also has 'EXPRESS' listed as a dependency.
 - npm has also installed the 📍'package-lock.json' file to the APP. (Keep this as it maintains a more exact dependency tree for the APP).

 ------- 🔰 GIT -------  
 - Set up a 📍GitHub REPOSITORY in my GitHub page.
  * public or private
  * Add README
  * Add .gitignore (select 'Node')
  * No license necessary for this.
 
 - In TERMINAL run 📍git init

 - In main directory in VSCode TERMINAL, GIT CLONE REPOSITORY to directory:
 - 📍git clone https://github.com/Eileenhr/MyBlog  
    * Move directory files into the cloned git folder (repository)
    * Add 📍node_modules    and    📍.env to    📍.gitignore file.
    🔰 👉🏻 MAY HAVE TO REINSTALL NPM AND EXPRESS AFTER MOVING FILES TO GIT FOLDER:

 - Add files to git STAGING AREA:
  >> 📍git add .
 - Then commit the changes
  >> 📍git commit -m "some cool message"
 - and then push
  >> 📍git push origin

----- 🔰 EXPRESS -----

 - EXPRESS has already been installed: 📍'npm install express'
 - REQUIRE EXPRESS in the ✨index.js file:  📍const express = require('express');
    >> NODE get the express module and brings it into the APP.
    >> Calling Express returns an OBJECT, (similar to instantiating a class).
 - Declare variable APP and ASSIGN EXPRESS to it: 📍const app = express();
    >> Now the APP has all functionality of an EXPRESS APP.
 - PORT variable can remain at 3000: 📍const port = 3000;

 - 📍app.get sets up an 👀EXPRESS ROUTE for requests to come in at via URL or path.

 📌 GET REQUESTS (ROUTE)
 - Get is a method that we can pass parameter in.
    >> The first parameter is the URL to match.
    >> "/" is default (like  http://localhost:3000/)  👉🏻 This will only respond to 'GET' requests.
    💥THE FIRST PARAMETER HERE IS THE "/" ROUTE:  📍app.get("/", (req, res) => res.send("Hello Express!"));

 - THEN, the SECOND PARAMETER, (req, res), comes from the same NODE source via EXPRESS and works the same (covered in 'basic concepts' lesson).
    >> Express gives us deeper access to req and res.

 - THEN, an arrow function follows declaring an event handler via 📍SEND method of the .res object.

 - THEN, 📍app.listen returns the Node http module server instance.

----- 🔰 NODEMON -----

 - nodemon is a module that will allow automatic updates to the file when it detects any changes.
 - To use it at the command line (in TERMINAL), it has to be installed globally.
  📍npm install nodemon -g
 - Now restart the APP with 📍nodemon index.js

 - 📍NPM START
   >> Add to package.json 'SCRIPTS' to run APP via NODEMON: 📍"start": "nodemon index.js"
   💥💥💥 NOW START THE APP via 📍npm start 💥💥💥
     --With the 'start' code in package.json, the APP will continue to run automatically via nodemon.

----- 🔰 STATIC FILES -----

 - Create a 📍'public' file in the directory to hold STATIC FILES (HTML, CSS, JS).

 - HOW TO ADD THE DATA FROM THESE FILES TO THE BROWSER/FRONT END:
    * Front-end browser looks for index.html (front-end dev)-DIFFERENT FROM USING NODE.
    * 👉🏻 Fullstack Dev - NODE uses req/res/routes
        💥 Tell APP to serve STATIC FILES and where they are.
        💥 CREATE a ROUTE that points to HOME.

----- 🔰 EXPRESS STATIC -----
EXPRESS STATIC REF: https://expressjs.com/en/starter/static-files.html
NOTE ON __DIRNAME:  (Double underscores) is feature of node and is 💥ALWAYS EQUAL TO DIRECTORY OF CURRENT FILE.

 - 📍Express.static is a METHOD that lets us 📍SERVE STATIC FILES.
  >> Express.static is a type of 📍MIDDLEWARE.

 - To APPEND our STATIC FILES to our site URL ("/")  📍app.use(express.static(__dirname + "/public"));
 - The 'client.js' will console in the browser dev tools. (Not in node console/terminal).
 - Using the URL without the .html extension works only if this code is in index.js (this provides the needed route): 
        📍app.get("/home", (req, res) => res.sendFile(__dirname + "/public/home.html"));

----- 🔰 MIDDLEWARE -----
 - An EXPRESS APP is a large stack of MIDDLEWARE applications that sits between the client 📍REQUEST and the server 📍RESPONSE.
 - MIDDLEWARE does the following:
    * Execute any code
    * Make changes to the req and res objects
    * End req-res cycle
    * Call next middleware function in the stack

 - EVEN OUR ROUTE HANDLERS ARE MIDDLEWARE:
  app.use ....
  app.get ....

 - Middleware passes through the entire app from TOP to BOTTOM and will STOP AT EVERY 📍MATCHING ROUTE.
    * app.use .... affects EVERYTHING.
    * app.get .... affects ONLY MATCHING ROUTES.
    * res.send ....  and  res.sendFile methods   ENDS THE req/res cycle.
    


*/

/*
--------------- 🟨 MORGAN 🟨 ---------------
https://github.com/stillmattwest/node_lessons_2021/blob/master/logging_and_routing.md

Remember the flow of an Express application:
   👉🏻 Clent Request => middleware stack => server response

Morgan does not alter anything, it only logs to the console:

   GET /home 200 11.690 ms - 291
   GET /style.css 200 2.906 ms - 235
   GET /client.js 200 2.070 ms - 39

👉🏻 If you haven't cleared your cache recently you might see 304 responses instead of 200. An HTTP 👀304 response just means the client already has the resource cached, so no change is necessary. It's basically a redirect to a locally cached resource.

   GET /home 304 4.025 ms - -
   GET /style.css 304 5.881 ms - -
   GET /client.js 304 5.856 ms - -

-------------------------------------------------------------

https://www.npmjs.com/package/morgan

🔰 dev
Concise output colored by response status for development use. The :status token will be colored green for success codes, red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for information codes.


When a 'get' request to a route is processed, Express will go down the middleware stack from top to bottom. If it runs into an app.use it will apply the middleware regardless of route. This is how we implement 📍logging.

If it runs into an app.get it will only apply the middleware if the route in the request matches the route specified in the method. This is why a request to http://localhost:3000 does not get served our static HTML file, but a request to http://localhost:3000/home does. When 'req' matches a route, the callback runs.

Express Apps typically are only a single line of code.

*/

