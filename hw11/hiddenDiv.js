const el = document.querySelector("#textInput")
const newDiv = document.createElement("div")

function focusEventHandler() {
  newDiv.style.width = "32px"
  newDiv.style.height = "32px"
  newDiv.style.backgroundColor = "green"
  newDiv.style.position = "absolute"
  newDiv.style.right = "32px"
  el.insertAdjacentElement("afterend", newDiv)
}

function blurEventHandler() {
  newDiv.remove()
}

el.addEventListener("focus", focusEventHandler)
el.addEventListener("blur", blurEventHandler)
