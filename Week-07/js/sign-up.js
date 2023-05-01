// console.log(isNaN(dniInput.value));

//NAME
var nameInput = document.getElementById("name-input");
var nameSpan = document.getElementById("name-span");

nameInput.onblur = function () {
  var nameValue = nameInput.value;
  if (
    nameValue.length > 3 &&
    typeof nameValue === "string" &&
    validationNum(nameValue) === false
  ) {
  } else {
    nameSpan.classList.remove("ok");
    nameSpan.classList.add("noOk");
  }
};

nameInput.onfocus = function () {
  nameSpan.classList.remove("noOk");
  nameSpan.classList.add("ok");
};

//LAST NAME
//NAME
var lastnameInput = document.getElementById("lastname-input");
var lastnameSpan = document.getElementById("lastname-span");

lastnameInput.onblur = function () {
  var lastnameValue = lastnameInput.value;
  if (
    lastnameValue.length > 3 &&
    typeof lastnameValue === "string" &&
    validationNum(lastnameValue) === false
  ) {
  } else {
    lastnameSpan.classList.remove("ok");
    lastnameSpan.classList.add("noOk");
  }
};

lastnameInput.onfocus = function () {
  lastnameSpan.classList.remove("noOk");
  lastnameSpan.classList.add("ok");
};

//DNI
var dniInput = document.getElementById("dni-input");
var dniSpan = document.getElementById("dni-span");

dniInput.onblur = function () {
  if (validationNum(dniInput.value) === true && dniInput.value.length > 7) {
  } else {
    dniSpan.classList.remove("ok");
    dniSpan.classList.add("noOk");
  }
};

dniInput.onfocus = function () {
  dniSpan.classList.remove("noOk");
  dniSpan.classList.add("ok");
};

function validationNum(value1) {
  var aux = false;
  for (var i = 0; i < value1.length; i++) {
    if (!isNaN(value1[i])) {
      aux = true;
    }
  }
  return aux;
}

//LOCATION
var locationInput = document.getElementById("location-input");
var locationSpan = document.getElementById("location-span");

locationInput.onblur = function () {
  var locationValue = locationInput.value;
  if (locationValue.length > 3) {
  } else {
    locationSpan.classList.remove("ok");
    locationSpan.classList.add("noOk");
  }
};

locationInput.onfocus = function () {
  locationSpan.classList.remove("noOk");
  locationSpan.classList.add("ok");
};

//ADRESS

var adressInput = document.getElementById("adress-input");
var adressSpan = document.getElementById("adress-span");

adressInput.onblur = function () {
  var adressValue = adressInput.value;
  var hasSpaceInMiddle = false;
  for (var i = 0; i < adressValue.length - 1; i++) {
    if (adressValue[i] === " ") {
      hasSpaceInMiddle = true;
      break;
    }
  }
  if (!hasSpaceInMiddle || adressValue.length < 5) {
    adressSpan.classList.remove("ok");
    adressSpan.classList.add("noOk");
  }
};
adressInput.onfocus = function () {
  adressSpan.classList.remove("noOk");
  adressSpan.classList.add("ok");
};

//TELPHONE
var telphoneInput = document.getElementById("telphone-input");
var telphoneSpan = document.getElementById("telphone-span");

telphoneInput.onblur = function () {
  if (telphoneInput.value.length !== 10 || telphoneInput.value !== number) {
    telphoneSpan.classList.remove("ok");
    telphoneSpan.classList.add("noOk");
  }
};
telphoneInput.onfocus = function () {
  telphoneSpan.classList.remove("noOk");
  telphoneSpan.classList.add("ok");
};

//POSTAL CODE
var postalCodeInput = document.getElementById("postal-code-input");
var postalCodeSpan = document.getElementById("postal-code-span");

postalCodeInput.onblur = function () {
  var postalCodeValue = postalCodeInput.value;
  if (
    !isNaN(postalCodeValue) &&
    postalCodeValue.length >= 4 &&
    postalCodeValue.length <= 5
  ) {
  } else {
    postalCodeSpan.classList.remove("ok");
    postalCodeSpan.classList.add("noOk");
  }
};

postalCodeInput.onfocus = function () {
  postalCodeSpan.classList.remove("noOk");
  postalCodeSpan.classList.add("ok");
};

//EMAIL
var emailInput = document.getElementById("email-input");
var emailSpan = document.getElementById("email-span");
var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;

emailInput.onblur = function () {
  if (emailRegex.test(emailInput.value)) {
  } else {
    emailSpan.classList.remove("ok");
    emailSpan.classList.add("noOk");
  }
};

emailInput.onfocus = function () {
  emailSpan.classList.remove("noOk");
  emailSpan.classList.add("ok");
};

//PASSWORD
var passwordInput = document.getElementById("password-input");
var passwordSpan = document.getElementById("password-span");

passwordInput.onblur = function () {
  var passwordValue = passwordInput.value;
  var hasNumber = false;

  for (var i = 0; i < passwordValue.length; i++) {
    if (passwordValue[i] >= "0" && passwordValue[i] <= "9") hasNumber = true;
  }

  if (
    typeof passwordValue !== string ||
    hasNumber === false ||
    passwordValue.length < 8
  ) {
    passwordSpan.classList.remove("ok");
    passwordSpan.classList.add("noOk");
  }
};

passwordInput.onfocus = function () {
  passwordSpan.classList.remove("noOk");
  passwordSpan.classList.add("ok");
};

//REPEAT PASSWORD
var repeatPasswordInput = document.getElementById("repeat-password-input");
var repeatPasswordSpan = document.getElementById("repeat-password-span");

repeatPasswordInput.onblur = function () {
  var repeatPasswordValue = repeatPasswordInput.value;

  if (passwordInput.value !== repeatPasswordValue) {
    repeatPasswordSpan.classList.remove("ok");
    repeatPasswordSpan.classList.add("noOk");
  }
};

passwordInput.onfocus = function () {
  repeatPasswordSpan.classList.remove("noOk");
  repeatPasswordSpan.classList.add("ok");
};

//BIRTH

var birthInput = document.getElementById("birth-input");
var birthSpan = document.getElementById("birth-span");

birthInput.onblur = function ValidateBirth() {
  var year = birthInput.value.substring(0, 4);
  console.log(year);
  if (year.length !== 4 || year < 1900 || year > 2013) {
    birthSpan.classList.remove("ok");
    birthSpan.classList.add("noOk");
  }
};
birthInput.onfocus = function () {
  birthSpan.classList.remove("noOk");
  birthSpan.classList.add("ok");
};

//BUTTON

var buttonInput = document.getElementById("sign-up-button");
var buttonSpan = document.getElementById("sign-up-span");

function validationEmpty() {
  var input = document.getElementsByTagName("input");
  for (i = 0; i < input.length - 1; i++) {
    if (input[i].value === "") {
      return false;
    }
  }
}

buttonInput.onclick = function (event) {
  event.preventDefault();
  var span = document.getElementsByTagName("span");
  var errorList = "";

  for (i = 0; i < span.length; i++) {
    if (span[i].classList.contains("noOk")) {
      errorList += span[i].textContent;
    }
  }
  if (validationEmpty !== true) {
    alert("Some field is empty");
  } else if (errorList.length >= 1) {
    alert(errorList + "\n");
  } else {
    alert(
      nameValue + "\n",
      lastnameValue + "\n",
      dniInput.value + "\n",
      locationValue + "\n",
      adressValue + "\n",
      telphoneValue + "\n",
      postaleCodeValue + "\n",
      emailValue + "\n",
      passwordValue + "\n",
      repeatPasswordValue + "\n",
      birthValue
    );
  }
};
