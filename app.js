var emailField = document.getElementById("email-field");
var emailLabel = document.getElementById("email-label");
var emailError = document.getElementById("email-error");
var passwordField = document.getElementById("password-field");
var passwordLabel = document.getElementById("password-label");
var passwordError = document.getElementById("password-error");
var repeatPasswordField = document.getElementById("repeat-password-field");
var repeatPasswordLabel = document.getElementById("repeat-password-label");
var repeatPasswordError = document.getElementById("repeat-password-error");
var showPasswordImg = document.getElementById("show-password-img");
var repeatPassImg = document.getElementById("repeat-password-img");

function validationEmail() {
  emailLabel.style.bottom = "45px";

  if (
    !emailField.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailError.innerHTML = "Please enter a valid email";
    emailField.style.borderBottomColor = "#D74343";
    emailError.style.top = "120%";
    return false;
  } else {
    emailError.innerHTML = "";
    emailError.style.top = "120%";
    emailField.style.borderBottomColor = "#717171";
  }

  return true;
}

function validationPassword() {
  passwordLabel.style.bottom = "45px";
  if (passwordField.value.length <= 6) {
    passwordError.innerHTML = "6+ stong character";
    passwordField.style.borderBottomColor = "#D74343";
    passwordError.style.top = "120%";
    return false;
  } else {
    passwordError.innerHTML = "";
    passwordError.style.top = "120%";
    passwordField.style.borderBottomColor = "#717171";
  }

  return true;
}
function repeatValidationPassword() {
  repeatPasswordLabel.style.bottom = "45px";
  if (passwordField.value.length !== repeatPasswordField.value.length) {
    repeatPasswordError.innerHTML = "Passwords do NOT match";
    repeatPasswordField.style.borderBottomColor = "#D74343";
    repeatPasswordError.style.top = "120%";
    return false;
  } else {
    repeatPasswordError.innerHTML = "";
    repeatPasswordError.style.top = "120%";
    repeatPasswordField.style.borderBottomColor = "#717171";
  }

  return true;
}

// function togglePasswordVisibility() {
//   var passwordInput = document.getElementById("password-field");
//   var togglePasswordImg = document.getElementById("toggle-password");

//   if (passwordInput.type === "password") {
//     passwordInput.type = "text";
//     togglePasswordImg.src = "./icons/Group 39032.svg";
//     togglePasswordImg.alt = "Hide Password";
//   } else {
//     passwordInput.type = "password";
//     togglePasswordImg.src = "./icons/Group 40945.svg";
//     togglePasswordImg.alt = "Show Password";
//   }
// }

// function showPassword() {
//   var repeatInput = document.getElementById("repeat-password-field");
//   var repeatPassImg = document.getElementById("repeat-password-img");

//   if (repeatInput.type === "password") {
//     repeatInput.type = "text";
//     repeatPassImg.src = "./icons/Group 39032.svg";
//     repeatPassImg.alt = "Hide Password";
//   } else {
//     repeatInput.type = "password";
//     repeatPassImg.src = "./icons/Group 40945.svg";
//     repeatPassImg.alt = "Show Password";
//   }
// }
function showPassword() {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    showPasswordImg.src = "./icons/Group 39032.svg";
    showPasswordImg.alt = "Hide Password";
  } else {
    passwordField.type = "password";
    showPasswordImg.src = "./icons/Group 40945.svg";
    showPasswordImg.alt = "Show Password";
  }
}

function repeatShowPassword() {
  if (repeatPasswordField.type === "password") {
    repeatPasswordField.type = "text";
    repeatPassImg.src = "./icons/Group 39032.svg";
    repeatPassImg.alt = "Hide Password";
  } else {
    repeatPasswordField.type = "password";
    repeatPassImg.src = "./icons/Group 40945.svg";
    repeatPassImg.alt = "Show Password";
  }
}
