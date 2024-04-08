const form = document
  .getElementById("form")
  .addEventListener("submit", submitForm)
const detailsBlock = document.getElementById("details")
const completedBlock = document.getElementById("completed")

const inputFullName = document.querySelector("[name='name']")
const inputEmail = document.querySelector("[name='email']")
const inputPhone = document.querySelector("[name='phone']")
const messageIncorrectFullName = document.querySelector(".im-name")
const messageIncorrectEmail = document.querySelector(".im-email")
const messageIncorrectPhone = document.querySelector(".im-phone")

const formObj = {}

const regexFullName =
  /^[А-ЯІЇA-Z][а-яії'a-z]+\s[А-ЯІЇA-Z][а-яії'a-z]+\s[А-ЯІЇA-Z][а-яії'a-z]+$/

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const regexPhone = /^\+?[\d()-]{10,13}$/

const btnCloseImMesArr = document.querySelectorAll(".close-incorrect-message")

btnCloseImMesArr.forEach(btnCloseImMes => {
  btnCloseImMes.addEventListener("click", () => {
    if (btnCloseImMes.parentNode.classList.contains("im-name")) {
      btnCloseImMes.parentNode.classList.remove("imMesActive")
      inputFullName.focus()
    }
    if (btnCloseImMes.parentNode.classList.contains("im-email")) {
      btnCloseImMes.parentNode.classList.remove("imMesActive")
      inputEmail.focus()
    }
    if (btnCloseImMes.parentNode.classList.contains("im-phone")) {
      btnCloseImMes.parentNode.classList.remove("imMesActive")
      inputPhone.focus()
    }
  })
})

inputFullName.addEventListener("change", event => {
  const valueFullName = event.target.value

  const isCorrectFullName = regexFullName.test(valueFullName)

  if (!isCorrectFullName) {
    messageIncorrectFullName.classList.add("imMesActive")
  }
})

inputEmail.addEventListener("change", event => {
  const valueEmail = event.target.value

  const isCorrectEmail = regexEmail.test(valueEmail)
  if (!isCorrectEmail) {
    messageIncorrectEmail.classList.add("imMesActive")
  }
})

inputPhone.addEventListener("change", event => {
  const valuePhone = event.target.value

  const isCorrectPhone = regexPhone.test(valuePhone)
  if (!isCorrectPhone) {
    messageIncorrectPhone.classList.add("imMesActive")
  }
})

const btnConfirm = document.querySelector(".btn-confirm")
const btnBuy = document.querySelector(".btn-buy")
btnBuy.addEventListener("click", function () {
  detailsBlock.classList.add("show")
  window.scrollBy({
    top: 300,
    behavior: "smooth",
  })
})

const btnCancel = document.querySelector(".btn-cancel")
btnCancel.addEventListener("click", function () {
  detailsBlock.classList.remove("show")
})

function submitForm(event) {
  event.preventDefault()

  const isCorrectFullName = regexFullName.test(inputFullName.value)
  const isCorrectEmail = regexEmail.test(inputEmail.value)
  const isCorrectPhone = regexPhone.test(inputPhone.value)

  if (!isCorrectFullName) {
    messageIncorrectFullName.classList.add("imMesActive")
    return
  }

  if (!isCorrectEmail) {
    messageIncorrectEmail.classList.add("imMesActive")
    return
  }

  if (!isCorrectPhone) {
    messageIncorrectPhone.classList.add("imMesActive")
    return
  }

  const formData = new FormData(this)
  formData.forEach((value, key) => (formObj[key] = value))

  btnBuy.setAttribute("disabled", "")
  btnCancel.setAttribute("disabled", "")
  btnConfirm.setAttribute("disabled", "")

  document.querySelector(".nameField").textContent = `${formObj.name}`
  document.querySelector(".emailField").textContent = `${formObj.email}`
  document.querySelector(".phoneField").textContent = `${formObj.phone}`
  document.querySelector(".cityField").textContent = `${formObj.city}`
  document.querySelector(".deliveryField").textContent = `${formObj.delivery}`
  document.querySelector(".payMethodField").textContent = `${formObj.payMethod}`
  document.querySelector(
    ".countProductsField"
  ).textContent = `${formObj.countProducts}`
  document.querySelector(".commentField").textContent = `${formObj.comment}`

  completedBlock.classList.add("show")
  window.scrollBy({
    top: 300,
    behavior: "smooth",
  })
}
