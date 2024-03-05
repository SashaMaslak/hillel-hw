for (let i = 1; i <= 10; i++) {
  const linkHWItem = document.getElementById(`hw5-${i}`)
  linkHWItem.addEventListener("click", () => hw(i))
}

function hw(numberHw) {
  switch (numberHw) {
    case 1:
      hw5_1()
      break
    case 2:
      hw5_2()
      break
    case 3:
      hw5_3()
      break
    case 4:
      hw5_4()
      break
    case 5:
      hw5_5()
      break
    case 6:
      hw5_6()
      break
    case 7:
      hw5_7()
      break
    case 8:
      hw5_8()
      break
    case 9:
      hw5_9()
      break
    case 10:
      hw5_10()
      break
    default:
      alert("Something went wrong!")
  }
}

function hw5_1() {
  console.log("hw5_1")
}

function hw5_2() {
  console.log("hw5_2")
}

function hw5_3() {
  console.log("hw5_3")
}

function hw5_4() {
  console.log("hw5_4")
}

function hw5_5() {
  console.log("hw5_5")
}

function hw5_6() {
  console.log("hw5_6")
}

function hw5_7() {
  console.log("hw5_7")
}

function hw5_8() {
  console.log("hw5_8")
}

function hw5_9() {
  console.log("hw5_9")
}

function hw5_10() {
  console.log("hw5_10")
}
