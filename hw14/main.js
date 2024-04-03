const form = document
  .getElementById("form")
  .addEventListener("submit", submitForm)
const detailsBlock = document.getElementById("details")
const completedBlock = document.getElementById("completed")

const formObj = {}

document.querySelector(".btn-buy").addEventListener("click", function () {
  detailsBlock.classList.add("show")
  window.scrollBy({
    top: 300,
    behavior: "smooth",
  })
})

document.querySelector(".btn-cancel").addEventListener("click", function () {
  detailsBlock.classList.remove("show")
})

function submitForm(event) {
  event.preventDefault()

  const formData = new FormData(this)
  formData.forEach((value, key) => (formObj[key] = value))

  console.log(formObj)

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
