const { oldestPerson, allHobbies, filterByAge } = require("./peopleDirectory");

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

const people = [
  { name: "Bob",   age: 15, hobbies: ["skiing", "falling"] },
  { name: "Sally", age: 31, hobbies: ["sailing", "swimming"] },
  { name: "Frank", age: 85, hobbies: ["tennis", "running", "falling"] },
];

// oldestPerson
console.log(oldestPerson(people) === "Frank");
console.log(oldestPerson([{ name: "Alice", age: 22, hobbies: [] }]) === "Alice");

// allHobbies (sorted, unique)
console.log(deepEqual(allHobbies(people), ["falling", "running", "sailing", "skiing", "swimming", "tennis"]));
console.log(deepEqual(allHobbies([]), []));

// filterByAge (inclusive bounds)
console.log(deepEqual(filterByAge(people, 18, 50), [
  { name: "Sally", age: 31, hobbies: ["sailing", "swimming"] },
]));
console.log(deepEqual(filterByAge(people, 0, 200), people));
console.log(deepEqual(filterByAge(people, 100, 200), []));
console.log(deepEqual(filterByAge(people, 15, 15), [
  { name: "Bob", age: 15, hobbies: ["skiing", "falling"] },
]));
