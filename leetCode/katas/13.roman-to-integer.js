/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    let sLength = s.length;
    let copy = s;

    const deduct = [
        {val:'IV', dd: 4},
        {val:'IX', dd: 9},
        {val:'XL', dd: 40},
        {val:'XC', dd: 90},
        {val:'CD', dd: 400},
        {val:'CM', dd: 900},
    ];

    for (let i = 0; i < sLength; i++) {
        deduct.forEach((w)=>{
            if (copy.indexOf(w.val) > -1){
                total += w.dd;
                copy = copy.replace(w.val, "");
            };
        });
    }

    copy.split('').forEach((l)=>{
        switch (l) {
            case 'I' : total += 1; break;
            case 'V' : total += 5; break;
            case 'X' : total += 10; break;
            case 'L' : total += 50; break;
            case 'C' : total += 100; break;
            case 'D' : total += 500; break;
            case 'M' : total += 1000; break;
        }
    });
    
    return total;
};
// @lc code=end

module.exports = romanToInt;
