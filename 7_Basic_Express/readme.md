## Introduction to Express.js

Express.js is a popular web application framework for Node.js that simplifies the process of building robust and scalable web applications. It provides a minimalistic and flexible set of features for creating web servers and handling HTTP requests and responses.

In this tutorial, we will cover the basics of Express.js and walk you through the provided code snippet. By the end, you will have a good understanding of how to set up an Express.js server, handle different types of routes, and respond to HTTP requests.

## Getting Started

Before diving into the code, make sure you have Node.js installed on your machine. You can download the latest version of Node.js from the official website: [https://nodejs.org](https://nodejs.org).

Once you have Node.js installed, you can create a new directory for your Express.js project and navigate into it using your preferred command-line interface.

## Setting up the Express.js Server

To begin, create a new JavaScript file, such as `server.js`, and open it in a text editor. Copy the following code into the file:

```javascript
const express = require("express");
const path = require("path");

const app = express();
```

In the code snippet above, we first import the required modules: `express` and `path`. The `express` module is the main module of Express.js, and `path` is a built-in Node.js module that helps manipulate file paths.

Next, we create an instance of the Express application by calling `express()`. This `app` object will be the central piece of our server.

## Middleware: Logging "Hello"

Express.js uses middleware functions to process incoming HTTP requests before they reach the route handlers. Middleware functions can perform tasks such as logging, authentication, error handling, and more.

In the provided code, we define a simple middleware function that logs "hello" to the console. Add the following code snippet after creating the `app` object:

```javascript
app.use(function(req, res, next) {
    console.log("hello");
    next();
});
```

The `app.use` function is used to register middleware. In this case, the middleware function logs "hello" and then calls `next()`, which passes control to the next middleware or route handler.

## Starting the Server

To start the Express.js server and listen for incoming HTTP requests, add the following code:

```javascript
app.listen(3000, function() {
    console.log("Server Started");
});
```

The `app.listen` function binds the server to a specific port (3000 in this case) and starts listening for incoming requests. When the server starts successfully, it logs "Server Started" to the console.

## Handling Routes

In Express.js, routes are used to define how the server responds to different HTTP requests. We can define routes for various HTTP methods such as GET, POST, PUT, DELETE, etc.

In the provided code snippet, we have defined three routes: 

1. Root route ("/"): When a GET request is made to the root route, the server responds by sending the `mydata.html` file.

```javascript
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "mydata.html"));
});
```

2. Subscribe route ("/subscribe"): When a GET request is made to the "/subscribe" route, the server responds by sending the `subscribe.html` file.

```javascript
app.get("/subscribe", function(req, res) {
    res.sendFile(path.join(__dirname, "subscribe.html"));
});
```

3. Subscribe route with POST method ("/subscribe"): When a POST request is made to the "/subscribe" route, the server responds with the message "Account Created".

```javascript
app.post("/subscribe",(req,res)=>{
    res.send("Account Created");
})
```



In the code above, we use the `app.get` and `app.post` functions to define the routes. The first argument is the path for the route ("/" and "/subscribe" in this case), and the second argument is a callback function that specifies how the server should handle the request.

For the root route ("/"), we use `res.sendFile` to send the `mydata.html` file as the response. The `path.join(__dirname, "mydata.html")` constructs the absolute path to the `mydata.html` file by combining the current directory (`__dirname`) and the file name.

Similarly, for the "/subscribe" route with a GET request, we send the `subscribe.html` file as the response.

For the "/subscribe" route with a POST request, we use `res.send` to send the message "Account Created" as the response.

## Running the Server

To run the Express.js server, open your command-line interface, navigate to the project directory, and execute the following command:

```shell
node server.js
```

If everything is set up correctly, you should see the message "Server Started" in the console. Your server is now running and listening for incoming HTTP requests.

To test the routes, open a web browser and visit the following URLs:

- [http://localhost:3000/](http://localhost:3000/) - This will load the `mydata.html` file.
- [http://localhost:3000/subscribe](http://localhost:3000/subscribe) - This will load the `subscribe.html` file.
- [http://localhost:3000/subscribe](http://localhost:3000/subscribe) (with a POST request) - This will respond with the message "Account Created".

## Conclusion

Congratulations! You have successfully learned the basics of Express.js and how to handle routes in an Express.js server. This tutorial covered setting up the server, using middleware, and defining routes for different HTTP methods.

Express.js provides a wide range of features and functionalities for building web applications. I encourage you to explore the official documentation and experiment with different Express.js features to enhance your web development skills.

Happy coding!