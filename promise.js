//fetch('https://something,com').then().catch().finally()
const promsieOne =   new Promise(function(resolve , reject){
    //do an async task 
    //DB call , cryptography , network 
    setTimeout(function(){
        console.log('Async task is complete ');
        resolve()
    },1000)
})

promsieOne.then(function(){
    console.log("promise consume ");

    
}) 
new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log("Async task 2");
        resolve()

        
      }, 1000);  
}).then(function name(params) {
    console.log("Async 2 resolved ");
    
})

const promiseThree = new promise(function(  resolve, reject  ){
         setTimeout(function(){
            resolve({
                username: "subha" , email:"kcnc.com"
            })
         },1000)
}) 

promiseThree.then(function name(username) {
    console.log("user");
    
})


const promisefour = new promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({
                username: "leo" , password : "2406", 
            })
        } else{
            reject('ERROR: something went wrong ')
        }
    },1000)

})

 promisefour.then((user) =>  {
     console.log(user);
     return user.username
     
}).then((username) => {
    console.log(username);
    
}).catch(function(){
    console.log(error);
    
}).finally(() => console.log("the promise is either resolved or rejeted ")


)




const promiseFive = new promise(function name(resolve , reject) {
         setTimeout(function(){
            let error = true
            if (!error) {
                resolve({ username: "javascript " , password: "123"})
            } else {
                reject('error ,  js went wrong ')
            }
         }, 1000)    
});

async function consumePromisFive (params) {
   try{
    const response =  await  promiseFive()
   console.log(response);
   
} catch (error){
   console.log(error);
   

} 
} 


consumePromisFive()

async function getAllusers (){
try {
    const response = await fetch('')
    const data = await response.json()
    console.log(data);
    
} catch (error) {
console.log("E: " , error);

}  
}
getAllusers()