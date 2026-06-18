/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNegative = x < 0;
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));

    const MAX_INT = Math.pow(2,31) - 1;
    const MIN_INT = -Math.pow(2,31);

    const result = isNegative ? -reversed : reversed;

    if (result < MIN_INT || result > MAX_INT) {
        return 0;
    }

    return result;

};