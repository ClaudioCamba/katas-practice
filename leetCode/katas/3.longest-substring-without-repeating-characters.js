/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let str = '', start = 0;

    for (let end = 0; end <= s.length; end++) {
        while(/(.).*\1/.test(s.substring(start,end))) start++
        if (s.substring(start,end).length > str.length) str = s.substring(start,end);
    }

    return str.length;
};
// @lc code=end

module.exports = lengthOfLongestSubstring;