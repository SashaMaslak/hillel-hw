class SuperMath {
  check(obj) {
    const toAgree = confirm(
      `Do you want to do a math operation (${obj.X} ${obj.znak} ${obj.Y}) = ?`
    )
    let result = 0
    let template = ""
    switch (obj.znak) {
      case "+":
        template = `${obj.X} + ${obj.Y}`
        result = obj.X + obj.Y
        break
      case "-":
        template = `${obj.X} - ${obj.Y}`
        result = obj.X - obj.Y
        break
      case "*":
        template = `${obj.X} * ${obj.Y}`
        result = obj.X * obj.Y
        break
      case "/":
        template = `${obj.X} / ${obj.Y}`
        result = obj.X / obj.Y
        break
      case "%":
        template = `${obj.X} % ${obj.Y}`
        result = obj.X % obj.Y
        break
      default:
        template = ""
    }

    if (toAgree) {
      alert(`${template} = ${result}`)
    } else {
      this.input()
    }
  }
  input() {
    this.count++
    let firstNumber
    while (isNaN(firstNumber) || firstNumber === null) {
      firstNumber = prompt("INPUT Correct First number:")
    }

    let secondNumber
    while (isNaN(secondNumber) || secondNumber === null) {
      secondNumber = prompt("INPUT Correct Second number:")
    }

    let mathSign

    while (true) {
      mathSign = prompt(
        "Enter one of the correct mathematical signs: +, -, /, *, %"
      )
      if (
        mathSign === "+" ||
        mathSign === "-" ||
        mathSign === "/" ||
        mathSign === "*" ||
        mathSign === "%"
      )
        break
    }

    const newObj = {
      X: parseFloat(firstNumber),
      Y: parseFloat(secondNumber),
      znak: mathSign,
    }

    this.check(newObj)
  }
}

const math = new SuperMath()
math.check({ X: 12, Y: 3, znak: "+" })
