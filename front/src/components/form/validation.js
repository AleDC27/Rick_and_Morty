const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword= /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export default function validation(inputs) {
  let errors={}
  if(!regexEmail.test(inputs.username))errors.username="debe ingresar un email valido";
  else if(!inputs.username)errors.username="el nombre del usuario no puede estar vacio";
  else if(inputs.username.length>35) errors.username="el nombre del usuario debe ser menor a 35 caracteres";
  else if(!regexPassword.test(inputs.password))errors.password="la contraceña debe tener al menos un numero";
  else if(inputs.password.length<5 && inputs.password.length>10) errors.password="la contraceña debe tener entre 6 a 10 caracteres"
return errors;
}
