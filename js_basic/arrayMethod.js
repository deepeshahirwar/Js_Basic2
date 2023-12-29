// arrays methods 
// length
//  toString(),push(). pop(),shift(), unshift()
//join(), delete(), concat(), splice(), slice()
 
// sort(), reverse();
// let arr=[]; 
// for(let i=1; i<=5; i++){
//     arr.push(i);
// } 
// console.log(arr); 
// let poped =arr.pop(); 
// console.log(arr);
// console.log(poped);  
  
// sort in ascending order
let arr2 =[67,32,55,25]; 
arr2.sort(); 
console.log("ascending order", arr2); 
 
let min = arr2[0];
let max =arr2[arr2.length-1]; 
 
console.log(min, max); 

// sort in descending order 
arr2.sort(function(a, b){return b - a}); 
console.log("descending order " , arr2); 