/*
In JavaScript, a class is a template for creating objects,
which encapsulates data and behavior. 
A class definition typically includes the following details:
*/

//defining a class
class Person{

    //creating constructor
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    //Defining Method
    display(){
        console.log("Name: "+this.name+" | "+"Age: "+this.age);
    }
}

//crating an Object of the class
var person1=new Person("Sham",19);
var person2=new Person("Ramu",20);

console.log("Name of Person 1 : "+person1.name);
console.log("Age of Person 2 : "+person2.age);

console.log();
person1.display();


console.log("\nInheritance Example\n");

//Inheritance
//Classes can inherit properties and methods from other classes. 
//The extends keyword is used to create a subclass that inherits from a superclass.

class Employee extends Person{

    //creating constructor
    constructor(name,salary){

        //calling parent class constructor
        super();
        this.name=name;
        this.salary=salary;
    }

    //Defining Method
    isRich(){
        if(this.salary>100000){
            console.log(this.name +" is Rich");
        }
        else{
            console.log(this.name +" is Poor");
        }
    }
}

//creating an object of Employee
var e1=new Employee("Anish",1000000);

e1.isRich();