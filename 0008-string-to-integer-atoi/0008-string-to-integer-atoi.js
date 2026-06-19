/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let string = s.trim();
  string = parseInt(string) || 0;
  if (string < Math.pow(-2, 31)) {
    string = Math.pow(-2, 31);
  } else if (string > Math.pow(2, 31) - 1) {
    string = Math.pow(2, 31)-1;
  }
  return string;
};