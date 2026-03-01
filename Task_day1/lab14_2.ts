class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  makeSound(): void {
    console.log("Animal sound")
  }
}
class Dog extends Animal {
  breed: string
  constructor(name: string, breed: string) {
    super(name)
    this.breed = breed
  }
  makeSound(): void {
    console.log("Woof! Woof!")
  }
}
const animal = new Animal("Animal")
animal.makeSound()
const dog = new Dog("Buddy", "Labrador")
dog.makeSound()
console.log(dog.name)
console.log(dog.breed)
