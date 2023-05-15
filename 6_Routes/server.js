// Import the necessary modules
var http = require("http"); // For creating the HTTP server
var fs = require("fs"); // For reading files
var url = require("url"); // For parsing URL

// Create an HTTP server and set it to listen on port 3000
http.createServer(display).listen(3000);

/**
 * Request handler function for the HTTP server.
 * @param {object} req - HTTP request object
 * @param {object} res - HTTP response object
 */
function display(req, res) {
  // Parse the URL of the incoming request
  var q = url.parse(req.url, true);

  // Log the requested pathname for debugging purposes
  console.log(q.pathname);

  if (q.pathname === "/") {
    // If the root URL ("/") is requested

    // Read the "mydata.html" file
    fs.readFile("mydata.html", function (err, data) {
      if (err) {
        // If the file is not found, send a 404 response
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404 | Page Not Found");
        res.end();
      } else {
        // If the file is found, serve it as the response
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (q.pathname === "/subscribe") {
    // If the "/subscribe" URL is requested

    // Read the "subscribe.html" file
    fs.readFile("subscribe.html", function (err, data) {
      if (err) {
        // If the file is not found, send a 404 response
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404 | Page Not Found");
        res.end();
      } else {
        // If the file is found, serve it as the response
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (q.pathname === "/subscribeaction") {
    // If the "/subscribeaction" URL is requested

    // Send a response with the submitted data
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(q.query.firstName + " Your Data is Submitted Successfully");
    res.end();
  } else {
    // If any other URL is requested

    // Send a 404 response
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("404 | Page Not Found");
    res.end();
  }
}
