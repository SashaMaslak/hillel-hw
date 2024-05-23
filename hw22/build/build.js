/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/react-logo.jpg
const react_logo_namespaceObject = "data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiZjY0Yjg1YTc2OGUwMmUzYTI2NjVhYWIxNDY1NDQ1ZDQuanBnIjs=";
;// CONCATENATED MODULE: ./src/index.js



function component() {
  const element = document.createElement("div")
  console.log("first")
  const picture = document.createElement("img")
  picture.setAttribute("src", react_logo_namespaceObject)
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

/******/ })()
;