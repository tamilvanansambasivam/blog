/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const myobj = {};
  for (let i = 0; i < nums.length; i++) {
    myobj[nums[i]] = myobj[nums[i]] + 1 || 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (myobj[nums[i]] == 1) {
      return nums[i];
    }
  }
};
