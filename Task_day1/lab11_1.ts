interface Student {
  name: string
  marks: number
}

const students: Student[] = [
  { name: "A", marks: 85 },
  { name: "B", marks: 90 },
  { name: "C", marks: 78 }
]

students.forEach(student => {
  console.log(student.name, student.marks)
})