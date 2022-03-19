// NavBar
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
  modalbg.style.display = "none";
}));

//DOM elements (Global Variables)
const formModal = document.getElementById("form-modal");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox1 = document.getElementById("checkbox1");

const succeMessageBox = document.getElementById("confirmation-message");
const succesMessage = document.getElementById('confirmation-message');

const city = document.getElementsByName("location");

const errorFirst = document.querySelector(".errorFirst");
const errorLast = document.querySelector(".errorLast");
const errorEmail = document.querySelector(".errorEmail");
const errorDate = document.querySelector(".errorDate");
const errorQuantity = document.querySelector(".errorQuantity");
const errorCity = document.querySelector(".errorCity");
const errorCgu = document.querySelector(".errorCgu");

//listen activity for form
document.getElementById('form-modal').addEventListener("submit", (e) => {
  e.preventDefault();

   //Functions stored inside a variable with arguments inside
  let firstN = checkFirstName(first.value, 2, errorFirst,"Veuillez entrer plus de 2 caractères.","Votre prénom est valide.");
  let lastN = checkLastName(last.value, 2, errorLast, "Veuillez entrer plus de 2 caractères.","Votre nom est valide.");
  let mail = checkEmail(email.value, errorEmail, "Veuillez entre une adresse mail valide.", "Votre email est valide.");
  let date = checkBirthDate(birthdate.value, errorDate, "Vous devez entrer votre date de naissance.","Votre date de naissance.");
  let qty = checkQuantity(quantity.value, errorQuantity,"Veuillez entrer une valeur numerique", "Votre nombre de tournois est valide.");
  let town = checkCity(city, errorCity, "Veuillez saisir une ville", "Votre ville est accepté.");
  let cgu = okCheckbox(checkbox1, errorCgu,"Veuillez accepter les termes et conditions.", "Merci d'avoir accepter les termes et conditions.");

  // Functions Called Here    
  if(firstN && lastN && mail && date && qty && town && cgu) {
    //Close ModalBox and OPEN SuccesBox
    const modalBox = document.querySelector(".bground");
    const succesMessageBox = document.querySelector(".submit-confirmation-bg");
      modalBox.style.display = "none";
      succesMessageBox.style.display = "block";  
      //Close succesBox
      document.querySelectorAll('.close-Succes').forEach(button => {
      button.addEventListener('click', button => {
      if (succesMessage.style.display === "block"){
          succesMessage.style.display = 'none';
      }})});
      //Reset the form  
      document.getElementById('form-modal').reset();
      //Reset the message validation  
      resetError();
      //Reset border form field validation
      resetBorder();
      //Form clean
    }
    return true
});

//Reset form field message validation
function resetError() {
  errorFirst.innerHTML = "";
  errorLast.innerHTML = "";
  errorEmail.innerHTML = "";
  errorDate.innerHTML = "";
  errorQuantity.innerHTML = "";
  errorCity.innerHTML = "";
  errorCgu.innerHTML = "";
}

//Reset border form field validation
function resetBorder() {
  first.style.border = "";
  last.style.border = "";
  email.style.border = "";
  birthdate.style.border = "";
  quantity.style.border = "";
}

//Check validation for firstname[nb letters] > 2
function checkFirstName(value, size, errorFirst, errorMessage, validateMessage) {
  if(value && value.length > size) {
    errorFirst.innerHTML = validateMessage;
    errorFirst.classList.add("validStyle");
    first.classList.add("validForm");
    return true;
  } else {
    errorFirst.innerHTML = errorMessage;
    errorFirst.classList.add("errorStyle");
    first.classList.add("errorForm");
    return false;
  }
}

//Check validation for lastname[nb letters] > 2
function checkLastName(value, size, errorLast, errorMessage, validateMessage) {
  if(value && value.length > size) {
    errorLast.innerHTML = validateMessage;
    errorLast.classList.add("validStyle");
    last.classList.add("validForm");
    return true;
  } else {
    errorLast.innerHTML = errorMessage;
    errorLast.classList.add("errorStyle");
    last.classList.add("errorForm");
    return false;
  }
}

//Check validation for Email [pattern regex]
function checkEmail(email, errorEmail, errorMessage, validateMessage) {
  let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let Email = document.getElementById("email");
  
  if(!email.toLowerCase().match(pattern) || email == "") {
    errorEmail.innerHTML = errorMessage;
    errorEmail.classList.add("errorStyle");
    Email.classList.add("errorForm");
    return false;
  } else {
    errorEmail.innerHTML = validateMessage;
    errorEmail.classList.add("validStyle");
    Email.classList.add("validForm");
    return true;
  }
}

// Check validation Birthdate[pattern regexDateFr ]
function checkBirthDate(value, errorDate, errorMessage, validateMessage ) {
  const regexDateFr = /^\d{4}-\d{2}-\d{2}$/; //pattern = d{yyyy}-d{mm}-d{dd}

  if(value && value.length > 2 && value.match(regexDateFr))  {
    errorDate.innerHTML = validateMessage;
    errorDate.classList.add("validStyle");
    birthdate.classList.add("validForm");
    return true;
  } else {
    errorDate.innerHTML = errorMessage;
    errorDate.classList.add("errorStyle");
    birthdate.classList.add("errorForm");
    return false;
  }
}


//Check validation for quantity
function checkQuantity(value, errorQuantity, errorMessage, validateMessage) {
  if(isNaN(value) || value.length == 0) {
    errorQuantity.innerHTML = errorMessage;
    errorQuantity.classList.add("errorStyle");
    quantity.classList.add("errorForm");
    return false;
  } else {
    errorQuantity.innerHTML = validateMessage;
    errorQuantity.classList.add("validStyle");
    quantity.classList.add("validForm");    
    return true;
  };
}

//Check validation for city 
function checkCity(elements, errorCity, errorMessage, validateMessage) {
  let checked = false;

  for (let i = 0; i < elements.length; i++) {
    if(elements[i].checked) {
      checked = true;
    }
  }
  
  if(checked){
    errorCity.innerHTML = validateMessage;
    errorCity.classList.add("validStyle");
    return true;
  } else {
    errorCity.innerHTML = errorMessage;
    errorCity.classList.add("errorStyle");
    return false;
  }
}

//Check validation cgu
function okCheckbox(element, errorCgu, errorMessage, validateMessage) {
  if(!element.checked) {
    errorCgu.innerHTML = errorMessage;
    errorCgu.classList.add("errorStyle");
    return false;
  } else {
    errorCgu.innerHTML = validateMessage;
    errorCgu.classList.add("validStyle");
    return true;
  }
}

