/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length; i++) {
    if (sortedNums[i] != i) {
      return i;
    }
  }
};
