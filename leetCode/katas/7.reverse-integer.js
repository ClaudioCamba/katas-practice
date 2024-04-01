/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num;
    if (x < 0){
        num = -Number((x*-1).toString().split('').reverse().join(''));
    } else {
        num = Number(x.toString().split('').reverse().join(''));
    }

    if (num > 2147483641 || num < -2147483641) return 0;
    return num;
};
// @lc code=end

module.exports = reverse;
