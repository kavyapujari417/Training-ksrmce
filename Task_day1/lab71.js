function greetUser(name, title) {
    if (title === void 0) { title = "Mr./Ms."; }
    return "Hello, ".concat(title, " ").concat(name, "!");
}
console.log(greetUser("Kavya"));
console.log(greetUser("Kavya", "Dr."));
var addNumbers = function (a, b) { return a + b; };
console.log("Sum:", addNumbers(5, 8));
