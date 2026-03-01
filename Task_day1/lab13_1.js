var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var student1 = new Student("Kavya", 20);
console.log(student1.name);
console.log(student1.age);
