/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (input) {
  if (input >= 0 && input <= 9) {
    return true;
  }
  if (input % 10 === 0 || input < 0) {
      return false;
  }
  let temp = input;
  let reversed = 0;
  while (temp !== 0) {
      reversed = reversed * 10 + (temp % 10);
      temp = Math.trunc(temp / 10);
  }
  return !(input - reversed);
};
