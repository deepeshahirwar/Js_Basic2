// for each loop in js 
 
const arr = [1,2,4,5,6]; 
 
// arr.forEach(function (val){
//     console.log(val);
// });  
 
// arr. forEach( (item) => {
// console.log(item);
// }) 
  
// function printMe(item){
//     console.log(item);
// } 
// arr.forEach(printMe);   
 
// arrays 
//["","",""....]  string in array
//[{},{},{},{}] object in array
 
// const coding = ["c++","java","html","css","JavaScript"]; 

 
// coding.forEach( (item, index, arr) =>{
//    // console.log(index,item); 
//     console.log(item,index, arr);
// }) 

const  myCoding = [
    {
      languageName :"java",
      languageFileName:".java"
    }  
    ,
    {
        languageName :"javaScript",
        languageFileName:".js"
      } 
      ,  
      {
        languageName :"c++",
        languageFileName:".cpp"
      }
]; 
 myCoding.forEach( (item) => { 
 console.log(item.languageName); 
// console.log(item.languageFileName);
 })