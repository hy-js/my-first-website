// DOM elements
const form = document.querySelector("#contact-form");
// inputs
const sname = document.querySelector("#sname");
const fname = document.querySelector("#fname");
const mobile = document.querySelector("#mobile");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

const closeModalButton = document.querySelector("#close-modal")
const confirmModalButton = document.querySelector("#confirm-btn")

// body will need a class of "modal-active"
const body = document.querySelector("body")

// modal will need to have "hidden" removed
const modal = document.querySelector(".modal")
const modalp = document.querySelector(".modal p")
const confirmedModal = document.querySelector(".confirmed")
const confirmer =document.querySelector("#confirm-btn")
const fermer = document.querySelector("#close-modal")

// modal overlay will need to have "hidden" removed
const modalOverlay = document.querySelector("#modal-overlay")

// Regex validation
const validEmail =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const validName = /^[A-Za-zÀ-ÖØ-öø-ÿ \-'.0-9]+$/;
const validMessage = /^[^<][\s\S]+$/;

form.setAttribute("novalidate", true);
form.onsubmit = submitForm;

function submitForm(event) {
  event.preventDefault();
  if (
    inputValid(validEmail, email) &&
    inputValid(validName, sname) &&
    inputValid(validName, fname) &&
    inputValid(validMessage, message)
  ) {
    console.log(
      `Name: ${sname.value}, ${fname.value}\n Mobile: ${mobile.value} \n Email: ${email.value} \n Message: ${message.value}`);
    const confirmed = `Name: ${sname.value}, ${fname.value} <br> Mobile: ${mobile.value} <br> Email: ${email.value} <br> Message: ${message.value}`;
    document.getElementById('output').innerHTML = confirmed;
    confirmer.classList.remove("hidden");
    // modalp.classList.add("hidden");
    // confirmed.classList.remove("hidden");
  } 

  else {
    console.log("INVALID");
    confirmer.classList.add("hidden");
    document.getElementById('output').innerHTML = "Texte non valide! Fermeture en 3 secondes";
    invalidTimer()

  }
}

function inputValid(regex, input) {
  return regex.test(input.value);
}


// MODAL
function displayConfirm(event) {
  event.preventDefault()
  body.classList.add("modal-active")
  confirmedModal.classList.remove("hidden")
  modalOverlay.classList.remove("hidden")
}
function displayModal(event) {
  event.preventDefault()
  body.classList.add("modal-active")
  confirmedModal.classList.add("hidden")
  modal.classList.remove("hidden")
  modalOverlay.classList.remove("hidden")
}

function closeModal() {
  body.classList.remove("modal-active")
  confirmedModal.classList.add("hidden")
  modal.classList.add("hidden")
  modalOverlay.classList.add("hidden")
}

form.addEventListener("submit", displayConfirm)

confirmModalButton.addEventListener("click", displayModal)

closeModalButton.addEventListener("click", closeModal)

function invalidTimer() {
  setTimeout(closeModal,2000);
}



