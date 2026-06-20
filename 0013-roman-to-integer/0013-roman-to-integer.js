/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let n = s;
  let result = 0;

  while (n.length > 0) {
    if (n[0] == "M") {
      result += 1000;
      n = n.slice(1, n.length);
    } else if (n[0] == "D") {
      result += 500;
      n = n.slice(1, n.length);
    } else if (n[0] == "C") {
      if (n[1] == "M") {
        result += 900;
        n = n.slice(2, n.length);
      } else if (n[1] == "D") {
        result += 400;
        n = n.slice(2, n.length);
      } else {
        result += 100;
        n = n.slice(1, n.length);
      }
    } else if (n[0] == "L") {
      result += 50;
      n = n.slice(1, n.length);
    } else if (n[0] == "X") {
      if (n[1] == "C") {
        result += 90;
        n = n.slice(2, n.length);
      } else if (n[1] == "L") {
        result += 40;
        n = n.slice(2, n.length);
      } else {
        result += 10;
        n = n.slice(1, n.length);
      }
    } else if (n[0] == "V") {
      result += 5;
      n = n.slice(1, n.length);
    } else if (n[0] == "I") {
      if (n[1] == "X") {
        result += 9;
        n = n.slice(2, n.length);
      } else if (n[1] == "V") {
        result += 4;
        n = n.slice(2, n.length);
      } else {
        result += 1;
        n = n.slice(1, n.length);
      }
    }
  }

  return result;
};