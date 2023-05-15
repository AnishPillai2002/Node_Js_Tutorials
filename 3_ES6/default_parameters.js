/*
Default parameters are also supported in JavaScript. 
They allow you to specify default values for function parameters in case
they are not provided with a value when the function is called.
*/

function add(num1,num2=100){
    return (num1+num2);
}

console.log("Result in Default Parameter: "+add(10));
console.log("Resuult in Actual Parameter: "+add(10,20));