function setUsername(username) {
    this.username = username
  console.log("called");
  
    
}  
function createUser(username , email , loggedIn ) {
  //  setUsername (username) 
//  setUsername.call(this, username)
   // this.username = username
    this.email = email 
    this.loggedIn = loggedIn 
} 

const chai = new createUser("chai" , "chai@gb.com " , 9397);

console.log(chai);

