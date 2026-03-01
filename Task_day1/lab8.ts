type Point = {
  x: number
  y: number
}

function print(point: Point): void {
  console.log(point)
}

print({ x: 5, y: 10 })
