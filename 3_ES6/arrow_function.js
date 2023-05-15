/*
Arrow functions are a feature introduced in ECMAScript 6 (ES6) in JavaScript,
which provides a concise syntax for writing function expressions.
They are also known as fat arrow functions or lambda functions.

The basic syntax of an arrow function looks like this:
(parameters) => { statements }
*/


//Normal Function to add 2 numbers
function add(num1,num2){
    return num1+num2;
}
console.log("Normal Function Sum is : "+add(10,20));

//Arrow Function
const Sum=(num1,num2)=>{
    return num1+num2;
}
console.log("Arrow Function Sum is  : "+Sum(10,20));