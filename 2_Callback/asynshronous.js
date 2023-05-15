/*
asynchronous code allows the program to continue running while waiting for 
a long-running operation to complete. Asynchronous code executes non-blocking code, 
allowing other operations to run at the same time. Instead of blocking the execution,
it registers a callback function to be executed when the operation is finished.
*/

//callback function
function taskEnd(){
    console.log("First Task Ended");
}

//Format 1
console.log("First Task Started");
setTimeout(taskEnd,3000);

//Format 2
console.log("Second Task Started");
setTimeout(()=>{
    console.log("Second Task Ended");
},3000);

//setTimeout function is asynchronous, and it does not block the execution of the program. 

// It schedules the function passed to it to be executed after a specified amount of time here 3000ms