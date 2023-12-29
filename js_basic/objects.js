// topic objects
// array are good  but not sufficient for real world data 
// objects store data as key value pairs {key,value}; 
// object don't have index 

// how to create object 
// const person = {name:"Deepesh", age: 20}; 
// console.log(person); 
// // how to access data from objects 
// console.log(person.name);
// console.log(person.age);   
// // second way
// console.log(person["name"]);  

 
// array in object 
 
// const person2 = {
//  name:"Rahul", 
//  age :20,
//  hobbies:["cooking","traveling","dance",]
// } 
// console.log(person2.hobbies); 
 
// how to add key value pair to objects 
// person2.gender = "male";  
// person2.class = "3rd year";
// console.log(person2); 
 
// difference between dot and braket notation 
let key ="email";
const person3 = {
     name:"Rahul", 
     age :20,
    "Rahul hobbies":["cooking","traveling","dance",]
    }   
    console.log(person3["Rahul hobbies"]); 
    person3[key]="rahul123@gmail.com"; 
    console.log(person3);

    