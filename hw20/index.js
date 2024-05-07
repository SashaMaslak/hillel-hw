class SuperMath {
  check(obj) {
    const toAgree = confirm("Do you want to do a math operation (12 + 3) ?")
    let result = ""
    switch (obj.sign) {
      case "+":
        result = `${obj.X} + ${obj.Y}`
      case "-":
        result = `${obj.X} - ${obj.Y}`
    }

    if (toAgree) {
      const result = `${obj.X} + ${obj.Y}`
      alert(result)
    } else {
      this.input()
    }
  }
  input() {
    const firstNumber = prompt("INPUT First numbet:")
    const secondNumber = prompt("INPUT Second numbet:")
    const mathSign = prompt("INPUT one math sign (+ or - or * or /):")

    const newObj = { X: firstNumber, Y: secondNumber, sign: mathSign }

    this.check(newObj)
  }
}

const math = new SuperMath()
math.check({ X: 12, Y: 3, sign: "+" })
