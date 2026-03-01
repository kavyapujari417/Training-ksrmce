function format(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(Math.round(value));
    }
}
format("hello");
format(10.6);
