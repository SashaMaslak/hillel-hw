const detailsBlock = document.getElementById("details")
console.log(`detailsBlock:`, detailsBlock)
const completedBlock = document.getElementById("completed")
console.log(`completedBlock:`, completedBlock)

document.querySelector(".btn-buy").addEventListener("click", function () {
  detailsBlock.classList.add("show")
  window.scrollBy({
    top: 100,
    behavior: "smooth",
  })
})

document.querySelector(".btn-confirm").addEventListener("click", function () {
  completedBlock.classList.add("show")
})
