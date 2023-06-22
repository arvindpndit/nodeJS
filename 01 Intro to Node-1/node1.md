# Introduction to Node.js

Node.js is a runtime environment for JavaScript that was created by Ryan Dahl in 2009. It is not a framework but rather a platform that allows developers to execute JavaScript code on the server-side. In this readme file, we will explore various aspects of Node.js, including its runtime environment, globals, and module patterns.

## Runtime Environment

A runtime environment is a software framework that provides the necessary components and libraries for executing programs written in a specific programming language. In the case of Node.js, it serves as a runtime environment for JavaScript, allowing developers to run JavaScript code outside of a web browser.

## Difference between Library and Framework

A library is a collection of pre-written code that provides specific functionalities that can be used by applications. It is a set of tools that developers can call upon when needed. On the other hand, a framework is a broader concept that defines the overall structure and architecture of an application. It provides a foundation for building applications and often dictates how the application should be designed and organized.

## Globals in Node.js

Node.js provides several global objects and variables that are accessible throughout the application. Some commonly used globals in Node.js include:

- `__dirname`: A string representing the directory name of the current module.
- `__filename`: A string representing the file name of the current module.
- `exports`: An object used to export variables, functions, or objects from a module.
- `module`: An object representing the current module.
- `require()`: A function used to import modules or files.
- `process`: An object representing the current Node.js process.
- `console`: The console object provides methods to log and display information in the console.
- `setTimeout & setInterval`: These functions are used to schedule the execution of code after a certain delay (setTimeout) or at fixed intervals (setInterval).

For example, you can use `console.log(__dirname)` to print the current directory name or `console.log(process)` to access information about the current process.

## Module Pattern in Node.js

In Node.js, modules are used to organize and encapsulate code into separate files, making it easier to manage and reuse code. There are two common ways of preparing modules in Node.js: CommonJS modules and ES modules.

### CommonJS Module

CommonJS is the module system used by Node.js by default. It uses the `module.exports` object to define what can be accessed from a module. Here's an example:

```javascript
// File: alzebra.js
function addition(num1, num2) {
  return num1 + num2;
}

// Exporting functions using CommonJS
module.exports = {
  addition: addition,
};

// File: index.js
const doCalculation = require("./alzebra");

let num1 = 5;
let num2 = 10;
let result = doCalculation.addition(num1, num2);
console.log(result); // Output: 15
```

In the above example, we define the `addition` function in the `alzebra.js` module and export it using `module.exports`. Then, in the `index.js` module, we import the `doCalculation` object from `alzebra.js` using `require` and use the exported function.

### ES Module

ES modules are a standard for organizing and sharing JavaScript code. Node.js added support for ES modules starting from version 13. To use ES modules in Node.js, you can either use the `.mjs` file extension or specify `"type": "module"` in the `package.json` file. Here's an example:

#### Using .mjs File

````javascript
// File: alzebra.js
function addition(num1, num2) {
  return num1 + num2;
}

// Exporting functions using ES modules
export default {
  addition: addition
};
``

`

```javascript
// File: index.mjs
import doCalculation from "./alzebra.js";

let num1 = 5;
let num2 = 10;
let result = doCalculation.addition(num1, num2);
console.log(result); // Output: 15
````

#### Using package.json File

To use ES modules with the `package.json` file, add the following configuration:

```json
{
  "type": "module"
}
```

```javascript
// File: alzebra.js
function addition(num1, num2) {
  return num1 + num2;
}

// Exporting functions using ES modules
const doCalculation = {
  addition: addition,
};
export default doCalculation;
```

```javascript
// File: index.js
import doCalculation from "./alzebra.js";

let num1 = 5;
let num2 = 10;
let result = doCalculation.addition(num1, num2);
console.log(result); // Output: 15
```

## Conclusion

Node.js is a powerful runtime environment for executing JavaScript on the server-side. It allows developers to build scalable and efficient applications using JavaScript. In this readme file, we covered the basics of Node.js, including its runtime environment, globals, and module patterns. Understanding these concepts will provide a solid foundation for developing Node.js applications.
