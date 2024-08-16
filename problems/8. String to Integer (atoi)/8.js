/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim();

  if (str.length === 0) {
      return 0;
  }

  let sign = 1;
  let i = 0;

  if (str[0] === '-') {
      sign = -1;
      i++;
  } else if (str[0] === '+') {
      i++;
  }

  let result = 0;
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  while (i < str.length && str[i] >= '0' && str[i] <= '9') {
      result = result * 10 + (str[i] - '0');

      if (sign * result > INT_MAX) {
          return INT_MAX;
      }
      if (sign * result < INT_MIN) {
          return INT_MIN;
      }

      i++;
  }

  return sign * result;
};
