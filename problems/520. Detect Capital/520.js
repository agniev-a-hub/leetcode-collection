/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  const isUpper = (letter) => letter === letter.toUpperCase();
  let upperCount = 0;
  for (let i = 0; i < word.length; i++) {
      if (isUpper(word[i])) upperCount++;
  }
  return upperCount === word.length
      || upperCount === 0
      || upperCount === 1 && isUpper(word[0]);
};
