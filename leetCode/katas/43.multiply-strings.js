/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // Multiply input
    let result = [], pos = '';

    const numLonger = num2.length > num1.length ? num2 : num1; 
    const numShorter = num1.length < num2.length ? num1 : num2;

    // console.log(numShorter,numLonger)

    for (let i = numLonger.length-1; i >= 0; i--) {

        if (i < numLonger.length-1) pos += '0';
        
        if (pos !== ''){
            result.push((numLonger[i]*Number(numShorter))+pos)
        } else {
            result.push((numLonger[i] * Number(numShorter)).toString())
        }
    }

    result.sort(function(a, b){return b.length - a.length})

    // Add results
    let sum = [], leftOver = 0, highNum = result[0].length;
    const sumArr = result.map((num)=> {
        let spaces = '', spacesNum = highNum-num.length;
        for (let u = 0; u < spacesNum; u++) spaces += '0';
        return spaces+num;
    });

    for (let i = highNum-1; i >= 0; i--) {
        let add = 0 + leftOver;
        leftOver = 0;

        for (let e = 0; e < sumArr.length; e++) {
            add += Number(sumArr[e][i]);
        }

        if (add <= 9){
            sum.unshift(add.toString())
        } else {
            sum.unshift(add.toString()[1])
            leftOver = Number(add.toString()[0])
        }

        if (leftOver > 0 && i === 0) {
            sum.unshift(leftOver.toString())
        }
    }

    if (Number(sum.join('')) === 0) return "0"

    return sum.join('');
};
// @lc code=end

module.exports = multiply;