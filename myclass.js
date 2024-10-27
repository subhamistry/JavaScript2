/*class user {
    constructor(username ,  email , password ){
        this.username = username;
       this.email=email;
        this.password = password
    }

    encryptpassword(){
        return `${this.password}abc`

    } 
    changeusername (){
        return `${this.username.toUpperCase()}`
    }
} 

const chai = new user ("chai ", "chai@gmail.com" , "123")
console.log(chai.encryptpassword())
console.log(chai.changeusername());

*/
//behind the scene 

function User(username , email , password) {
    this.username= username
    this.email = email
    this.password = password 
} 
User.prototype.changeUsername = function(){
    return`${this.username.toUpperCase()}`
} 

User.prototype.encryptpassword = function(){
    return`${this.password}abc`
} 

const tea = new User("usertea" , "tea@gmail.com" , "wieih");

console.log(tea.encryptpassword());
console.log(tea.changeUsername());

