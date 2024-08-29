/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const brackets = {
      ']': '[',
      '}': '{',
      ')': '(',
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
      if (Object.values(brackets).includes(s[i])) {
          stack.push(s[i]);
      } else {
          const lastElement = stack.pop();
          if (lastElement !== brackets[s[i]]) {
              return false;
          }
      }
  }
  return !stack.length;
};
