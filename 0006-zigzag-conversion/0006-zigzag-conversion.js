/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let rows = [];
  let reverse = false;
  let row = [];
  let reverseActiveIndex = numRows - 2 < 0 ? 0 : numRows - 2;
  let finalResult = [];

  for (let index = 0; index < s.length; index++) {
    if (!reverse) {
      row = [...row, s[index]];
      if (row.length == numRows || index == s.length - 1) {
        rows = [...rows, row];
        row = [];
        reverseActiveIndex = numRows - 2 < 0 ? 0 : numRows - 2;
        reverse = !reverse;
      }
    } else {
      if (numRows < 3) {
        row = [...row, s[index]];
        if (row.length == numRows || index == s.length - 1) {
          rows = [...rows, row];
          row = [];
          reverseActiveIndex = numRows - 2 < 0 ? 0 : numRows - 2;
          reverse = !reverse;
        }
      } else {
        for (let i = 0; i < numRows; i++) {
          row = reverseActiveIndex == i ? [...row, s[index]] : [...row, ""];
        }
        reverseActiveIndex =
          reverseActiveIndex - 1 < 0 ? 0 : reverseActiveIndex - 1;
        if (reverseActiveIndex == 0) {
          rows = [...rows, row];
          row = [];
          reverseActiveIndex = numRows - 2 < 0 ? 0 : numRows - 2;
          reverse = !reverse;
        } else {
          rows = [...rows, row];
          row = [];
        }
      }
    }
  }

  for (r = 0; r < numRows; r++) {
    for (u = 0; u < rows.length; u++) {
      finalResult =
        rows[u][r] && rows[u][r] !== ""
          ? [...finalResult, rows[u][r]]
          : finalResult;
    }
  }
  return finalResult.join("");
};