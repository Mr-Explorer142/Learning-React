const numbers = [5, 12, 8, 130, 44];

const person = {
  "name": "Tamim",
  age: 24,
  email: "tamim142@gmail.com"
};

// for(const i of numbers) {
//   console.log(i);
// }

// for(const i in person) {
//   console.log(`${i} : ${person[i]}`);
// }

for(const [key, value] of Object.entries(person)) {
  console.log(`${key} : ${value}`);
}