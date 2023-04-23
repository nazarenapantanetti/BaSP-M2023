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
// var emailAlert = document.getElementById('invalidEmail');
//emailAlert.style.display = "block";
/* 
  inputEmail.insertAdjacentHTML(
      'afterend',
      '<div class="xError"> invalid email </div>'
    );*/
inputEmail.addEventListener('blur', validationEmail);

function removeEmailAlert() {
  //document.getElementsByClassName('xError').remove;
  //document.classList.remove('xError');
  //inputEmail.resetAdjacentHTML();
  inputEmail.classList.remove('xError');
}
inputEmail.addEventListener('focus', removeEmailAlert);

//PASSWORD VALIDATION
var inputPassword = document.getElementById('password-input');
var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

function validationPassword() {
  if (inputPassword.value.lenght >= 5) {
  } else {
    inputPassword.classList.add('xError');
  }
}
inputPassword.addEventListener = ('blur', validationPassword);
// (passwordRegex.test(inputPassword.value))
// inputPassword.placeholder = 'password short';

function removePasswordAlert() {
  inputPassword.classList.remove('xError');
}
inputPassword.addEventListener('focus', removePasswordAlert);

//BUTTON
var buttonLogin = getElementById('login-button');

function validationLogin() {
  if (validationEmail === true && validationPassword === true) {
    return alert('welcome');
  } else {
    alert('email or password is wrong');
  }
}
buttonLogin.addEventListener('onclick', validationLogin);
/*
var email = document.getElementsByClassName('email-input input');
email.addEventListener()

var button = document.getElementsByClassName('button.firstChild');
button.addEventListener('click', ButtonClick());

function ButtonClick(){
    if (x && = true )
    alert('email content') {

    } else {alert('your email or password is wrong') }
} */
