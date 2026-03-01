class Student {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const student1 = new Student("Kavya", 20)
console.log(student1.name)
console.log(student1.age)
