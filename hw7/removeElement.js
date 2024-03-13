const array = [1, 2, 3, 4, 5, 6, 7, 6, 7, 5, 4, 1]

const removeElement = (array, ...args) => array.filter(el => !args.includes(el))

const linkHWItem_1 = document.getElementById(`hw7_1`)
linkHWItem_1.addEventListener("click", () =>
  console.log(removeElement(array, 5, 4, 6))
)

// ==================================================================

const array2 = [1, 2, 3, 4, 5, 6, 7, 6, 7, 5, 4, 1]

const linkHWItem_2 = document.getElementById(`hw7_2`)
linkHWItem_2.addEventListener("click", () =>
  console.log(removeElement2(array2, 7, 1, 4))
)

function removeElement2(array, ...args) {
  for (let i = 0; i < array.length; i++) {
    if (args.includes(array[i])) {
      array2.splice(i, 1)
    }
  }
  // array.forEach((el, i) => {
  //   if (args.includes(el)) {
  //     array2.splice(i, 1)
  //   }
  // })
  return array2
}
