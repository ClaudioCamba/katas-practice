/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const numLonger = p.length > q.length ? p : q; 
    const numShorter = q.length < p.length ? q : p;
    for (let i = 0; i < numLonger.length; i++) {
        if (numLonger[i] !== numShorter[i]){
            return false;
        }
    }
    return true;
};
// @lc code=end

module.exports = isSameTree;