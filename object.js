function multipleby5(num){
    this.num = num 
    return num*5
} 

multipleby5.power = 2
console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

//each thing is object in js 
//protyple inheritence 
function createuser(username, score ) {
    this.username = username
    this.username = score 
} 

createuser.prototype.increment = function name(params) {
   this.score++ 
} 
createuser.prototype.printme = function name(params) {
    console.log(`score is ${this.score}`);
    
}
const chai = new createuser("chai" , 30 )
const tea = new createuser("tea", 250)

chai.printme()
