/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = function(s) {
    const strArray = s.split('');
    let result = [];

    const checkPalindrome = (arr) =>{
        if (arr.join('') === arr.reverse().join('') && arr.length > result.length){
            result = arr.join('');
            return true;
        }
    }

    if (s.length === 2 && checkPalindrome(strArray)) return result;

    for (let m = strArray.length; m > 0; m--) {
        for (let o = 0; o < strArray.length; o++) {
            checkPalindrome(strArray.slice(o,m));
        }
   }

   return result;
};
// @lc code=end

module.exports = longestPalindrome;