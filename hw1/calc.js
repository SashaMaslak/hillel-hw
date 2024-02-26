const startBtn = document.getElementById("btn-start")

startBtn.addEventListener("click", startCalc)

function startCalc() {
  let action
  const infoEl = document.getElementById("info")
  const operationEl = document.getElementById("operation")
  const resultEl = document.getElementById("result")
  infoEl.innerHTML = ""
  operationEl.innerHTML = ""
  resultEl.innerHTML = ""
  setTimeout(() => {
    action = prompt("What would you like to do: add, sub, mult, div")
  }, 0)

  setTimeout(() => {
    if (
      action === "add" ||
      action === "sub" ||
      action === "mult" ||
      action === "div"
    ) {
      let value1 = +prompt("Enter to FIRST NUMBER")
      while (isNaN(value1)) {
        value1 = +prompt(
          "You have entered an incorrect value, it must be a number. Please enter some NUMBER."
        )
      }
      let value2 = +prompt("Enter to SECOND NUMBER")
      while (isNaN(value2)) {
        value2 = +prompt(
          "You have entered an incorrect value, it must be a number. Please enter some NUMBER."
        )
      }

      while (action === "div" && value2 === 0) {
        value2 = +prompt(
          "You cannot be divided by zero, it must be a not zero number. Please enter correct NUMBER."
        )
      }

      let signOperation = ""
      let actionStr = ""

      switch (action) {
        case "add":
          signOperation = "+"
          actionStr = "add"
          break
        case "sub":
          signOperation = "-"
          actionStr = "subtract"
          break
        case "mult":
          signOperation = "*"
          actionStr = "multiply"
          break
        case "div":
          signOperation = "/"
          actionStr = "divide"
          break
        default:
          "Somethins went wrong"
      }

      const result = eval(value1 + signOperation + value2)
        .toFixed(5)
        .replace(/\.?0+$/, "")

      operationEl.innerHTML = actionStr
      resultEl.innerHTML = `${value1} ${signOperation} ${value2} = ${result}`
      infoEl.innerHTML = "Operation is SUCCESS"

      return alert("Сongratulations, your operation is successful")
    } else {
      infoEl.classList.remove("aborted")
      const isContinue = confirm(
        "You entered an incorrect action, would you like to continue?"
      )
      if (isContinue) {
        startCalc()
      } else {
        infoEl.classList.add("aborted")
        infoEl.innerHTML = "Operation is aborted"
      }
    }
  }, 0)
}
