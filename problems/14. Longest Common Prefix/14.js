/**
 * @param {string[]} strings
 * @return {string}
 */

var longestCommonPrefix = function(strings) {
  const stringsSize = strings.length;
  if (stringsSize == 1) {
      return strings[0];
  }
  strings.sort();
  let minimalItemLength = Math.min(strings[0].length, strings[stringsSize-1].length);
  let i = 0;
  while (i < minimalItemLength && strings[0][i] == strings[stringsSize-1][i] ) {
      i++;
  }
  let previousItem = strings[0].substring(0, i);
  return previousItem;
};
