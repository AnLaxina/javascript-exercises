const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arrayOfNums) {
  return arrayOfNums.reduce((sum, num) => sum + num, 0);

};

const multiply = function (arrayOfNums) {
  return arrayOfNums.reduce((sum, num) => sum * num, 1);

};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function () {

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
