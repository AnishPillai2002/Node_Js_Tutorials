// Object Constructor
/*
In JavaScript, an object constructor is a function that is used to create 
and initialize a new object. When an object constructor is called with the "new" keyword, 
it creates a new object and returns it.
 */

function Person(name, age){
    this.name=name;
    this.age=age;

    //function to display details of person
     this.display=function(){
        console.log("Name: "+name+" "+"Age: "+age);
    }
}

var person1= new Person("Ramu",20);
var person2=new Person("Shamu",21);

person1.display();
person2.display();
