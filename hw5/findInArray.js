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

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
]

function hw5_1() {
  const countPosEl = arr.filter(el => el > 0).length
  const sumPosEl = arr.reduce((acc, el) => (el > 0 ? (acc += el) : acc), 0)
  alert(
    `The array has ${countPosEl} positive elements, their total sum is ${sumPosEl}`
  )
}

function hw5_2() {
  const minElement = Math.min(...arr)
  const minIndex = arr.indexOf(minElement)
  alert(
    `The minimum element of the array is ${minElement}, and its index is ${minIndex}`
  )
}

function hw5_3() {
  const maxEl = arr.slice().sort((a, b) => b - a)[0]
  const maxIndex = arr.findIndex(el => el === maxEl)
  alert(
    `The maximum element of the array is ${maxEl}, and its index is ${maxIndex}`
  )
}

function hw5_4() {
  let negativeCount = 0
  arr.forEach(num => {
    if (num < 0) {
      negativeCount++
    }
  })
  alert(`The array has ${negativeCount} negative elements.`)
}

function hw5_5() {
  const countEl = arr.filter(i => i > 0 && i % 2 !== 0)
  alert(`The array has ${countEl.length} odd and positive elements.`)
}

function hw5_6() {
  alert(
    `The array has ${
      arr.filter(i => i > 0 && i % 2 === 0).length
    } even and positive elements.`
  )
}

function hw5_7() {
  const sumEvenPosEl = arr
    .filter(i => i > 0 && i % 2 === 0)
    .reduce((acc, i) => (acc += i))
  alert(`The sum of even positive array elements is ${sumEvenPosEl}`)
}

function hw5_8() {
  const sumOddPosEl = arr.reduce((acc, i) => {
    if (i > 0 && i % 2 !== 0) return (acc += i)
    else return acc
  }, 0)
  alert(`The sum of odd positive array elements is ${sumOddPosEl}`)
}

function hw5_9() {
  const multPosEl = arr.filter(i => i > 0).reduce((acc, i) => (acc *= i))
  alert(`The multiplication of positive array elements is ${multPosEl}`)
}

function hw5_10() {
  const maxElement = Math.max(...arr)
  const zeroedArr = arr.map(i => (i === maxElement ? i : 0))
  alert(
    `The largest among the elements of the array is ${maxElement}, and the rest are zeroed: ${zeroedArr}.`
  )
}
