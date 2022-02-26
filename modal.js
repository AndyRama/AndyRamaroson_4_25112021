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

//listen activity for form
formModal.addEventListener("submit", event => {
  event.preventDefault();

});

//Check validation for firstname[nb letters] > 2
function checkFirstName(value, errorFirst) {
  if(value && value.length > 2) {
    errorFirst.innerHTML = "Votre prénom est valide.";
    errorFirst.style.color = "green";
    errorFirst.style.fontSize = "0.8rem";
    return true;
  } else {
    errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour votre prénom.";
    errorFirst.style.color = "red";
    errorFirst.style.fontSize = "0.8rem";
    return false;
  }
}

//Check validation for Lastname[nb letters] > 2
function checkLastName(value, errorLast) {
  if(value && value.length > 2) {
    errorLast.innerHTML = "Votre nom est valide.";
    errorLast.style.color = "green";
    errorLast.style.fontSize = "0.8rem";
    return true;
  } else {
    errorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour votre prénom.";
    errorLast.style.color = "red";
    errorLast.style.fontSize = "0.8rem";
    return false;
  }
}

//Check validation for Email [patern regex]
function checkEmail(email, errorEmail){
  let patern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!email.toLowerCase().match(patern) || email == "") {
    errorEmail.innerHTML = "Veuillez saisir une adresse mail valide.";
    errorEmail.style.color = "red";
    errorEmail.style.fontSize = "0.8rem";
    return false;
  } else {
    errorEmail.innerHTML = "Email est bien accepté.";
    errorEmail.style.color = "green";
    errorEmail.style.fontSize = "0.8rem";
    return true;
  }
}

//Check validation for Birthdate
function checkBirthDate(value,errorDate) {
  if(value && value.length > 2) {
    errorDate.innerHTML = "Date saisi est validé.";
    errorDate.style.color = "green";
    errorDate.style.fontSize = "0.8rem";
  return true ;
  } else {
    errorDate.innerHTML = "Veuillez saisir votre date de naissance.";
    errorDate.style.color = "red";
    errorDate.style.fontSize = "0.8rem";
    return false;
  }
}

//Check validation for quantity
function checkQuantity(value, errorQuantity) {
  if(isNaN(value)|| value.length == 0) {
    errorQuantity.innerHTML = "Veuillez saisir un nombre.";
    errorQuantity.style.color = "red";
    errorQuantity.style.fontSize = "0.8rem";
    return false;
  } else {
    errorQuantity.innerHTML = "Le nombre est correct.";
    errorQuantity.style.color = "green";
    errorQuantity.style.fontSize = "0.8rem";
    return true;
  }
}

//Check validation for city 
function checkCity(elements, errorCity) {
  let checked = false;
  for (let i = 0; i < elements.length; i++) {
    if(elements[i].checked) {
      checked = true;
      errorCity.innerHTML = "Veuillez selectionner une ville.";
      errorCity.style.color = "red";
      errorCity.style.fontSize = "0.8rem";
      return true
    } else {
      errorCity.innerHTML = "Votre ville est correct.";
      errorCity.style.color = "green";
      errorCity.style.fontSize = "0.8rem";
      return false;
    }
  }
}

//Check validation cgu
function okCheckbox(element, errorCgu) {
    if(!element.checked) {
      errorCgu.innerHTML = "Veuillez accepter les thermes du contrat ";
      errorCgu.style.color = "red";
      errorCgu.style.fontSize = "0.8rem"; 
      return false;
    } else {
      errorCgu.innerHTML = "Thermes du contrat accepter.";
      errorCgu.style.color = "green";
      errorCgu.style.fontSize = "0.8rem"; 
      return true;
    }
}

