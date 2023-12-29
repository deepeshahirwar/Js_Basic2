 //lecture -19
 //function in js 
//A JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it). 
// Example
// // Function to compute the product of p1 and p2
// function myFunction(p1, p2) {
//   return p1 * p2;
// } 
// //function with parameter
// function name(parameter1, parameter2, parameter3) {
//     // code to be executed
//   } 
 //1
// function square(num){
//     return num*num;
// } 
// console.log(square(5)); 
 
//2  
// print n fibbonacci numbers usiing functoin
// function fibbo(n){
//  let dp=[]; 
//  dp[0]=1;
//  dp[1]=1; 
  
//  for(let i=2; i<n; i++){
//   dp[i]= dp[i-1]+dp[i-2];
//  }
//  return dp;
// } 
// let n=5; 
// console.log(fibbo(n)); 
 
//3 
// function add(num1, num2){
   
//     console.log("deepesh");// print
//     return num1+num2; 
//     console.log("deepesh");//not print
// }
// const ans = add(2,4); 
// console.log(ans); 

//4 
function loginUserMessage(username){ 
  //  if(username === undefined){ 
        if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}  

const  message = loginUserMessage();//undefined 
//const  message = loginUserMessage("Deepesh");
console.log(message);