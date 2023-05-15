/*
In Node.js, a module is a reusable block of code that encapsulates related 
functionality and can be used in other parts of an application. It is a fundamental 
concept in Node.js that promotes code organization, modularity, and reusability.

*/

const greeting = 'Hello, ';

function hello(name) {
  console.log(greeting + name);
}

module.exports = {
  sayHello: hello
};