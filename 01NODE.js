// ============== 🌺 NODE - MYBLOG 🌺 ===============

// https://github.com/stillmattwest/node_lessons_2021/blob/master/basic_concepts.md
// RAW NODE

const http = require("http");
const port = 3000;

http 
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html" 
    });
    res.write(`req.url: ${req.url}`);
    res.end("hello World!");
  })
  .listen(3000, console.log(`Listening on port ${port}`));








