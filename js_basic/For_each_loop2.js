// for each loop class 2 in js 
 
//const coding = ["c++","java","html","css","JavaScript"]; 
 
// const values =  coding.forEach( (item) => {
//  //console.log(item); 
//  return item;
// }) 
// console.log(values); 
// filter 
 // const myNum =[1,2,3,4,5,6,7,8,9,10]; 
  
//  const ans = myNum.filter( (num) => num > 4); 
//  console.log(ans); 
  
//  const allEven = myNum.filter( (num) => num%2==0 ); 
//  console.log(allEven); 

//second way to apply condition in foreach loop 
//  const newArr = [];
  
//  myNum.forEach( (num) => {
//     if(num%2==1){
//         newArr.push(num);
//     }
//  }) 
//  console.log(newArr);
 
 // filter 
 const books =[ 
    {
        title:'book1',genre:'english',publish:1984
    },
    {
        title:'book2',genre:'maths',publish:1985
    },
    {
        title:'book3',genre:'history',publish:2001
    },
    {
        title:'book4',genre:'science',publish:1987
    },
    {
        title:'book5',genre:'maths',publish:2002
    }
 ]; 
  
 //const userBooks =  books.filter( (book) =>book.genre === 'maths' ); 
 //console.log(userBooks); 
  
//  const userBooks =  books.filter( (book) =>book.publish >= 2000 ); 
//  console.log(userBooks); 

 const userBooks =  books.filter( (book) =>{ 
 return book.publish >= 2000  &&book.genre ==='maths'; 
  
}); 
 console.log(userBooks);

 