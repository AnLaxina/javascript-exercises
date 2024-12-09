// To convert from fahrenheit to celsius the formula is:
// (F - 32) * 5/9 = Celsius
const convertToCelsius = function (fahrenheitTemp) {
  let celsius = (fahrenheitTemp - 32) * 5 / 9;
  // I multiply the initial value by 10 to get a "big" number
  // then, divide it by 10 to get the decimal point by 1
  let converted = Math.round(celsius * 10) / 10;
  return converted;
};

// Converting from celsius to fahrenheit is kind of similar:
// (C * 9/5) + 32 = Fahrenheit
const convertToFahrenheit = function (celsiusTemp) {
  let fahrenheit = (celsiusTemp * 9 / 5) + 32;
  let converted = Math.round(fahrenheit * 10) / 10;
  return converted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
