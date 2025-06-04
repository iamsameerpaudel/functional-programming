
function getEligibleStudents(students:student[]) : passedStudent[] {
  return students
    .filter(student => student.marks >= 40)
    .map(student => ({
      name: student.name,
      passed: true,
    }));
}

type student = {
name:string,
marks: number
}

type passedStudent = {
name:string,
passed:boolean
}

const students: student[]= [
  { name: "Tony", marks: 90 },
  { name: "Chris", marks: 35 },
  { name: "Peter", marks: 60 },
];

console.log(getEligibleStudents(students));
