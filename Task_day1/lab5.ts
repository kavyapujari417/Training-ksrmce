function greet(name: string, title: string = "Mr./Ms."): string {
  return "Hello, " + title + " " + name + "!";
}
console.log(greet("Kavya"));
console.log(greet("Kavya", "Dr."));
