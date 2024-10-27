/*const user = {
    username :"subha" , 
    log: 90 , 
    signedin : true ,


getuserdetails:  function () {
  //  console.log("got user details ") ; 
    console.log(`Username: ${this.username}`);
    console.log(this);
    

}  


}  

console.log(user.username);
console.log(user.getuserdetails());

console.log(this); 
*/

function user (username, logincount ,  isloggedIn ) {
      this.username = username ; 
      this.logincount = logincount;
      this.isloggedIn = isloggedIn;
      
      this.greeting = function name(params) {
       console.log(`welcome: ${this.username}`);
        
      }
      return this 
} 

const userOne = new user("helly" , 12 , true)
const userTwo = new user("Visca Barca", 11 , false)
console.log(userOne.consturctor);
//console.log(userTwo);

