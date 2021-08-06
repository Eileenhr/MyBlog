// ============== 🌺 NODE - MYBLOG 🌺 ===============

// https://github.com/stillmattwest/node_lessons_2021/blob/master/npm_and_express.md
// NPM - EXPRESS

const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static(__dirname + "/public")); // '__dirname' is always equal to the directory of the current file

app.use((req, res, next) => {
  console.log("hello");
  next();   // next() continues the process through the code stack
})

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/home.html")
});

app.get("/", (req, res) => {
  res.send("Hello Express!")
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`)
});








