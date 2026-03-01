interface User {
  readonly id: number
  name: string
  age?: number
}

const us: User = {
  id: 1,
  name: "Kavya",
  age: 20
}

console.log(us.id, us.name, us.age)