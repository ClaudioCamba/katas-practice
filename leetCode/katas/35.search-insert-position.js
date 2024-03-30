/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.includes(target)) return nums.indexOf(target);

    const array = [];
    let num = true;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target && num){
            array.push(target);
            num = false;
        }
    
        array.push(nums[i]);

        if (i === nums.length-1) array.push(target);
    }

    return array.indexOf(target);
};

// @lc code=end

module.exports = searchInsert;
