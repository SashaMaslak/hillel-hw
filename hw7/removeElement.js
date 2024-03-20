const array = [1, 2, 3, 4, 5, 6, 7]

const removeElement = (array, ...args) => array.filter(el => !args.includes(el))

const linkHWItem_1 = document.getElementById(`hw7_1`)
linkHWItem_1.addEventListener("click", () =>
  console.log(removeElement(array, 4,3))
)
