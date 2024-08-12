/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
  let letters = s.split("");
  let max = 0;
  let result = new Map();
  let start = 0;

  for (let i = 0; i < letters.length; i++) {
    if (!result.has(letters[i])) {
      result.set(letters[i], i);
    } else {
      i = result.get(letters[i]);
      result.clear();
    }
    if (max < result.size) {
      max = result.size;
    }
  }
  return max;
}
