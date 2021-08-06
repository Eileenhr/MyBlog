
// -------- 💠 CREATE THE MODULE --------

const myFirstModel = require('../models/myFirstModel');

// The controller does three things in the MVC Pattern:
  // 1. Receive user requests.
  // 2. Call the defined model to get the user requested data.
  // 3. Send a response to the user.

// 🔰 🔸'EXPORTS' creates the MODULE
// This way of coding 'exports' allow us to export multiple controllers from the same file.
exports.firstController = (req, res) => {
  const response = myFirstModel.firstModel();
  res.send(`Hello from firstController! I called firstModel and it says: ${response}`);
}

// Another way to code exports
/*
    firstController = (req, res) => {
      // do stuff
    }
    export default firstController;
*/

// -------- 💠 ATTACH ROUTES --------

// 🔰 To use this exported controller, 🔸'REQUIRE' it in our 'index.js' file so that we can use 🔸'ROUTES', also in 'index.js'.



