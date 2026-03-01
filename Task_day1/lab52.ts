type Operation = (a: number, b: number) => number;
const add: Operation = (a, b) => a + b;
const multiply: Operation = (a, b) => a * b;
console.log(add(5, 3));
console.log(multiply(5, 3));
