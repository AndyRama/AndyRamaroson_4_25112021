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
    errorFirst.style.color = "#279E7A";
    errorFirst.style.fontSize = "0.8rem";
    first.style.border = "2px solid #279E7A";
    return true;
  } else {
    errorFirst.innerHTML = errorMessage;
    errorFirst.style.color = "#FF4E60";
    errorFirst.style.fontSize = "0.8rem";
    first.style.border = "2px solid #FF4E60";
    return false;
  }
}

//Check validation for lastname[nb letters] > 2
function checkLastName(value, size, errorLast, errorMessage, validateMessage) {
  if(value && value.length > size) {
    errorLast.innerHTML = validateMessage;
    errorLast.style.color = "#279E7A";
    errorLast.style.fontSize = "0.8rem";
    last.style.border = "2px solid #279E7A";
    return true;
  } else {
    errorLast.innerHTML = errorMessage;
    errorLast.style.color = "#FF4E60";
    errorLast.style.fontSize = "0.8rem";
    last.style.border = "2px solid #FF4E60";
    return false;
  }
}

//Check validation for Email [pattern regex]
function checkEmail(email, errorEmail, errorMessage, validateMessage) {
  let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let Email = document.getElementById("email");
  
  if(!email.toLowerCase().match(pattern) || email == "") {
    errorEmail.innerHTML = errorMessage;
    errorEmail.style.color = "#FF4E60";
    errorEmail.style.fontSize = "0.8rem";
    Email.style.border = "2px solid #FF4E60"; 
    return false;
  } else {
    errorEmail.innerHTML = validateMessage;
    errorEmail.style.color = "#279E7A";
    errorEmail.style.fontSize = "0.8rem";
    Email.style.border = "2px solid #279E7A";  
    return true;
  }
}

// Check validation Birthdate[pattern regexDateFr ]
function checkBirthDate(value, errorDate, errorMessage, validateMessage ) {
  const regexDateFr = /^\d{4}-\d{2}-\d{2}$/; //pattern = d{yyyy}-d{mm}-d{dd}

  if(value && value.length > 2 && value.match(regexDateFr))  {
    errorDate.innerHTML = validateMessage;
    errorDate.style.color = "#279E7A";
    errorDate.style.fontSize = "0.8rem";
    birthdate.style.border = "2px solid #279E7A";
    return true;
  } else {
    errorDate.innerHTML = errorMessage;
    errorDate.style.color = "#FF4E60";
    errorDate.style.fontSize = "0.8rem";
    birthdate.style.border = "2px solid #FF4E60";
    return false;
  }
}


//Check validation for quantity
function checkQuantity(value, errorQuantity, errorMessage, validateMessage) {
  if(isNaN(value) || value.length == 0) {
    errorQuantity.innerHTML = errorMessage;
    errorQuantity.style.color = "#FF4E60";
    errorQuantity.style.fontSize = "0.8rem";
    quantity.style.border = "2px solid #FF4E60";
    return false;
  } else {
    errorQuantity.innerHTML = validateMessage;
    errorQuantity.style.color = "#279E7A";
    errorQuantity.style.fontSize = "0.8rem";
    quantity.style.border = "2px solid #279E7A";      
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
    errorCity.style.color = "#279E7A";
    errorCity.style.fontSize = "0.8rem";
    return true;
  } else {
    errorCity.innerHTML = errorMessage;
    errorCity.style.color = "#FF4E60";
    errorCity.style.fontSize = "0.8rem";
    return false;
  }
}

//Check validation cgu
function okCheckbox(element, errorCgu, errorMessage, validateMessage) {
  if(!element.checked) {
    errorCgu.innerHTML = errorMessage;
    errorCgu.style.color = "#FF4E60";
    errorCgu.style.fontSize = "0.8rem"; 
    return false;
  } else {
    errorCgu.innerHTML = validateMessage;
    errorCgu.style.color = "#279E7A";
    errorCgu.style.fontSize = "0.8rem"; 
    return true;
  }
}

