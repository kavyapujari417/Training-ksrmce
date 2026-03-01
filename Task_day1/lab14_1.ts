class cse {
  public name: string
  readonly id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const student3 = new cse("Kavya", 51)
console.log(student3.id)
