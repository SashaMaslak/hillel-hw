import "./main.css"
import image from "./assets/react-logo.jpg"

function component() {
  const element = document.createElement("div")
  console.log("first")
  const picture = document.createElement("img")
  picture.setAttribute("src", image)
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = `<button class="goback-button" onclick="goBack()"><-- Go Back</button>
    <h1 class="title-hw">Homework 22</h1>
    <div class="posts-container">
      <div id="spinner">
        <div class="spinner-icon"></div>
      </div>
      <h2>NPM - Webpack config</h2>
      <div class="post-block"></div>
    </div>
    <script src=".src/button//btnGoBack.js"></script>
    <script src="./src/index.js"></script>`
  element.appendChild(picture)
  return element
}

document.body.appendChild(component())
