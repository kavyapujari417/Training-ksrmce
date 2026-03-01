enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum Status {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}

function printStatusOrDirection(value: Direction | Status): void {
  console.log("Value:", value)
}

let directionValue: Direction = Direction.Up
let statusValue: Status = Status.SUCCESS

printStatusOrDirection(directionValue)
printStatusOrDirection(statusValue)
