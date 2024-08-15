/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  s = s.trim();
  if (s.length == 0) {
      return 0;
  }
  return s.replace(/  +/g, ' ')
      .trim()
      .split(' ')
      .length;
};
