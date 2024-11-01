const user = {
    _email: 'bejbf@d',
    _password: "dsd",
   
  get email(){
    return this._email.toLocaleUpperCase()
  },
  set email(value){
 this._email = value
  },

  get password(){
    return this._password.toLocaleUpperCase()
  },
  set password(value){
 this._password = value
  },




} 
const tea =  Object.create(user)
console.log(tea.email);
console.log(tea._password);

