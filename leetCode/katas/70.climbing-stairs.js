/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Initial conditions
    let a = 1, b = 1;
    
    // Iteratively compute the number of ways for each step
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    return b; 
};
// @lc code=end

module.exports = climbStairs;