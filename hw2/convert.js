const startBtn = document.getElementById("btn-start")

startBtn.addEventListener("click", startConvert)

function startConvert() {
  let value
  const infoEl = document.getElementById("info")
  const resultEl = document.getElementById("result")
  infoEl.innerHTML = ""
  resultEl.innerHTML = ""

  setTimeout(() => {
    value = +prompt("Enter the number of hours to be converted into seconds")

    while (isNaN(value)) {
      value = +prompt(
        "You have entered an incorrect value, it must be a number. Please enter some NUMBER."
      )
    }

    const result = value * 60 * 60

    infoEl.innerHTML = `${value} hours`
    resultEl.innerHTML = `${result} seconds`

    return alert(`${result} seconds`)
  }, 0)
}
