//The http module allows us to create an HTTP server, while the fs module provides file system-related functionality.
var http= require("http");
var fs=require("fs");

//createServer function and passing a function called display as a parameter. The server will listen on port 7000.
http.createServer(display).listen(7000);

//The display function is defined, which takes two parameters: req (request) and res (response).
// These parameters represent the HTTP request and response objects, respectively.
function display(req,res){

    //fs module's readFile function is called to read the contents of a file called "mydata.html".
    fs.readFile("mydata.html",function(err,data){

        //handling error
        if(err){

            //If an error occurs while reading the file, the code sets the response's 
            //status code to 404 (Not Found) and the content type to "text/html" 
            //using res.writeHead.
            res.writeHead(404,{"Content-Type":"text/html"});
            res.write("404|Page Not Found");
            res.end();
        }
        else{
            //If the file is successfully read, the code writes the file's data to the 
            //response object using res.write, and then ends the response using res.end.
            res.write(data);
            res.end();
        }
    })  
}