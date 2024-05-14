function Boo() {
  let count = 0
  console.log("start")

  return {
    next: function () {
      if (count <= 2) {
        count++
        return { value: count, done: false }
      } else {
        console.log("finish")
        return { done: true }
      }
    },
  }
}

const iterator = Boo()
console.log(iterator.next().value) // 1
console.log(iterator.next().value) // 2
console.log(iterator.next().value) // 3
console.log(iterator.next().done) // true
