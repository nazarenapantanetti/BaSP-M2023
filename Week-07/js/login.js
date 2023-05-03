//EMAIL VALIDATION
var inputEmail = document.getElementById("email-input");
var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;

function validationEmail() {
  if (emailRegex.test(inputEmail.value)) {
  } else {
    inputEmail.classList.add("xError");

    return false;
  }
  return true;
}
inputEmail.addEventListener("blur", validationEmail);

function removeEmailAlert() {
  inputEmail.classList.remove("xError");
}
inputEmail.addEventListener("focus", removeEmailAlert);

//PASSWORD VALIDATION
var inputPassword = document.getElementById("password-input");

function validationPassword() {
  var password = inputPassword.value;
  var hasSmallLetter = false;
  var hasUpperLetter = false;
  var hasNumber = false;

  for (var i = 0; i < password.length; i++) {
    var char = password.charAt(i);
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    } else if (char === char.toLowerCase()) {
      hasSmallLetter = true;
    } else if (char === char.toUpperCase()) {
      hasUpperLetter = true;
    }
  }
  if (!hasSmallLetter || !hasNumber || !hasUpperLetter) {
    inputPassword.classList.add("xError");
    return false;
  }
  return true;
}
inputPassword.addEventListener("blur", validationPassword);

function removePasswordAlert() {
  inputPassword.classList.remove("xError");
}
inputPassword.addEventListener("focus", removePasswordAlert);

//BUTTON
var buttonLogin = document.getElementById("login-button");
var msgErrorEmail = document.getElementById("msgErrorEmail");
var msgErrorPassword = document.getElementById("msgErrorPassword");

function validationLogin() {
  var url =
    "https://api-rest-server.vercel.app/login?email=" +
    inputEmail.value +
    "&password=" +
    inputPassword.value;
  if (validationPassword() && validationEmail()) {
    fetch(url)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        if (data.success === true) {
          alert(data.msg);
        } else {
          throw data.errors[0].msg;
        }
      })

      .catch(function (errors) {
        alert(errors);
      });
  } else {
    alert("invalid format");
  }
}
buttonLogin.addEventListener("click", validationLogin);
