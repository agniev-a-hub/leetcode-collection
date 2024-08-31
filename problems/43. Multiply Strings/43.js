/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  if (num1 === '1') return num2;
  if (num2 === '1') return num1;

  let num1Length= num1.length;
  let num2Length= num2.length;
  let result = new Array(num1Length + num2Length).fill(0);

  for (let i = num1Length - 1; i >= 0; i--) {
      for (let j = num2Length - 1; j >= 0; j--) {
          let mul = (num1[i] - '0') * (num2[j] - '0');
          let sum = mul + result[i + j + 1];
          result[i + j + 1] = sum % 10;
          result[i + j] += Math.floor(sum / 10);
      }
  }
  let resultString = result.join('');
  return resultString;
};
