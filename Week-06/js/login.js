//EMAIL VALIDATION
var inputEmail = document.getElementById('email-input');
var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;

function validationEmail() {
  if (emailRegex.test(inputEmail.value)) {
    console.log('ok');
  } else {
    inputEmail.classList.add('xError');
    console.log('bad');
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
  var password = inputPassword.value;
  var hasSmallLetter = false;
  var hasNumber = false;

  for (var i = 0; i < password.length; i++) {
    var char = password.charAt(i);
    if (char >= '0' && char <= '9') {
      hasNumber = true;
    } else if (char === char.toLowerCase()) {
      hasSmallLetter = true;
    }
  }
  if (!hasSmallLetter || !hasNumber) {
    inputPassword.classList.add('xError');
  }
}
inputPassword.addEventListener('blur', validationPassword);

function removePasswordAlert() {
  inputPassword.classList.remove('xError');
}
inputPassword.addEventListener('focus', removePasswordAlert);

//BUTTON
var buttonLogin = document.getElementById('login-button');
var msgErrorEmail = document.getElementById('msgErrorEmail');
var msgErrorPassword = document.getElementById('msgErrorPassword');

function validationLogin() {
  if (
    inputEmail.classList.contains('xError') ||
    inputPassword.classList.contains('xError')
  )
    alert('email or password is wrong');
  if (inputEmail.classList.contains('xError')) {
    msgErrorEmail.classList.remove('ok');
    inputEmail.onfocus = function () {
      msgErrorEmail.classList.add('ok');
    };
  } else if (inputPassword.classList.contains('xError')) {
    msgErrorPassword.classList.remove('ok');
    inputPassword.onfocus = function () {
      msgErrorPassword.classList.add('ok');
    };
  } else {
    alert('welcome');
  }
}
buttonLogin.addEventListener('click', validationLogin);
