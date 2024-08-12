/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0;
  const MIN = Math.pow(-2, 31), MAX = Math.pow(2, 31) - 1;
  while (x !== 0) {
      let last = x % 10;
      x  = parseInt(x / 10);
      result = (result * 10) + last;
      if (result < MIN || result > MAX) return 0;
  }
  return result;
};
