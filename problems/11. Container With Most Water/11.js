/**
 * @param {number[]} height
 * @return {number}
 */

function maxArea(height) {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let maxArea = 0;

  while (leftIndex < rightIndex) {
      const currentArea = Math.min(height[leftIndex], height[rightIndex]) * (rightIndex - leftIndex);
      maxArea = Math.max(maxArea, currentArea);
      if (height[leftIndex] < height[rightIndex]) {
          ++leftIndex;
      } else {
          --rightIndex;
      }
  }

  return maxArea;
};
