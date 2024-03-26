/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let o = 0; o < nums.length; o++) {
            if (nums[i] + nums[o] === target && o !== i){
                nums.splice(i, 1).splice(o, 1);
                return [i,o]
            }
        }
    }
};
// @lc code=end
module.exports = twoSum;
