/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  const size = strs.length;
  if (size == 1) {
      return a[0];
  }
  strs.sort();
  let lastItem = Math.min(strs[0].length, strs[size-1].length);
  let i = 0;
  while (i < lastItem && strs[0][i] == strs[size-1][i] ) {
      i++;
  }
  let previousItem = strs[0].substring(0, i);
  return previousItem;
};
