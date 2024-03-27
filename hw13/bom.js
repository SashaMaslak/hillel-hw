const currentPath = window.location.pathname

if (currentPath === "/hw13/index.html") {
  const login = document.querySelector("#login")
  const password = document.querySelector("#password")
  const submit = document.querySelector("#submit")
  const overlay = document.querySelector(".overlay")

  function checkFields() {
    if (login.value && password.value) {
      submit.removeAttribute("disabled")
    } else {
      submit.setAttribute("disabled", "disabled")
    }
  }

  checkFields()

  login.addEventListener("input", checkFields)
  password.addEventListener("input", checkFields)

  submit.addEventListener("click", function () {
    localStorage.setItem("login", login.value)
    localStorage.setItem("password", password.value)

    overlay.style.display = "flex"

    login.value = ""
    password.value = ""

    setTimeout(function () {
      location.href = "my-profile.html"
    }, 2000)
  })
}

if (currentPath === "/hw13/my-profile.html") {
  const storedLogin = localStorage.getItem("login")
  const storedPassword = localStorage.getItem("password")
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight

  console.log("Login:", storedLogin)
  console.log("Password:", storedPassword)
  console.log("innerWidth:", screenWidth)
  console.log("innerHeight:", screenHeight)

  const blockHw = document.querySelector(".blockHw")

  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    const srcMap = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20965.52710298125!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1711532434853!5m2!1sen!2sua`

    const newFrame = document.createElement("iframe")
    newFrame.setAttribute("src", srcMap)
    newFrame.setAttribute("width", "520")
    newFrame.setAttribute("height", "390")
    newFrame.setAttribute("loading", "lazy")

    blockHw.appendChild(newFrame)
  })
}
