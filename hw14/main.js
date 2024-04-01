const detailsBlock = document.getElementById("details")
const completedBlock = document.getElementById("completed")

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
