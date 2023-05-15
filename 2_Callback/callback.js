/*
 a callback function is a function that is passed as an argument to another 
 function and is executed inside the parent function. The callback function is 
 called when the parent function has completed its task, allowing the parent function 
 to pass data or control back to the calling code.

Callbacks are commonly used in asynchronous programming, 
where a long-running operation is executed in the background and the 
program continues to execute other tasks while waiting for the operation to complete. 
Once the operation is finished, the callback function is called to handle the result.
*/

//Callback Function
function printResult(result){
    console.log('The Sum is '+result);
}

// Function to add two numbers
function add(num1,num2,callback){
    const sum=num1+num2;
    callback(sum);
}

add(10,20,printResult);