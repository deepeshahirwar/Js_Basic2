const form = document.querySelector('form');
 
form.addEventListener('submit', function(event){
    event.preventDefault();
   const height = parseInt(document.querySelector('#height').value);
   console.log("height -->",document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value); 
   let results = document.querySelector('#results'); 
    
//    some check point 
if(height ==='' || height < 0 || isNaN(height )){
    results.innerHTML = `Please give a valid height ${height}`;
} 
else if(weight ==='' || weight < 0 || isNaN(weight )){
    results.innerHTML = `Please give a valid weight ${weight}`;
} 
else{
  // calculate BMI using formula 
 const bmi = (weight / ((height*height)/10000)).toFixed(2);   
 // show the result 
 console.log(results); 
 if(bmi < 18.6){
    results.innerHTML = `<span>Your bmi is (Under weight) : ${bmi}<span/>`;   
 } 
 else if(bmi >= 18.6 && bmi <= 24.9){
    results.innerHTML = `<span>Your bmi is (Normal weight) : ${bmi}<span/>`;
 } 
 else if(bmi > 24.9){
    results.innerHTML = `<span>Your bmi is (Over weight) : ${bmi}<span/>`;
 } 
 else{
    results.innerHTML = `<span>Your bmi is : ${bmi}<span/>`;
 }
 
}
})