function greetUser(name: string, title: string = "Mr./Ms."): string {
  return `Hello, ${title} ${name}!`;
}
console.log(greetUser("Kavya"));           
console.log(greetUser("Kavya", "Dr."));    
const addNumbers = (a: number, b: number): number => a + b;
console.log("Sum:", addNumbers(5, 8));
