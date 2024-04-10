/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var searchRange = function(nums, target) {
    let start = -1,  end = -1;
    for (let i = 0; i < nums.length; i++) {
        if (start >= 0 && target === nums[i]) end = i;
        if (start < 0 && target === nums[i]) start = i;
    }

    if (start >= 0 && end < 0) end = start;
    
    return [start,end];
};
// @lc code=end

module.exports = searchRange;