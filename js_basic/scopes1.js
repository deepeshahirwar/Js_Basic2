//lecture no. 21 
//topic - scope 
// let a=20; 
// var b=30; 
// const c=40; 
 
// console.log(a);
// console.log(b);
// console.log(c); 
// if(true){
//     let a=20; 
//     var b=30; 
//     const c=40;    
// }

//console.log(a);
//console.log(b);
//console.log(c);  
 
//nested scope  
//lecture 22
// function one(){
//     const username ="hitesh";  
//     function two(){
//       const website = "youbute";  
//       console.log(username);
//     }
//    // console.log(website); 
     
//    two();
// }
// one(); 
 
// function declaration 1 
 
function addtwo(num){ 
  return num+2;

}  
 console.log(addtwo(5));
// function declaration 2 
 
const ans = function addthree(num1,num2){ 
  return num1+num2+2;
}  
addthree(5,5); 
console.log(ans);