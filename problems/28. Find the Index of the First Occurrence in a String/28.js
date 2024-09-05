/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};

/* Solution without .indexOf() */
var _strStr = function(haystack, needle) {
for (var j = 0; haystack[j]; j++)
{
  var found = true;
  for (var i = 0; needle[i]; i++) {
    if (haystack[j + i] !== needle[i]) { found=false; break; }
  }
  if (found) return j;
}
return -1;
}
