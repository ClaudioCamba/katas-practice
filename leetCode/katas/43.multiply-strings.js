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
    let leftOver = 0, result = [], pos = null;
    // const arr1 = num1.split('').map(num => Number(num));
    const arr2 = num2.split('').map(num => Number(num));


    for (let i = arr2.length-1; i >= 0; i--) {

        if (i < arr2.length-1){
            pos = '';

            let posCheck = (arr2.length-1) - i;
            for (let o = 0; o < posCheck; o++) {
                pos += '0';
            }
            pos = Number('1'+pos);
        }

        if (pos){
            result.push((arr2[i]*Number(pos)) * Number(num1))
        } else {
            result.push(arr2[i] * Number(num1))
        }        
    }

    const finalSum = result.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    },0);

    return finalSum.toString();
};
// @lc code=end

module.exports = multiply;