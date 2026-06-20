/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let number = num;
  let result = "";

  while (number > 0) {
    if (number >= 1000) {
      result = result.concat("M");
      number -= 1000;
    } else if (number >= 900) {
      result = result.concat("CM");
      number -= 900;
    } else if (number >= 500) {
      result = result.concat("D");
      number -= 500;
    } else if (number >= 400) {
      result = result.concat("CD");
      number -= 400;
    } else if (number >= 100) {
      result = result.concat("C");
      number -= 100;
    } else if (number >= 90) {
      result = result.concat("XC");
      number -= 90;
    } else if (number >= 50) {
      result = result.concat("L");
      number -= 50;
    } else if (number >= 40) {
      result = result.concat("XL");
      number -= 40;
    } else if (number >= 10) {
      result = result.concat("X");
      number -= 10;
    } else if (number >= 9) {
      result = result.concat("IX");
      number -= 9;
    } else if (number >= 5) {
      result = result.concat("V");
      number -= 5;
    } else if (number >= 4) {
      result = result.concat("IV");
      number -= 4;
    } else if (number >= 1) {
      result = result.concat("I");
      number -= 1;
    }
  }

  return result;
};