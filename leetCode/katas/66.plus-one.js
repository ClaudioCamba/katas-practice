/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let leftOver = 0, addOne = false;

    for (let i = digits.length-1; i >= 0; i--) {

        if (!addOne){
            digits[i]++
            addOne = true;
        }
        if (leftOver > 0){
            digits[i] = digits[i]+leftOver;
            leftOver = 0;
        }
        
        if (digits[i] > 9){
            leftOver = Number(digits[i].toString()[0])
            digits[i] = Number(digits[i].toString()[1]);
        }
    
        if (i === 0 && leftOver > 0){
            digits.unshift(leftOver);
        }

    }

    return digits;
};
// @lc code=end

module.exports = plusOne;