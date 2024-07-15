//problem 1

// function scopeTest() {
//   if (true) {
//     var varVariable = "I am var";
//     let letVariable = "I am let";
//     const constVariable = "I am const";
//   }
//   console.log(varVariable);
//   console.log(letVariable);
//   console.log(constVariable);
// }

//scopeTest();
// at fast the output show i am var then it say uncaught referenceerror : letvariable is not defined and is this code is error the reasons of let and const is a block level element.

//problem 2

// function greet(name, greeting = "Hello") {
//   return greeting+ ', ' + name + '!';
// }
// console.log(greet("Alice")); // "Hello, Alice!"
// console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"

//problem 3

// function sum(...params) {
//   let total = 0;
//   for (const a of params) {
//     total += a;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3)); // 6
// console.log(sum(10, 20, 30, 40)); // 100
// console.log(sum(5)); // 5

//problem 4

//const array1 = [1, 2, 3];
//const array2 = [4, 5, 6];
//const array3 = [7, 8, 9];

// Your code here
//const mergedArray = [...array1,...array2,...array3]
//console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//problem 5

// const name = "John";
// const age = 30;

// // Your code here
// let person = {
//     name,
//     age,
//     greet () {
//         console.log("Hi, I'm John and I'm 30 years old.");
//     }
// }
// console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."

//problem 6

// const fruits = ["apple", "banana", "cherry"];
// for (let store of fruits) {
//     console.log(store);
// }

//problem 7

// const name = "Alice";
// const age = 25;

// // Your code here
// const message = `My name is ${name} and I am ${age} years old.`;
// console.log(message); // "My name is Alice and I am 25 years old."

//problem 8

// const students = [
//   { name: "Alice", grade: 90 },
//   { name: "Bob", grade: 85 },
//   { name: "Charlie", grade: 92 }
// ];

// // Your code here
// for (let {name} of students) {
//     console.log(name);
// }
// for (let {grade} of students) {
//     console.log(grade);
// }

//problem 9

// const nestedArrays = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // Your code here
// let sum = 0;
// for (let i = 0; i < nestedArrays.length; i++) {
//   for (let j = 0; j < nestedArrays[i].length; j++) {
//     sum += nestedArrays[i][j];
//   }
// }
// console.log(sum);

//problem 10

// const a = 5;
// const b = 10;

// // Your code here
// const result = `The sum of ${a} and ${b} is 15.`;
// console.log(result); // "The sum of 5 and 10 is 15."
