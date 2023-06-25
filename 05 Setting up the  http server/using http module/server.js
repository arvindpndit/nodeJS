const http = require("http");
const PORT = 3000;
/**
 * Http module contains a function called as createServer
 * this createServer function takes a callback as the input
 * Now inside the callback, we get two arguments
 *  - request -> this argument contains all the details about the incoming req
 *  - response -> this argument contains functions using which we can prepare the responses
 *
 * the createServer function returns us the server object
 */

const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.url == "/home") res.end("Welcome to the Home Page, ARVIND");
  else if (req.url == "/shopping") res.end("Let's Do Some Shopping");
  else res.end("This is Arvind Server");
});

server.listen(PORT, () => {
  // once the server starts running on the port
  // then the this callback will get executed
  console.log("server is listening at port " + PORT);
});
