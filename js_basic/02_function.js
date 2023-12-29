 //lecture no. 20 by hitesh sir
 //rest operator in function 
 //...num1
//  function calculateCartPrice(num1){
//     return num1;
//  } 
//  console.log(calculateCartPrice(100,200));
//  function calculateCartPrice(...num1){
//     return num1;
//  } 
//  console.log(calculateCartPrice(100,200,300));
  
//  function calculateCartPrice(val1, val2,...num1){
//     return num1;
//  }   
 
//  console.log(calculateCartPrice(100,200,300,400,500));
 
 //object in function  
//  const user ={
//     username : "Deepesh",
//     price:199
//  }
 function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is 
   ${anyobject.price}`);
 } 
 //handleObject(user); 
 handleObject({
    username:"ram",
    price:108
 })  
  
 //array in function 
 const array =[1,2,5,4,3]; 
  
 function returnMaxValue(getMax){
    let max =Number.MIN_VALUE; 
    for( let val =0; val<getMax.length; val++){
        if(getMax[val] > max){
            max =getMax[val];
        }
    } 
    return max;
 }  
 function returnMinValue(getMax){
    let min=Number.MAX_VALUE; 
    for( let val =0; val<getMax.length; val++){
       min =Math.min(getMax[val],min);
    } 
    return min;
 } 
 console.log("max value is : "+returnMaxValue(array)); 
 console.log("min value is : "+returnMinValue([1,2,3,4,5]));
