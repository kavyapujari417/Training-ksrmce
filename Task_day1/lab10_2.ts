interface Calculator {
  add(a: number, b: number): number
  multiply(a: number, b: number): number
}

const calculator: Calculator = {
  add(a, b) {
    return a + b
  },
  multiply(a, b) {
    return a * b
  }
}

console.log(calculator.add(5, 3))
console.log(calculator.multiply(4, 2))