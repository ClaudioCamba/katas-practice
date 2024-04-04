/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // if (s.length%2 !== 0) return false;

    const strArray = s.split('');
    const opening = [], unmatched = [], open = ['{','[','('], close = ['}',']',')'];


    for (let i=0; i<strArray.length; i++){
        if (open.includes(strArray[i])) {
            opening.push(close[open.indexOf(strArray[i])])
        }

        if (close.includes(strArray[i])){
            if (opening[opening.length-1] === strArray[i]) {
                opening.pop();
            } else {
                unmatched.push(strArray[i]);
            }
        }
    }

    return opening.length === 0 && unmatched.length === 0 ? true : false;
};

// @lc code=end

module.exports = isValid;