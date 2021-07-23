const http = require("http");
const port = 5050;
const builtInModule = require("./modules/buit-in-modules");
const dateModule = require("./modules/your-own-modules/date");
// const usersMod = require("./fetchAPI-module");

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.writeHead(200, { "Content-Type": "text/html" });
  switch (req.url) {
    case "/":
      res.end(
        `<html>
          <head>
            <title>Node.js Tutorial</title>
          </head>
          <body>
            <a href="/built-in-modules">Built-in Modules</a>
            <a href="/your-own-modules">Your Own Modules</a>
            <h1>Node.js Tutorial</h1>
            <h2>What would you like to learn?</h2>
          </body>
        </html>`
      )
      break;
    case "/built-in-modules":
      res.end(builtInModule.builtInModules())
      break;
    case "/your-own-modules":
      res.end(
        `<html>
          <head>
            <title>Node.js Tutorial</title>
          </head>
          <body>
            <a href="/built-in-modules">Built-in Modules</a>
            <a href="./your-own-modules">Your Own Modules</a>
            <h1>Node.js Tutorial</h1>
            <h2>Node.js Your Own Modules</h2>
            <p>Today's Date: <span>${dateModule.date()}</span></p>
            <div>
              <label>Power</label>
              <input type="text"/>
              <input type="text"/>
              <button>calculate</button>
              <p></p>
            </div>
            <a href="./">Go Back to Main Page</a>
          </body>
        </html>`
      )
  }
})

server.listen(port, () => {
  console.log(`The server is listening from port ${port}`);
})

