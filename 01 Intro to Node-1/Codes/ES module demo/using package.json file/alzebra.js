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

// //exporting by common js modules
// module.exports = {
//   addition: addition,
//   subtraction: subtraction,
//   multiplication: multiplication,
//   division: division,
// };

const doCalcution = {
  addition: addition,
  subtraction: subtraction,
  multiplication: multiplication,
  division: division,
};
export default doCalcution;
