function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click",()=> {
  modalbg.style.display = "block";
}));

//Close modal 
closeModal.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = " none"
}));

//DOM elements (Global Variables)
const firstName = document.getElementById("first");
const errorFirst = document.querySelector(".errorFirst");
const formModal = document.getElementById("form-modal")

function resetError() {
  errorFirst.innerHTML = "";
}

//Check validation for firstname[nb letters] < 2
function checkFirstName(value) {
  if(value && value.length > 2) {
    return true;
  }else {
    return false;
  }
}

//listen activity for form
formModal.addEventListener("submit", event => {
  event.preventDefault();
  resetError();
  if(!checkFirstName(firstName.value)) {
    errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour votre prénom.";
    errorFirst.style.color = "red";
    errorFirst.style.fontSize = "0.8rem";
  } else {
    errorFirst.innerHTML = "Votre prénom est valide.";
    errorFirst.style.color = "green";
    errorFirst.style.fontSize = "0.8rem";
  }
});