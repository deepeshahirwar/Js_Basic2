//how to iterate object 
const person = {
    name:"Rahul", 
    age :20,
   "Rahul hobbies":["cooking","traveling","dance",]
   }   
  // for in loop 
  // Object.keys 
    
  // for get properties
  // for( let properties in person){
  //   console.log(properties);
  // }  
  // for get value
  // for( let properties in person){
  //   console.log(person[properties]);
  // } 
   
   // for get key:value
  //  for( let properties in person){
  //   console.log(`${properties}:${person[properties]}`); 
  //   console.log(properties," : ",person[properties]);
  // }   
   
  // console.log( typeof(Object.keys(person))); 
   
  // chack our element array or not 
   
  // const val = Array.isArray((Object.keys(person))); 
  // console.log(val); 
   
  //using for of loop 
  for(let key of Object.keys(person)){
    console.log(key);
  } 
  for(let key of Object.keys(person)){
    console.log(person[key]);
  }
   