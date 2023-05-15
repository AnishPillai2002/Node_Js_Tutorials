/* 
JavaScript provides several built-in constructors that you can use to create objects 
with pre-defined properties and methods.
Here are some of the most commonly used built-in constructors in JavaScript:
*/

//Object constructor: 
//The Object constructor creates a new object with no properties or methods.
const obj = new Object();
console.log(obj);

//Array constructor:
//The Array constructor creates a new array object with pre-defined properties and methods.
const arr = new Array(3);  //constant size
console.log("Array Length: "+arr.length);

//String constructor: 
//The String constructor creates a new string object with pre-defined properties and methods.
const str = new String("Anish");
console.log(str);

//Number constructor: 
//The Number constructor creates a new number object with pre-defined properties and methods.
const num = new Number(10);
console.log(num);

//Boolean constructor: 
//The Boolean constructor creates a new boolean object with pre-defined properties and methods.
const bool=new Boolean(true);
console.log("Boolean Value: ",bool);

//Date constructor: 
//The Date constructor creates a new date object with pre-defined properties and methods

const date=new Date();
console.log("Today is: "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear());
