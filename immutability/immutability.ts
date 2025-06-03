const fruits: ReadonlyArray<string> = ["apple", "banana", "cherry"];
// fruits[0] = "orange";

const newFruits = [...fruits, "orange"];
console.log(fruits);
console.log(newFruits);
