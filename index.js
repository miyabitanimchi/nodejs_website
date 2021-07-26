// use the require function to include the http module
const http = require("http");
// console.log(http); // Returns an object which has HTTP properties and methods
const port = 5050;
const builtInModule = require("./modules/buit-in-modules");
console.log(builtInModule); // returns an object with the method created by you 
const dateModule = require("./modules/your-own-modules/date");
const areaOfCircleModule = require("./modules/your-own-modules/areaOfCircle")
// const usersMod = require("./fetchAPI-module");

// createServer() creates/returns an http server object and the object can listen to ports on a computer,
// The function requestListener() can be passed into the parameter like below (Optional).
// requestListener() gets executed every time the server receives a request.
// It handles request from the user, and response back to the user.
const server = http.createServer((req, res) => {
  // -- the IncomingMessage object is passed as the first argument, and it represents the 
  // request to the server.
  // -- the ServerResponse object is passed as the second 

  res.writeHead(200, { "Content-Type": "text/html" });
  // One of the methods in the ServerResponse obj
  // to send status and response headers to the client.
  // the first parameter... set status code, the second... info for headers

  switch (req.url) { // url... one of the properties in IncomingMessage. Returns the requested URL string
    case "/":
      res.end( // Signals that the server should consider that the response 
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
            <p>Today's Date: <span style="color: red">${dateModule.date()}</span></p>
              <p>The area of a circle of radius 3 is <span style="color: red">${areaOfCircleModule.areaOfCircle(3)}</span></p>
            <a href="./">Go Back to Main Page</a>
          </body>
        </html>`
      )
  }
})
// console.log(server);

server.listen(port, () => {
  console.log(`The server is listening from port ${port}`);
})

