 const user = {
    name :"deepesh", 
    id:"124sdhue438dhe8",
    age:20 , 
     
    getValues: function(){
        console.log(`${this.name},your welcome`);
      //   console.log(this);
    }

 }   
//  user.getValues(); 
//  user.name = "prafful"; 
//  user.getValues(); 

 //console.log(user); 
// console.log(this); 
 
//Arrow function 
// function chai(){ 
//   let name ="deepesh"
//   console.log(this.name);
// }
//  chai(); 
 
// const chai = function (){ 
//   let name ="deepesh"
//   console.log(this.name);
  
// } 
// chai(); 
 
// const chai = () => { 
//   // let name ="deepesh" 
//  // console.log(this.name);
//   console.log(this);
  
// } 
// chai(); 
 
// const addtwo = (num1, num2) => {
// return num1+num2;
// }  
//const addtwo = (num1, num2) => (num1+num2);
  
const addtwo = (num1, num2) => ({username:"hitesh"});
   
console.log(addtwo(5,2));
   
// const myarray =[3,5,2,5,2,4,3]; 
 
// myarray.forEach();
 