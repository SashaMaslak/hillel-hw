class Person {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }
}

class Flat {
  residents = []

  addResident(person) {
    if (person instanceof Person) {
      this.residents.push(person)
    } else {
      console.log(
        "Error: The passed object is not an instance of the Person class."
      )
    }
  }
}

class Building {
  flats = []
  maxFlats

  constructor(maxFlats) {
    this.maxFlats = maxFlats
  }

  addFlat(flat) {
    if (flat instanceof Flat) {
      if (this.flats.length < this.maxFlats) {
        this.flats.push(flat)
      } else {
        console.log(
          "It is not possible to add an flat: the maximum number of flats has already been reached."
        )
      }
    } else {
      console.log(
        "Error: The passed object is not an instance of the Flat class."
      )
    }
  }
}

const person1 = new Person("Jonson", "male")
const person2 = new Person("Shakira", "female")
const person3 = new Person("Jenifer", "female")
const person4 = new Person("Loyd", "male")
const person5 = new Person("Olaf", "male")
const person6 = new Person("Maria", "female")

const flat1 = new Flat()
const flat2 = new Flat()
const flat3 = new Flat()

flat1.addResident(person1)
flat2.addResident(person2)
flat2.addResident(person3)
flat3.addResident(person4)
flat3.addResident(person5)
flat3.addResident(person6)

const building = new Building(3)

building.addFlat(flat1)
building.addFlat(flat2)
building.addFlat(flat3)

console.log(building.flats)
