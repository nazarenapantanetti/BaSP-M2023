//EMAIL VALIDATION
var inputEmail = document.getElementById('email-input');
var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;

function validationEmail() {
  if (emailRegex.test(inputEmail.value)) {
    console.log('ok');
  } else {
    inputEmail.classList.add('xError');
  }
}
inputEmail.addEventListener('blur', validationEmail);

function removeEmailAlert() {
  inputEmail.classList.remove('xError');
}
inputEmail.addEventListener('focus', removeEmailAlert);

//PASSWORD VALIDATION
var inputPassword = document.getElementById('password-input');

function validationPassword() {
  if (inputPassword.value.lenght >= 5) {
    return inputPassword.value.includes('a' && 1);
  } else {
    inputPassword.classList.add('xError');
  }
}
inputPassword.addEventListener = ('blur', validationPassword);

function removePasswordAlert() {
  inputPassword.classList.remove('xError');
}
inputPassword.addEventListener('focus', removePasswordAlert);
/*
//BUTTON
var buttonLogin = getElementById('login-button');

function validationLogin() {
  if (validationEmail === true && validationPassword === true) {
    return alert('welcome');
  } else {
    alert('email or password is wrong');
  }
}
buttonLogin.addEventListener('onclick', validationLogin);*/
