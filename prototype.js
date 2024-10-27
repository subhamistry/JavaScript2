let myheros = ["thor" , "spiderman"]

let heropower = {
    thor: "hammer",
spiderman: "comedy",
getspiderpower: function name(params) {
    console.log(`spidy power is ${this.spiderman}`);
    
}
} 
 const user={
    name:"chao",
    email:"bewbd@skcans"
 }

//inheritance 
const  teacher = {
    makevideo : true 

} 

const techingsupport = {
    isavailable:false

} 


const TAsupport = {
    makeassignment: 'JS assignment',
    fulltime: true , 
    _prototype_: techingsupport ,
} 
teacher._prototype_=user
//modern syntax
Object.getPrototypeOf(techingsupport , teacher) 

let anotherusername = "chaiaurcodse "
String.prototype.truelength = function name(params) {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
 
} 

anotherusername.truelength()
"hitesh".truelength()
"icetta".truelength()