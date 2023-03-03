const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword= /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export default function validation(inputs) {
  let errors={}
  if(!regexEmail.test(inputs.username))errors.username="You must enter a valid email";
  else if(!inputs.username)errors.username="username cannot be empty";
  else if(inputs.username.length>35) errors.username="username must be less than 35 characters";
  else if(!regexPassword.test(inputs.password))errors.password="the password must have at least one number";
  else if(inputs.password.length<5 && inputs.password.length>10) errors.password="password must be between 6 to 10 characters"
return errors;
}
