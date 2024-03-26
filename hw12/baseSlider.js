import getImages from "./pixabayApi.js"

window.addEventListener("load", renderImgs)

const searchForm = document.getElementById("searchForm")

async function renderImgs(event) {
  event.preventDefault()
  const searchInput = document.getElementById("searchInput").value
  const images = await getImages(searchInput)
  const imagesArr = images.map(el => el.largeImageURL)

  const imgBlock = document.querySelector(".imgBlock")
  const btnNext = document.querySelector(".arrow-next")
  const btnPrev = document.querySelector(".arrow-prev")

  let count = Math.floor(imagesArr.length / 2)

  const newImg = document.createElement("img")
  newImg.style.width = "600px"
  newImg.style.height = "400px"
  newImg.style.objectFit = "cover"
  newImg.setAttribute("src", imagesArr[count])

  imgBlock.innerHTML = "" // Clear previous images
  imgBlock.appendChild(newImg)

  function showNextImg() {
    count += 1
    newImg.setAttribute("src", imagesArr[count])

    if (count > 0) {
      btnPrev.style.display = "block"
    }
    if (count > imagesArr.length - 2) {
      btnNext.style.display = "none"
    }
  }

  function showPrevImg() {
    count -= 1
    newImg.setAttribute("src", imagesArr[count])

    if (count < 1) {
      btnPrev.style.display = "none"
    }
    if (count < imagesArr.length - 1) {
      btnNext.style.display = "block"
    }
  }

  btnNext.addEventListener("click", showNextImg)
  btnPrev.addEventListener("click", showPrevImg)
}

searchForm.addEventListener("submit", renderImgs)
