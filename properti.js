function user(email, password) 
{
this.email = email ; 
this.password = password 
Object.defineProperty(this , 'email' , {
    get: function name(params) {
        return this.email.toUppercase()
    } , 
    set : function (params) {
        this._email = value 
    }
})    
Object.defineProperty(this , 'password' , {
    get: function name() {
        return this.password.toUppercase()
    } , 
    set : function () {
        this._password = value 
    }
})    
}

const chai = new user ("chai@bjdj" , "cihsqs");
console.log(chai.email);
