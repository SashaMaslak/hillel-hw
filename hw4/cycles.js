for (let i = 1; i <= 5; i++) {
  const linkHWItem = document.getElementById(`hw4-${i}`)
  linkHWItem.addEventListener("click", () => hw(i))
}

function hw(numberHw) {
  switch (numberHw) {
    case 1:
      hw4_1()
      break
    case 2:
      hw4_2()
      break
    case 3:
      hw4_3()
      break
    case 4:
      hw4_4()
      break
    case 5:
      hw4_5()
      break
    default:
      alert("Something went wrong!")
  }
}

function hw4_1() {
  const listNumbers = []
  for (let i = 20; i <= 30; i += 0.5) {
    listNumbers.push(i)
  }
  alert(`(${listNumbers.join(" ")})`)
}

function hw4_2() {
  const dollarRate = 27
  const convertedNumbers = []
  for (let i = 10; i <= 100; i += 10) {
    const result = i * dollarRate
    convertedNumbers.push(`${i}$ = ${result}₴`)
  }
  alert(`${convertedNumbers.join(", ")}`)
}

function hw4_3() {
  let listNumbers = []
  const maxNum = 10
  const value = prompt(
    `Введіть ціле число, щоб вивести всі цілі числа від 1 до 100, квадрат яких не перевищує введеного числа`
  )

  if (value === null) {
    alert("Ви відмінили операцію введення числа.")
    return
  }

  if (value === "") {
    const isContinue = confirm(
      "Введено пусте значення. Ви хочете спробувати повторити операцію?"
    )

    if (isContinue) return hw4_3()

    return
  }

  if (isNaN(value)) {
    alert("Введено не числове значення. Введіть ціле число.")
    return hw4_3()
  }

  const integer = Number(value)

  if (integer === 0) {
    return alert("Таких чисел немає. Список пустий.")
  }

  for (let i = 1; i <= maxNum; i++) {
    const pow = i ** 2
    if (integer >= pow) listNumbers.push(pow)
    continue
  }
  return alert(listNumbers.join(", "))
}

function hw4_4() {
  let listNumbers = []
  const value = prompt(
    `Введіть ціле число більше 0, щоб з'ясувати, чи є воно простим.`
  )

  if (value === null) {
    return alert("Ви відмінили операцію введення числа.")
  }

  if (value === "") {
    const isContinue = confirm(
      "Введено пусте значення. Ви хочете спробувати повторити операцію?"
    )

    if (isContinue) return hw4_4()

    return alert("Ви відмінили операцію введення числа.")
  }

  if (isNaN(value)) {
    alert("Введено не числове значення. Введіть ціле число.")
    return hw4_4()
  }

  const integer = Number(value)

  if (integer === 0) {
    const isContinue = confirm(
      "Введено '0', що не відповідає умові введеня числа більше 0. Ви хочете спробувати повторити операцію?"
    )

    if (isContinue) return hw4_4()

    return alert("Ви відмінили операцію введення числа.")
  }

  for (let i = 1; i <= integer; i++) {
    if (integer % i === 0) listNumbers.push(i)
    continue
  }

  const res = listNumbers.length > 2 ? " НЕ" : ""

  alert(`Введене число '${integer}' -${res} ПРОСТЕ`)
}

function hw4_5() {
  const power = 3
  const value = prompt(
    `Введіть ціле число, щоб визначитичи чи можна одержати це число шляхом зведення числа '${power}' у деякий ступінь.`
  )

  if (value === null) {
    return alert("Ви відмінили операцію введення числа.")
  }

  if (value === "") {
    const isContinue = confirm(
      "Введено пусте значення. Ви хочете спробувати повторити операцію?"
    )

    if (isContinue) return hw4_5()

    return alert("Ви відмінили операцію введення числа.")
  }

  if (isNaN(value)) {
    alert("Введено не числове значення. Введіть ціле число.")
    return hw4_5()
  }

  let integer = Number(value)

  let message = `Число ${integer} НЕ МОЖНА одержати шляхом зведення числа '${power}' у деякий ступінь.`

  if (integer < 0) {
    const isContinue = confirm(
      "Помилка! Неможливо знайти квадратний корінь з від'ємного числа! Ви хочете спробувати повторити операцію?"
    )

    if (isContinue) return hw4_5()

    return alert("Ви відмінили операцію введення числа.")
  }

  if (integer > 0 && integer < 9) {
    return alert(message)
  }

  while (integer >= 3) {
    if (integer % 3 === 0) {
      integer /= 3
    } else {
      return alert(message)
    }
  }
  return alert(message.replace(" НЕ", ""))
}
