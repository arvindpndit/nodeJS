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

const doCalcution = {
  addition: addition,
  subtraction: subtraction,
  multiplication: multiplication,
  division: division,
};
export default doCalcution;

// export default {
//   addition: addition,
//   subtraction: subtraction,
//   multiplication: multiplication,
//   division: division,
// };
