const descripter = Object.getOwnPropertyDescriptor(Math, 
    "PI")

    console.log(descripter);
    
console.log(Math.PI);
Math.PI  = 5 
console.log(Math.PI);

const chai = {
    name:'masala' , 
    price: 344 , 
    isavailable : true
}
console.log(Object.getOwnPropertyDescriptor(chai , "name"));


// Object.defineProperty(chai, "name" , {
//      writable : false , 
//      enumerable : false
// })  

// console.log(Object.getOwnPropertyDescriptor(chai , "name"));

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}