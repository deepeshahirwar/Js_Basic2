// operators in js
//  function operators(a ,b, c){
//     if( a < b){
//         return 1;
//     } 
//     else if (b < c){
//         return 2;
//     } 
//     else if(a === b || b===c){
//         return 3;
//     } 
//     else {
//         return 0;
//     }
// } 
//  console.log(operators(2 ,5,1)); 

// loops in js  
// for loop
//  let cnt=0;
//  for( let i=0; i<5; i++){
//     console.log("Deepesh"); 
//     cnt +=2;
//  } 
//  console.log(cnt);  

// do - while loop  
//  let n=0; 

//  do{
//     console.log("Deep"); 
//  } 
//  while(n>0){
//     console.log("Deeps"); 
//  } 

// while loop 
//  while (condition)
//  statement 

// let i=0; 
// let  j=5;
// while( j !== 0){
//     i +=2; 
//     j--;
// } 
// console.log(i);  

// break , continue 


// string and  Array 

// let str ="Deepesh";  
// let n = str.length; 
// let counter =0;
// for(let i=0; i<n; i++){
//    if(str[i] === 's'){ 
//     console.log(str[i]); 
//     break;
//    } 
//     if(str[i] === 'D'){continue;} 
//     console.log(str[i]);   
// } 

// string practice
//  function isEqual(s1,s2){ 
//     return s1===s2;
// }  
// console.log(isEqual("ram","ram")); 

//  while loop 
let i = 0;
let tableof = 0;
console.log("table of five :");
while (i < 10) {
    i++;
    tableof += 5;
    console.log(tableof);
}



