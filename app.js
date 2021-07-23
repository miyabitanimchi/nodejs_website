const http = require("http");
const port = 5050;
const builtInModule = require("./modules/buit-in-modules");
// const usersMod = require("./fetchAPI-module");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
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
            <a href="/">Go Back to Main Page</a>
            <h1>Node.js Tutorial</h1>
            <h2>What would you like to learn?</h2>
          </body>
        </html>`
      )
      break;
    case "/built-in-modules":
      res.end(
        `<html>
          <head>
            <title>Node.js Tutorial</title>
          </head>
          <body>
            <a href="/built-in-modules">Built-in Modules</a>
            <a href="./your-own-modules">Your Own Modules</a>
            <a href="./">Go Back to Main Page</a>
            <h1>Node.js Tutorial</h1>
            ${builtInModule.builtInModules()}
          </body>
        </html>`
      )
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
            <a href="./">Go Back to Main Page</a>
            <h1>Node.js Tutorial</h1>
            <h2>Node.js Your Own Modules</h2>
          </body>
        </html>`
      )
  }
})

server.listen(port, () => {
  console.log(`The server is listening from port ${port}`);
})

