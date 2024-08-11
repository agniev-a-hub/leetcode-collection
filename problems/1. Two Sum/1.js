/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSums = function(nums, target) {
  const map = new Map();
  const answers = [];
  for (let i = 0; i < nums.length; i++) {
      if (map.has(target - nums[i])) {
          answers[0] = map.get(target - nums[i]);
          answers[1] = i;
          return answers;
      };
      map.set(nums[i], i);
  };
};
