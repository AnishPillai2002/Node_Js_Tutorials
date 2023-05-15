## Simple HTTP Server with File Reading

This code demonstrates a simple HTTP server built with Node.js that reads the contents of a file and sends it as a response to client requests. It uses the `http` module to create an HTTP server and the `fs` module to read files from the file system.

### Usage

1. Install Node.js if you haven't already.

2. Clone or download the code files.

3. Open a terminal or command prompt and navigate to the directory where the code files are located.

4. Install dependencies by running the following command:



5. Place the file you want to serve in the same directory as the code files and name it "mydata.html".

6. Start the server by running the following command:



7. The server will listen on port 7000. Open a web browser and navigate to "http://localhost:7000" to see the contents of "mydata.html" displayed.

### Code Explanation

- The code begins by importing the necessary modules: `http` and `fs`.

- It then creates an HTTP server using `http.createServer`, passing in a function called `display` as the parameter. The server listens on port 7000.

- The `display` function is defined to handle incoming requests. It takes two parameters: `req` (request) and `res` (response).

- Inside the `display` function, the code uses `fs.readFile` to read the contents of the "mydata.html" file.

- If an error occurs while reading the file, the code sets the response's status code to 404 (Not Found) using `res.writeHead`, writes a "404|Page Not Found" message to the response using `res.write`, and ends the response using `res.end`.

- If the file is successfully read, the code writes the file's data to the response object using `res.write` and then ends the response using `res.end`.

- The server sends the response back to the client with either the file contents or a 404 error message.

### Customization

- You can change the port number by modifying the argument passed to the `listen` function.

- Replace "mydata.html" with the name of the file you want to serve. Ensure the file is in the same directory as the code files.

- You can modify the error handling and response messages to fit your needs.


