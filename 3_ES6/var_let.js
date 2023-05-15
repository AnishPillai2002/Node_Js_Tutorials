//Understanding Redeclaration
console.log("\n Understanding Redeclaration\n");

//let doesn't allow redeclaration of a variable within the same scope.
console.log("let");
{
    let number=10;
    console.log("Local Number: "+number);
}
let number=20;
console.log("Global Number: "+number);

//var allows redeclaration of a variable within the same scope
console.log("var");
var num=10;
var num=10;
console.log("Number: "+num);


//Understanding Scope
console.log("\n Understanding Scope");

//let is block-scoped, which means that it is only accessible within the block 
//var is function-scoped, which means that
// it is accessible within the entire function in which it is defined.
{
    let x = 10;
    console.log(x);
    var y = 20;
}
  try{
    console.log(x);
  }
  catch{
    console.log("x not found");
  }
   
console.log(y); // 20

