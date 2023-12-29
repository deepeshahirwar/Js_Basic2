let  randumNumber = parseInt(Math.random()*100 +1); 

 const submit = document.querySelector('#subt'); 
 const userInput = document.querySelector('.guessField');
 const guessSlot = document.querySelector('.guesses');  
 const remaining = document.querySelector('.lastResult');  
 const lowOrHigh = document.querySelector('.lowOrHigh');   
 const startOver = document.querySelector('.resultParas');    
 
 const p = document.createElement('p');

 let prevGuess = []; 
 let numGuess = 1; 

 let playGame = true;  

 if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault(); 
        const guess = parseInt(userInput.value); 
       console.log(guess);
       validateGuess(guess);
        
    });
 }
  
 function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } 
    else if(guess < 1){
        alert('Please enter a number more than 1')  
    } 
    else if(guess > 100){
        alert('Please enter a number less than 100')  
    } 
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMassage(`Game Over. Random number was ${randumNumber}`); 
            endGame();
        } 
        else{
            displayGuess(guess);
            cheakGuess(guess);
        }
    }
    
 } 
  
 function cheakGuess(guess){
    if(guess == randumNumber){
      displayMassage(`Congratulation! , You guesses it right`); 
      endGame();  
    } 
    else if(guess < randumNumber){
        displayMassage(` Number is TOO low`);    
    } 
    else if(guess > randumNumber){
        displayMassage(` Number is TOO high`);    
    }
 } 
  
 function displayGuess(guess){
    userInput.value ='';
    guessSlot.innerHTML += `${guess} `; 
    numGuess++; 
    remaining.innerHTML =`${11- numGuess}`;
 } 
  
 function displayMassage(massage){
    lowOrHigh.innerHTML =`<h2>${massage}</h2>`;
 } 
  
 function endGame(){
   userInput.value ='' 
   userInput.setAttribute('disabled','');
   p.classList.add('button');
   p.innerHTML = `<h2 id="newGame">Start new game</h2>`;  
   startOver.appendChild(p);  
   playGame = false;
  newGame();
 } 
// reset all variable value for new game  
 function newGame(){
const newGameButton = document.querySelector('#newGame') 
newGameButton.addEventListener('click', function(e){
 randumNumber =  parseInt(Math.random()*100 +1);
 prevGuess =[]
  
 numGuess =1;
 guessSlot.innerHTML='' 
 remaining.innerHTML =`${11- numGuess}`; 
 userInput.removeAttribute('disabled');  
 startOver.removeChild(p);

 playGame = true;  
})


 } 