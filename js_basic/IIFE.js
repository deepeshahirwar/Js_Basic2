//lecture - 24 
// Immediately Invoked Function Expression (IIFE) 
//use case of (IIFE) 
//1. Avoid pollution of global variable ,  
//2. Immediately execute,  
//3.It is used in JQuery Library. 
//4.Asynchronous functions in loops 

( function chai(){
    console.log("DB IMMEDIATELY CALL");
 }) ();
  
 ( (name) => {
    console.log( `DB IMMEDIATELY CALL ${name}`);
 }) ("deepesh"); 
  
 
 -function (num) { 
   console.log(num);//-10
   // Code that runs in your function
}(10); 
 
 const value = -function () { 
  return 10;
}(); 
console.log(value);
   

 // we can also create IIFE function like - 
//  +function () {
//    // Code that runs in your function
// }();

// -function () {
//    // Code that runs in your function
// }();

// !function () {
//    // Code that runs in your function
// }();

// ~function () {
//    // Code that runs in your function
// }();

// void function () {
//    // Code that runs in your function
// }();