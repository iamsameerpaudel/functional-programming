# Pure functions

> Pure functions are those functions that are deterministic and have no side effects i.e they dont change anything outside of their scope or their local environment.

> It does not depend on or modify the outside states.

## A pure function must not

- Modify a global variable

- Write to a file

- Change a DOM element

- Log to console 

- Call impure functions

- Make API calls or access DBs

> Doing any of these, makes the function impure

> for example:

```TS

function getEligibleStudents(students) {
  return students
    .filter(student => student.marks >= 40)
    .map(student => ({
      name: student.name,
      passed: true,
    }));
}

const students = [
  { name: "Robert", marks: 90 },
  { name: "Chris", marks: 35 },
  { name: "Peter", marks: 60 },
];

console.log(getEligibleStudents(students));

```

> This function here does not depend on any outer states or variables and also doesn't change any outer variables. 

> It works with what it has and provides output.

> This function is deterministic and does not cause side-effects.
