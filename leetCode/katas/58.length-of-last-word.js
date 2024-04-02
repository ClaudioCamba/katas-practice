/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const string = s.trim().split(' ');
    return string[string.length - 1].length;
};
// @lc code=end

module.exports = lengthOfLastWord;

