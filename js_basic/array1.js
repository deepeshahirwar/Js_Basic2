 // print array of element using for loop
//  let arr = [1,2,3,4,5]; 
 
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]+" ");
// }  
 
// print array of element using for of  loop 
// const fruits =["apple","mango", "grape","banana"]; 
//  const copy =[]; 

// for( let fruit of fruits ){
//     copy.push(fruit.toUpperCase());
// } 
// console.log(copy); 
 
// for in loop in array 
// const fruits =["apple","mango", "grape","banana"]; 
//  const copy =[]; 

// for( let index in fruits ){
// console.log(fruits[index]);
// }  
 
// array destructuring 
// const arr =["value1", "value2"];   
// first method
// let var1 = arr[0]; 
// let var2 = arr[1]; 
 
// console.log(var1, var2); 
 
// second method  
 
// let [var1, var2] = arr;  
// var2 = "changed value";
// console.log(var1, var2);  
 
let arr =[1,2,3,4,5];  
 
// let [var1 , , var2, , var3]= arr;  
// console.log(var1, var2 , var3);  
 let arr2 = arr.slice(3,4);
let [var1, var2, ...restValue]=arr; 
console.log(var1,var2,restValue,arr2); 

 




 

 
 
 
