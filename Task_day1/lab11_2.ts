type PointType = {
  x: number
  y: number
}

interface PointInterface {
  x: number
  y: number
}

function printPoint(point: PointType | PointInterface): void {
  console.log(point.x, point.y)
}

printPoint({ x: 10, y: 20 })