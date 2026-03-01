function form(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase())
  } else {
    console.log(Math.round(value))
  }
}

form("hello")
form(10.6)
