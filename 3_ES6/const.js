/*
In JavaScript, const is used to declare a variable whose value is 
constant and cannot be reassigned.
Once a variable is declared using const, its value cannot be changed.
*/

const num=10;
try{
    num=20;
    console.log(num);
}catch{
    console.log("Cannot Change num");
}

const arr=["Anish", "Abhinab","Mamu"];
console.log("Array is: "+arr);
arr.push("Shibu");
console.log("Object remains same: "+arr);

try{
    //changing  array object
    arr=["Amilpa","Sigma"];
    console.log("New Object: "+arr);
}catch{
    console.log("arr cannot be changed");
}