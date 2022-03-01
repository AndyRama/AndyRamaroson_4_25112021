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
  body.classList.add('no-scroll');
}));

//Close modal 
closeModal.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = " none";
}));

//DOM elements (Global Variables)
const formModal = document.getElementById("form-modal");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox1 = document.getElementById("checkbox1");
const succeMessageBox = document.getElementById(".confirmation-message");

const city = document.getElementsByName("location");

const errorFirst = document.querySelector(".errorFirst");
const errorLast = document.querySelector(".errorLast");
const errorEmail = document.querySelector(".errorEmail");
const errorDate = document.querySelector(".errorDate");
const errorQuantity = document.querySelector(".errorQuantity");
const errorCity = document.querySelector(".errorCity");
const errorCgu = document.querySelector(".errorCgu");
const body = document.querySelector('body');

const succesMessage = document.getElementById('confirmation-message');

//listen activity for form
document.getElementById('form-modal').addEventListener("submit", event => {
  event.preventDefault();

  //Functions stored inside a variable with arguments inside
  let firstN = validateString(first.value, 2, errorFirst,"Veuillez entrer 2 caractères ou plus pour le champ du prenom.","Votre prénom est valide.");
  let lastN = validateString(last.value, 2, errorLast, "Veuillez entrer 2 caractères ou plus pour le champ du nom.","Votre nom est valide.");
  let mail = checkEmail(email.value, errorEmail, "Veuillez entre une adresse mail valide.", "Votre email est valide.");
  let date = validateString(birthdate.value, 2, errorDate, "Vous devez entrer votre date de naissance.","Votre date de naissance.");
  let qty = checkQuantity(quantity.value, errorQuantity,"Veuillez entrer une valeur numerique", "Votre nombre de tournois est valide.");
  let town = checkCity(city, errorCity, "Veuillez saisir une ville", "Votre ville est accepté.");
  let cgu = okCheckbox(checkbox1, errorCgu,"Vous devez vérifier que vous acceptez les termes et conditions.", "Merci d'avoir accepter les termes et conditions.");

  // Functions Called Here    
  if(firstN && lastN && mail && date && qty && town && cgu){
    //Close ModalBox and OPEN SuccesBox
    const modalBox = document.querySelector(".bground");
    const succesMessageBox = document.querySelector(".submit-confirmation-bg");
      modalBox.style.display = "none";
      succesMessageBox.style.display = "block";  
      //Close succesBox
      document.querySelectorAll('.close-Succes').forEach(button =>{
      button.addEventListener('click', button => {
      if (succesMessage.style.display === "block"){
            succesMessage.style.display = 'none';
      }})});
      //Reset the form  
      document.getElementById('form-modal').reset();
      //Reset the message error  
      resetError();
    }
    return true
});

function resetError() {
  errorFirst.innerHTML = "";
  errorLast.innerHTML = "";
  errorEmail.innerHTML = "";
  errorDate.innerHTML = "";
  errorQuantity.innerHTML = "";
  errorCity.innerHTML = "";
  errorCgu.innerHTML = "";
}

//Check validation for firstname/lastname [nb letters] > 2
function validateString(value, size, errorElt, errorMessage, validateMessage) {
  if(value && value.length > size) {
    errorElt.innerHTML = validateMessage;
    errorElt.style.color = "green";
    errorElt.style.fontSize = "0.8rem";
    return true;
  } else {
    errorElt.innerHTML = errorMessage;
    errorElt.style.color = "red";
    errorElt.style.fontSize = "0.8rem";
    return false;
  }
}

//Check validation for Email [patern regex]
function checkEmail(email, errorEmail, errorMessage, validateMessage){
  let patern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!email.toLowerCase().match(patern) || email == "") {
    errorEmail.innerHTML = errorMessage;
    errorEmail.style.color = "red";
    errorEmail.style.fontSize = "0.8rem";
    return false;
  } else {
    errorEmail.innerHTML = validateMessage;
    errorEmail.style.color = "green";
    errorEmail.style.fontSize = "0.8rem";
    return true;
  }
}

//Check validation for quantity
function checkQuantity(value, errorQuantity, errorMessage, validateMessage) {
  if(isNaN(value)|| value.length == 0) {
    errorQuantity.innerHTML = errorMessage;
    errorQuantity.style.color = "red";
    errorQuantity.style.fontSize = "0.8rem";
    return false;
  } else {
    errorQuantity.innerHTML = validateMessage;
    errorQuantity.style.color = "green";
    errorQuantity.style.fontSize = "0.8rem";
    return true;
  }
}

//Check validation for city 
function checkCity(elements, errorCity, errorMessage, validateMessage) {
  let checked = false;
  for (let i = 0; i < elements.length; i++) {
    if(elements[i].checked) {
      checked = true;
      errorCity.innerHTML = validateMessage;
      errorCity.style.color = "green";
      errorCity.style.fontSize = "0.8rem";
      return true
    } else {
      errorCity.innerHTML = errorMessage;
      errorCity.style.color = "red";
      errorCity.style.fontSize = "0.8rem";
      return false;
    }
  }
}

// Check validation for city 
// function checkCity(elements) {
//   let checked = false;
//   for (let i = 0; i < elements.length; i++) {
//     if(elements[i].checked) {
//       checked = true;
//     }
//   }
//   return checked;
// }

//Check validation cgu
function okCheckbox(element, errorCgu, errorMessage, validateMessage) {
  if(!element.checked) {
    errorCgu.innerHTML = errorMessage;
    errorCgu.style.color = "red";
    errorCgu.style.fontSize = "0.8rem"; 
    return false;
  } else {
    errorCgu.innerHTML = validateMessage;
    errorCgu.style.color = "green";
    errorCgu.style.fontSize = "0.8rem"; 
    return true;
  }
}

