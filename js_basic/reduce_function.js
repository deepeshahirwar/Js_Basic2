const myNums =[1,2,3,4,5]; 
 
// const myTotal = myNums.reduce(function (acc, currval){ 
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc+currval;
// }, 0)
//console.log(myTotal);  
// in arrow function 
const myTotal = myNums.reduce( (acc, curr) => acc+curr,0)
console.log(myTotal); 
 
const shopppingCard =[ 
    {
    itemName:"jscource",
    price:1999 
    },
    {
     itemName:"frontend Development",
     price:2999 
     },
    {
    itemName:"backtend Development",
    price:3999 
    },
] 
 
const priceToPay = shopppingCard.reduce( (acc,item) => acc+item.price,0); 
console.log(priceToPay);