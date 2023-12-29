//spread operator in Array
// const array1 =[1,2,3]; 
// const array2 =[4,5,6]; 
//  const newArray =[...array1, ...array2,39,49]; 
// const newArray =[..."12345"];//12345 give error
//  console.log(newArray); 
  
 //spread operator in object 
  
 const obj1 = {
   key1:"value1",
   key2:"value2",
//    key1:"value10"
 }; 
 
 const obj2 = { 
    key1 :"valueUnique",
    key3:"value3",
    key4:"value4", 
  };  
  //spread 
 // const newObject = { ...obj1, ...obj2, key10:"value10"}; 
//   const newObject = { ...obj2, ...obj1}; 
const newObject ={ ..."abcdefghijklmnopqrstuvwxyz"};
  console.log(newObject);
 