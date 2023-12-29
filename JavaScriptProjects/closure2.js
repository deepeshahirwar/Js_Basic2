  // closure in js  , laxical scope

//eg.1 using var
//  if (Math.random() > 0.5) {
//     var x = 1;
//   } else {
//     x = 2;
//   }
//   console.log(x); 
  // it will give o/p-> 2  

// eg.2  using const   
  if (Math.random() > 0.5) {
    const x = 10;
  } else {
    const x = 20;
  }
  console.log(x); 
  // ReferenceError: x is not defined
  