const linkHWItem_1 = document.getElementById(`hw8_1`)
linkHWItem_1.addEventListener("click", () => console.log(pow(3, 4)))

const pow = (num, degree) => {
  if (degree === 0) return 1
  else if (degree < 0) {
    return 1 / pow(num, -degree)
  } else {
    return num * pow(num, degree - 1)
  }
}
