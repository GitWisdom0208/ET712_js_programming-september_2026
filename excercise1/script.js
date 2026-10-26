const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

// Matches name@example.com style addresses
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Password must contain at least one of #, $, or %
const specialCharPattern = /[#$%]/;

function setError(input, errorDiv, message) {
  errorDiv.textContent = message;
  input.classList.add("invalid");
  input.classList.remove("valid");
}

function setValid(input, errorDiv) {
  errorDiv.textContent = "";
  input.classList.remove("invalid");
  input.classList.add("valid");
}

function validateName() {
  if (nameInput.value.trim() === "") {
    setError(nameInput, nameError, "Name is required.");
    return false;
  }
  setValid(nameInput, nameError);
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  if (value === "") {
    setError(emailInput, emailError, "Email is required.");
    return false;
  }
  if (!emailPattern.test(value)) {
    setError(emailInput, emailError, "Enter a valid email (e.g. name@example.com).");
    return false;
  }
  setValid(emailInput, emailError);
  return true;
}

function validatePassword() {
  const value = passwordInput.value;
  if (value.length < 5) {
    setError(passwordInput, passwordError, "Password must be at least 5 characters.");
    return false;
  }
  if (!specialCharPattern.test(value)) {
    setError(passwordInput, passwordError, "Password must contain #, $, or %.");
    return false;
  }
  setValid(passwordInput, passwordError);
  return true;
}

// Real-time feedback while typing
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the browser from submitting/reloading

  // Run all three so every error shows at once
  const nameOk = validateName();
  const emailOk = validateEmail();
  const passwordOk = validatePassword();

  if (nameOk && emailOk && passwordOk) {
    successMessage.textContent = "Success! Your form has been submitted.";
    form.reset();
    nameInput.classList.remove("valid");
    emailInput.classList.remove("valid");
    passwordInput.classList.remove("valid");
  } else {
    successMessage.textContent = "";
  }
});

/*
  i asked claude to help me understand a basic webpage that needs a password and email.
*/