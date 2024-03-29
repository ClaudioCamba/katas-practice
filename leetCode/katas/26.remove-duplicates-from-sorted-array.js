/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if(nums.indexOf(nums[i]) !== i){
            nums.splice(i, 1);
            i --;
        };
    }
    
    return nums.length;
};
// @lc code=end

module.exports = removeDuplicates;
