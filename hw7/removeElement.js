const array = [1, 2, 3, 4, 5, 6, 7, 6, 7, 5, 4, 1]

const removeElement = (array, ...args) => array.filter(el => !args.includes(el))

const linkHWItem = document.getElementById(`hw7`)
linkHWItem.addEventListener("click", () =>
  console.log(removeElement(array, 5, 4, 6))
)
