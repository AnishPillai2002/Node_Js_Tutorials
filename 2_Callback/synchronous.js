/*
Synchronous code is executed in a sequential order, meaning that each line of code 
is executed one after the other, in the order it appears in the code
*/

// Function that complete execution after a certain amount of time
function task(milliseconds){
    
    //time before execution
    let dt=new Date();
    while(new Date()-dt<=milliseconds){

        //task to complete
    }
}

// Synchronous code
console.log("Synchronous Execution\n");
task(1000);

console.log("First Task Started");
task(3000);
console.log("First Task Ended")
console.log("Second Task Started");
task(3000);
console.log("Second Task Ended")