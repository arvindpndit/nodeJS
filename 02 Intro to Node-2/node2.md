# Introduction to Node.js - Part 2

Welcome to the second part of the Introduction to Node.js series! In this part, we will explore named and default exports of modules, the use of the `process` global object, and the `fs` module for file system operations.

## Named Export

Named export allows us to export multiple functions or variables from a module using their specific names. This allows us to selectively import and use those exports in other modules.

**Code Example:**

```javascript
// alzebra.js
export function addition(num1, num2) {
  return num1 + num2;
}
export function subtraction(num1, num2) {
  return num1 - num2;
}
export function multiplication(num1, num2) {
  return num1 * num2;
}
export function division(num1, num2) {
  return num1 / num2;
}

// index.js
import { addition, subtraction, multiplication, division } from "./alzebra.js";

let num1 = 10;
let num2 = 5;

// Addition
let calculateAddition = addition(num1, num2);
console.log(calculateAddition);

// Division
console.log(division(num1, num2));
```

## Default Export

Default export allows us to export a single function, object, or value from a module. When importing a default export, we can assign it any name we like.

**Code Example:**

```javascript
// alzebra.js
function addition(num1, num2) {
  return num1 + num2;
}
function subtraction(num1, num2) {
  return num1 - num2;
}
function multiplication(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  return num1 / num2;
}

const doCalculation = {
  addition: addition,
  subtraction: subtraction,
  multiplication: multiplication,
  division: division,
};
export default doCalculation;

// index.js
import doCalculation from "./alzebra.js";

let num1 = 10;
let num2 = 5;

console.log(doCalculation);
// Addition
let additionResult = doCalculation.addition(num1, num2);
console.log(additionResult);

// Division
console.log(doCalculation.division(num1, num2));
```

## `process` Global Object

The `process` global object in Node.js provides information and control over the current Node.js process. It can be used to print output to the terminal, similar to `console.log()`.

**Code Example:**

```javascript
process.stdout.write("hello, arvind!");
process.stdout.write("  nice to meet ya");
```

## `fs` Module in Node.js

The `fs` module in Node.js provides an API for interacting with the file system. It enables performing various CRUD (Create, Read, Update, Delete) operations on files.

Let's take a look at an example of creating, reading, and deleting a file using the `fs` module.

**Creating a File:**

```javascript
const fs = require("fs");

const data = `I'm 21y old ⚡`;

// fs.writeFile(__dirname + "/arvind.txt", data, "utf8", (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//     return;
//   }

//   console.log("File write operation completed.");
// });

fs.appendFile(__dirname + "/arvind.txt", data, "utf8", () => {
  console.log("Text appended successfully.");
});
```

**Reading a File:**

```javascript
const fs = require("fs");

fs.readFile(__dirname + "/arvind.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("File contents:", data);
});
```

**Deleting a File:**

```javascript
const fs = require("fs");

fs.unlink(__dirname + "/arvind.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }

  console.log("File deleted successfully.");
});
```

## Conclusion

In this part, we learned about named and default exports in Node.js modules. We explored how to use named exports to selectively import functions or variables from a module, as well as how to export a default value from a module and import it using any name we like.

Additionally, we discovered the `process` global object, which allows us to write to the terminal in Node.js. We also explored the `fs` module, which provides file system operations such as creating, reading, and deleting files.

These concepts and modules are essential in building robust Node.js applications and manipulating files in the file system. Keep exploring and experimenting to gain a deeper understanding of Node.js and its vast ecosystem!
