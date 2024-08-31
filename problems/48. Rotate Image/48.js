/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
      const L = matrix.length - 1;
      for (let j = 0; j < matrix.length - (2 * i) - 1; j++) {
          [matrix[i][i+j], matrix[i+j][L-i], matrix[L-i][L-j-i], matrix[L-i-j][i]] = [matrix[L-i-j][i], matrix[i][i+j], matrix[i+j][L-i], matrix[L-i][L-j-i]];
      }
  }
};
