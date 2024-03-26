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
    const pos = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let o = 0; o < nums.length; o++) {
            if (nums[i] + nums[o] === target && o !== i){
                pos.push(i);
                pos.push(o);
                nums.splice(i, 1);
                nums.splice(o, 1);
            }
        }
    }
    
    return pos;
};
// @lc code=end
module.exports = twoSum;
