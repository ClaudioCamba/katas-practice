/*
 * @lc app=leetcode id=806 lang=javascript
 *
 * [806] Number of Lines To Write String
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
      ];
      
    const letters = {};
    let totalWidth = [], lines = 0, lastWidth = 0, hold = 0;


    for (let i = 0; i < widths.length; i++) {
        // console.log(widths[i])
        // console.log(s[i])
        letters[alphabet[i]] = widths[i]
    }

    for (let o = 0; o < s.length; o++) {
        if (hold + letters[s[o]] > 100){
            hold = 0;
            lines += 1;
        }

        if (hold + letters[s[o]] <= 100){
            hold += letters[s[o]];
        }

        if (s.length-1 === o && hold > 0){
            lines += 1;
            lastWidth = hold;
        }

    }

    return [lines, lastWidth]
};
// @lc code=end

module.exports = numberOfLines;