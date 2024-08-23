/**
 * @param {string} s
 * @return {string}
 */
function originalDigits(s) {
  const alphaCounter = new Array(26).fill(0);
  for (const char of s) {
      alphaCounter[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  const digitCounter = new Array(10).fill(0);

  digitCounter[0] = alphaCounter['z'.charCodeAt(0) - 'a'.charCodeAt(0)];
  digitCounter[2] = alphaCounter['w'.charCodeAt(0) - 'a'.charCodeAt(0)];
  digitCounter[4] = alphaCounter['u'.charCodeAt(0) - 'a'.charCodeAt(0)];
  digitCounter[6] = alphaCounter['x'.charCodeAt(0) - 'a'.charCodeAt(0)];
  digitCounter[8] = alphaCounter['g'.charCodeAt(0) - 'a'.charCodeAt(0)];

  digitCounter[3] = alphaCounter['h'.charCodeAt(0) - 'a'.charCodeAt(0)] - digitCounter[8];
  digitCounter[5] = alphaCounter['f'.charCodeAt(0) - 'a'.charCodeAt(0)] - digitCounter[4];
  digitCounter[7] = alphaCounter['s'.charCodeAt(0) - 'a'.charCodeAt(0)] - digitCounter[6];
  digitCounter[1] = alphaCounter['o'.charCodeAt(0) - 'a'.charCodeAt(0)] - digitCounter[0] - digitCounter[2] - digitCounter[4];
  digitCounter[9] = alphaCounter['i'.charCodeAt(0) - 'a'.charCodeAt(0)] - digitCounter[5] - digitCounter[6] - digitCounter[8];

  let result = '';
  for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < digitCounter[i]; ++j) {
          result += i.toString();
      }
  }

  return result;
}
