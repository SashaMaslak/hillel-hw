import getImages from "./pixabayApi.js"

const images = await getImages("car")
const imagesArr = images.map(el => el.largeImageURL)

const btnNext = document.querySelector(".arrow-next")
const btnPrev = document.querySelector(".arrow-prev")
const imgBlock = document.querySelector(".imgBlock")

let count = 0

const newImg = document.createElement("img")
newImg.style.width = "600px"
newImg.style.height = "400px"
newImg.style.objectFit = "cover"
newImg.setAttribute("src", imagesArr[count])

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
