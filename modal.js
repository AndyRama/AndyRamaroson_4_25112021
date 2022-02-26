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
const formModal = document.getElementById("form-modal");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox1 = document.getElementById("checkbox1");

const city = document.getElementsByName("location")

const errorFirst = document.querySelector(".errorFirst");
const errorLast = document.querySelector(".errorLast");
const errorEmail = document.querySelector(".errorEmail");
const errorDate = document.querySelector(".errorDate");
const errorQuantity = document.querySelector(".errorQuantity");
const errorCity = document.querySelector(".errorCity");
const errorCgu = document.querySelector(".errorCgu");


function resetError() {
  errorFirst.innerHTML = "";
  errorLast.innerHTML = "";
  errorEmail.innerHTML = "";
  errorDate.innerHTML = "";
  errorQuantity.innerHTML = "";
  errorCity.innerHTML = "";
  errorCgu.innerHTML = "";
}

//Check validation for firstname[nb letters] > 2
function checkFirstName(value) {
  if(value && value.length > 2) {
    return true;
  }else {
    return false;
  }
}

//Check validation for Lastname[nb letters] > 2
function checkLastName(value) {
  if(value && value.length > 2) {
    return true;
  }else {
    return false;
  }
}

//Check validation for Email [patern regex]
function checkEmail(value) {
  return String(value)
  .toLowerCase()
  .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
};

//Check validation for Birthdate
function checkBirthDate(value) {
  if(value && value.length > 2) {
  return true ;
  } else {
    return false;
  }
}

//Check validation for quantity
function checkQuantity(value) {
  if(isNaN(value)|| value.length == 0) {
    return false;
  } else {
    return true;
  }
}

//Check validation for city 
function checkCity(elements) {
  let checked = false;
  for (let i = 0; i < elements.length; i++) {
    if(elements[i].checked) {
      checked = true;
    }
  }
  return checked;
}

//Check validation cgu
function okCheckbox(element) {
    if(!element.checked) {
      return false;
    } else {
      errorCgu.innerHTML = "";
      return true;
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

  if(!checkLastName(lastName.value)) {
    errorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour votre prénom.";
    errorLast.style.color = "red";
    errorLast.style.fontSize = "0.8rem";
  } else {
    errorLast.innerHTML = "Votre nom est valide.";
    errorLast.style.color = "green";
    errorLast.style.fontSize = "0.8rem";
  }

  if(!checkEmail(email.value)) {
    errorEmail.innerHTML = "Veuillez saisir une adresse mail valide.";
    errorEmail.style.color = "red";
    errorEmail.style.fontSize = "0.8rem";
  } else {
    errorEmail.innerHTML = "Email est bien accepté.";
    errorEmail.style.color = "green";
    errorEmail.style.fontSize = "0.8rem";
  }

  if(!checkBirthDate(birthdate.value)) {
    errorDate.innerHTML = "Veuillez saisir votre date de naissance.";
    errorDate.style.color = "red";
    errorDate.style.fontSize = "0.8rem";
  } else {
    errorDate.innerHTML = "Date saisi est validé.";
    errorDate.style.color = "green";
    errorDate.style.fontSize = "0.8rem";
  }

  if(!checkQuantity(quantity.value)) {
    errorQuantity.innerHTML = "Veuillez saisir un nombre.";
    errorQuantity.style.color = "red";
    errorQuantity.style.fontSize = "0.8rem";
  } else {
    errorQuantity.innerHTML = "Le nombre est correct.";
    errorQuantity.style.color = "green";
    errorQuantity.style.fontSize = "0.8rem";
  }

  if(!checkCity(city)) {
    errorCity.innerHTML = "Veuillez selectionner une ville.";
    errorCity.style.color = "red";
    errorCity.style.fontSize = "0.8rem";
  } else {
    errorCity.innerHTML = "Votre ville est correct.";
    errorCity.style.color = "green";
    errorCity.style.fontSize = "0.8rem";
  }

  if(!okCheckbox(checkbox1)) {
    errorCgu.innerHTML = "Veuillez accepter les thermes du contrat ";
    errorCgu.style.color = "red";
    errorCgu.style.fontSize = "0.8rem";    
  } else {
    errorCgu.innerHTML = "Thermes du contrat accepter.";
    errorCgu.style.color = "green";
    errorCgu.style.fontSize = "0.8rem"; 
  }
});