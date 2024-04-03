const form = document
  .getElementById("form")
  .addEventListener("submit", submitForm)
const detailsBlock = document.getElementById("details")
const completedBlock = document.getElementById("completed")

const formObj = {}

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

  const formData = new FormData(this)
  formData.forEach((value, key) => (formObj[key] = value))

  btnBuy.setAttribute("disabled", "")
  btnCancel.setAttribute("disabled", "")
  btnConfirm.setAttribute("disabled", "")

  document.querySelector(".nameField").textContent = `${formObj.name}`
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
