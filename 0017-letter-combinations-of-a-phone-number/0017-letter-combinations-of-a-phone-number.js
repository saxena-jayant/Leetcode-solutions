/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) {
    return [];
  }

  let result = [];
  let t = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  function backTrack(index, currentString) {
    if (currentString.length == digits.length) {
      result.push(currentString);
      return;
    }
    const currentDigit = digits[index];
    const letters = t[currentDigit];

    for (const letter of letters) {
      backTrack(index + 1, currentString + letter);
    }
  }

  backTrack(0, "");

  return result;
};