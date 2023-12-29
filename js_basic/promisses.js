const promiseOne = new Promise(function(resolve, reject){
    // do an async task 
    // DB calls, cryptography, network 
    setTimeout(function() { 
        
       console.log('async task is complete..');  
       resolve();
    }, 1000);
}) 


 
promiseOne.then(function(){
    console.log("Promise consumed..");
}) 
 
// second way to write promise 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task2 is complete..');
        resolve();
    },1000);
}).then(function(){
    console.log('Promise2 consumed..');
})

//to create promise third 

const promiseThird = new Promise(function(resolve, reject){
    setTimeout(function(){
     resolve({
        username : "deepesh",
        email : "deepeshahirwar7024@gmail.com",
        age : 21
     })
    }, 1000);
}) 
 
promiseThird.then(function(user){
    console.log(user)
})
 
//to create promise four
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (error) {
            resolve({
                username: "deepesh",
                passward: "1234"
            })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally( () => 
    console.log('The promise is either resolve or rejected'))
     
    

    //to create promise five  
    // very imporment
    const promiseFive = new Promise(function(resolve, reject){ 
        setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({
                username: "JavaScript",
                passward: "1234"
            })
        }
        else {
            reject('ERROR: js went wrong')
        }
    }, 1000)
    }) 
     
    async function consumePromiseFive(){
        try {
            const response = await promiseFive; 
            console.log(response); 
     
        } catch (error) {
          console.log(error);  
        }
    }
    consumePromiseFive(); 
    
     
    // get data using async await function 

    async function getAllUserData(){
        try { 
            const response = await fetch( 
            'https://api.github.com/users/hiteshchoudhary')
            const data = await response.json();
            console.log(data);
            
        } catch (error) {
           console.log("Error:", error); 
        }
    } 
    getAllUserData(); 

    // same task using then(), catch()
     
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) =>{
        return response.json();
    }) 
    .then((data) => {
        console.log(data);
    }) 
    .catch((error) => console.log(error))
