const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageCont = document.querySelector(".message-container");
const message = document.getElementById("message");
const button = document.getElementById("button");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  isValid = form.checkValidity();
  message.textContent = "Please fill out all fields";

  if (password1El.value === password2El.value) {
    passwordsMatch = true;
  } else {
    passwordsMatch = false;
    message.textContent = "Confirm both passwords";
    button.textContent = "OOPS TRY AGAIN";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
  }
  //   Form Valid and Passwords Match
  if (isValid && passwordsMatch) {
    message.textContent = "Well done! You Did It";
    button.textContent = "SUBMITTED";
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  }
}

function storeFromData(){
    const user = {
        name = form.name.value,
        phone = form.phone.value,
        email = form.email.value,
        website = form.website.value,
        password = form.password1.value
    }
    console.log(user)
}

function handleForm(e) {
  e.preventDefault();
  validateForm();
  if (isValid && passwordsMatch) {
      storeFromData();
  }
}

form.addEventListener("submit", handleForm);
