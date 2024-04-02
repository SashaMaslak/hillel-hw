const form = document
  .getElementById("form")
  .addEventListener("submit", submitForm)
const detailsBlock = document.getElementById("details")
const completedBlock = document.getElementById("completed")

const formObj = {}

document.querySelector(".btn-buy").addEventListener("click", function () {
  detailsBlock.classList.add("show")
  window.scrollBy({
    top: 100,
    behavior: "smooth",
  })
})

document.querySelector(".btn-cancel").addEventListener("click", function () {
  detailsBlock.classList.remove("show")
})

document.querySelector(".btn-confirm").addEventListener("click", function () {
  completedBlock.classList.add("show")
  window.scrollBy({
    top: 200,
    behavior: "smooth",
  })
})

document.querySelector(".btn-confirm").addEventListener("submit", function () {
  completedBlock.classList.add("show")
  window.scrollBy({
    top: 200,
    behavior: "smooth",
  })
})

function submitForm(event) {
  event.preventDefault()

  const formData = new FormData(this)

  formData.forEach((value, key) => (formObj[key] = value))

  console.log(formObj)
  const NameField = (document.querySelector(
    ".nameField"
  ).textContent = `${formObj.name}`)
  const cityField = (document.querySelector(
    ".cityField"
  ).textContent = `${formObj.city}`)
  const deliveryField = (document.querySelector(
    ".deliveryField"
  ).textContent = `${formObj.delivery}`)
  const payMethodField = (document.querySelector(
    ".payMethodField"
  ).textContent = `${formObj.payMethod}`)
  const countProductsField = (document.querySelector(
    ".countProductsField"
  ).textContent = `${formObj.countProducts}`)
  const commentField = (document.querySelector(
    ".commentField"
  ).textContent = `${formObj.comment}`)
}
