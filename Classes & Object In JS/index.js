//Classes & Object In JS

//Simple Way To Declare Object --> Properties(key or variables) and Methods(Function)

/*
const student = {
    fullName: "Qarnain Afridi",
    Age:23,
    marks:94,
    printMarks:function(){
        console.log("marks = ",this.marks);
    }
}

console.log(student.fullName);
console.log(student['Age']);
console.log(student.marks);
student.printMarks();
*/
//All About Prototype In JS
/*
const employee = {
    calcTax(){
        console.log("tax is 10%");
    },
    
}

const kabirAhmad = {
    salary:50000,
    //if object & prototype have same method,objects method will excute first.
    calcTax(){
        console.log("tax is 20%");
    },
}

kabirAhmad.__proto__= employee;

console.log(kabirAhmad.calcTax());
*/

//Classes In JavaScript
//How to Class Declare
/*
class ToyotaCar {
    constructor(brand){
        console.log("Creating Constructor");
        this.brand = brand;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
}
let fortuner = new ToyotaCar("fortuner");
*/

//Inheritance Concept In JavaScript

// class Parent {
//     hello(){
//         console.log("Hello Friends...");
//     }
// }

// class Child extends Parent { }

// let obj = new Child();

// console.log(obj.hello());

//Problem : 01 Creating a websites for your college.Create a Class User with 2 properties,name and email.it also has a method called ViewData() that allows user to view websites data.

/*

let data = "Information is Secret."
class User{
    constructor(name,email){
          this.name = name;
          this.email = email;
    }
    viewData(){
        console.log("Data = ",data);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "we have email Update by Admin"
    }
}

let student1 = new User("Anwar","anwar@gmail.com");
let student2 = new User("Yasir","yasirafridi@gmail.com");
let student3 = new User("Saad","saadafridi@gmail.com");
console.log(student1,student2,student3);


let admin1 = new Admin("admin","admin@gmail.com"); 

*/


//Error Handling
/*
let a = 5;
let b = 10;

console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a+b);
try{
    console.log("a+b = ",a+c);

}catch(err){
    console.log(err);
}
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
*/
