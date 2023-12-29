 // constain in js 
let radius =10; 
const pi = 3.14; //we cannot changed
let area = pi*radius*radius; 
// console.log(area); 
 
// some practice on datatypes 
let num = 5554565745544887; 
let num2 = 5/0;// infinity 
let num3 = -4/0;
console.log(num3);  
 
//min value and max value 
let min = Number.MIN_VALUE; 
let max = Number.MAX_VALUE; 
console.log(min+"   "+max*10)//5e-324   Infinity 
 
// Bigint 
let num4 = 46464564616165156513232n; 
console.log(num4 + 2n); 
 
//string 
let  firstName = "Deepesh"; 
let lastName = "Ahirwar"; 
 
let merge =  firstName +"  "+ lastName ;  
 
let s1 ="rah\nul"
console.log(s1);  
 
// boolean 
let bool = 5 < 6; 
console.log(bool); 
 
// string conversion 
// number to string
let num5 = String(4);   
 
console.log(num5 , typeof num5);  
 // string to number 
  

let num7 = Number("123"); 
   
console.log(num7 , typeof num7);

// coercion 
let x ; 
console.log(x, typeof x); 
 x = 12;  
 console.log(x, typeof x);  
  
 x = x+ ""; 
 console.log(x, typeof x);  
  
 x = x-2; 
 console.log(x, typeof x);  
  
   
 x = !x; 
 console.log(x, typeof x);  
   
 // 0 = false 
 // 1 to infinity all number give = true 
  
 console.log(Boolean(0));//false   
 console.log(Boolean(1)); //true 
 console.log(Boolean(20));//true   

  
 

