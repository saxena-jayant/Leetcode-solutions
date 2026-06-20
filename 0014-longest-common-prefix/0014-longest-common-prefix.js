/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = strs[0] || "";

  for (i = 1; i < strs.length; i++) {
    let temp = "";
    for (j = 0; j < Math.min(result.length, strs[i].length); j++) {
      if (result[j] == strs[i][j]) {
        temp = temp.concat(strs[i][j]);
      } else {
        break;
      }
    }
    result = temp;
  }

  return result;
};