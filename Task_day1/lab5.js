function greetUser(name, title) {
    if (title === void 0) { title = "Mr./Ms."; }
    return "Hello, " + title + " " + name + "!";
}
console.log(greetUser("Kavya"));
console.log(greetUser("Kavya", "Dr."));
