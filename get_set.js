class User {
    constructor(email, password ) {
        this.emal = email ;
        this.password = password
    } 

    get email(){
        return this._email.toUppercase()



    }

    set email(value){
     this._email =value
    }
    get password(){
        return `${this._password}starc`//this._password.toUppercase()

    }
    set password(value){
        this._password = value
    }

    }
const starc = new User ("subha@123" , "#344" );
  console.log(starc.password);
  