var inputNumber = document.querySelector('input[name="number"]')
var inputDegree = document.querySelector('input[name="degree"]')

const linkHWItem_1 = document.getElementById("hw8_1")
linkHWItem_1.addEventListener("click", () =>
  console.log(
    "Result:",
    pow(Number(inputNumber.value), Number(inputDegree.value))
  )
)

const pow = (num, degree) => {
  if (inputNumber.value.length === 0 || inputDegree.value.length === 0) {
    console.log("One of the fields is EMPTY")
    return NaN
  }
  if (isNaN(inputNumber.value) || isNaN(inputDegree.value)) {
    console.log("One of the fields is NOT A NUMBER")
    return NaN
  }
  if (degree === 0) return 1
  else if (degree < 0) {
    return 1 / pow(num, -degree)
  } else {
    return num * pow(num, degree - 1)
  }
}
