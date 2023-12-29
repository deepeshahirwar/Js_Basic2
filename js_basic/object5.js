//object destructuring 
//  const names ={
//  name1:"deepesh", 
//  name2:"rahul"
//  };
//  const var1 =names.name1; 
//  const var2 =names.name2;
//   let {name1 , name2} = names; 
//  console.log(name1, name2); 
  
 // js by Hitesh sir 
  
//  const tinderUser = new Object()//single tern object

 const tinderUser ={}; //non-single  tern object  
 //console.log(tinderUser);
 
 tinderUser.name ="Deepesh";
 tinderUser.id="1283eud"; 
 tinderUser.passward =" 48rudr94r"; 
//  console.log(tinderUser); 
  
//nested objects
// const User1={
//   firstname1 :"shivkumar", 
//   lastname1 :"ahirwar", 
   
//   User2:{
//    firstname2 :"ram", 
//    lastname2 :"ahirwar2",  
    
//    User3:{
//      firstname3:"prafful", 
//      lastname3 :"patel",
//    }
//   } 
// }; 
// console.log(User1.User2?.User3.firstname3);

 // objects combined 
//  const obj1 ={1:"a",2:"disha"}
//  const obj2 ={3:"a",4:"dyandh"}
//  const obj3={5:"a",6:"b"}  
  
//  const obj3 ={obj1, obj2};  
// const obj4 = Object.assign( {},obj1, obj2,obj3) 
// const obj4 = {...obj1, ...obj2}
//  console.log(obj4); 
  
 // objects in array 
  
 const arr = [ 
    {
        name1:"deepesh",
        emailId:"d@gmail.com",
    }, 
    {
      name2:"rahul", 
      id2:"r@gmail.com",
    } ,
    {
        name3:"prafful", 
        id3:"p@gmail.com",
      }
 ]
 //console.log(arr);  
// console.log(tinderUser); 
// some methods of objects
//   const arr2 = Object.keys(tinderUser);  
//   const arr3 = Object.values(tinderUser); 
//   console.log(arr2); 
//   console.log(arr3);   
//   console.log(Object.entries(tinderUser)); 
//   console.log(tinderUser.hasOwnProperty('name1'));//return true or flase

//   console.log(arr[0]); 
//   console.log(arr2[0]);  
//   for(let i=0; i<arr2.length; i++){
//     console.log(arr2[i]);
//   } 
 
const course ={
    coursename:"js in hindi",
    price : "999",
    courceInstructor:"hitesh sir"
} 

//course.courceInstructor="deepesh";  
console.log(course.courceInstructor);
const {courceInstructor} =course; 
const {courceInstructor: var1} =course; 
console.log(var1);

