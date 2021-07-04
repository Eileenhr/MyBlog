// ============== 🌺 NODE - MYBLOG 🌺 ===============
// https://github.com/stillmattwest/node_lessons_2021

//--------------------- 🟨 RAW NODE 🟨 -----------------------
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

//--------------------- 🟨 NPM & EXPRESS & GIT 🟨 -----------------------

/*
 🔸NPM & EXPRESS: https://github.com/stillmattwest/node_lessons_2021/blob/master/npm_and_express.md

 📌 NPM 'Node Package Manager'
 - NPM is installed with NODE
 - NPM is an online repository of MANY node modules.
 - Use NPM to bring the node_modules into an 'APP'.
 - Node_Modules is a HUGE file and should be added to the '.gitignore' file in the APP.
 - The Node Modules required to run the APP are called 'DEPENDENCIES'.
 - DEPENDENCIES are held in a 'package.json' file in the APP.

 📌 When TERMINAL prompt is at APP DIRECTORY, 👀INSTALL Node_Modules:
 - 💥 To bring in the Node_Modules and package.json files into the APP, run 📍'npm init' in the TERMINAL.
  * Accept the defaults for all the 📍questions, but add your name for 'AUTHOR'.
  * There now is a 📍'package.json' file in the APP with basic version info.

 📌 After installing Node_Modules into APP directory, 👀INSTALL EXPRESS:
 - 📍'npm install express'
 - npm looks for the EXPRESS module and adds it to the APP as a DEPENDENCY.
 - 'node_modules' file is now in APP.
  * All module folders inside 'node_modules' contains a small app that is a dependency of EXPRESS (and a dependency of our APP).
  * package.json file now also has 'EXPRESS' listed as a dependency.
 - npm has also installed the 📍'package-lock.json' file to the APP. (Keep this as it maintains a more exact dependency tree for the APP).

 📌 GIT
 - Set up a 📍GitHub REPOSITORY in my GitHub page.
  * public or private
  * Add README
  * Add .gitignore (select 'Node')
  * No license necessary for this.

 📌 IN VSCode TERMINAL Directory
 - initialize GIT: 📍'git init'
  * Everything will change color (green)
  * Add .gitignore FILE to directory: 📍'touch .gitignore'
    >> In '.gitignore' file, add 📍node_modules  &  📍.env  (No quotes)
  * Now in TERMINAL: 📍git commit   Then 📍git push  🤷‍♀️

 - git clone https://github.com/Eileenhr/MyBlog
that adds the origin as yours.  

 - Add files to git STAGING AREA:
  >> git add -A
 - Then commit the changes
  >> git commit -m "some cool message"
 - and then push
  >> git push

*/



