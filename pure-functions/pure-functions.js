function getEligibleStudents(students) {
    return students
        .filter(function (student) { return student.marks >= 40; })
        .map(function (student) { return ({
        name: student.name,
        passed: true,
    }); });
}
var students = [
    { name: "Tony", marks: 90 },
    { name: "Chris", marks: 35 },
    { name: "Peter", marks: 60 },
];
console.log(getEligibleStudents(students));
