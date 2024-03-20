var inputNumber = document.querySelector('input[name="number"]')

function clearInputNumber() {
  inputNumber.value = ""
}

function lockCount() {
  let count = 0
  return function (num) {
    if (isNaN(num)) {
      console.log("Field of number is NOT A NUMBER")
      return NaN
    }
    clearInputNumber()
    return (count += num)
  }
}

const sum = lockCount()

const linkHWItem_1 = document.getElementById("hw9_1")
linkHWItem_1.addEventListener("click", () =>
  console.log("Result:", sum(Number(inputNumber.value)))
)
