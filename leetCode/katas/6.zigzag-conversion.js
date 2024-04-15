/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var zigZag = function(s, numRows) {

    if (numRows < 2) return s;

    const hold = [], str = s.split('');
   
    const spaces = ((numRows*s.length)/2)/numRows;
    for (let i = 0; i < numRows; i++) {
        hold.push([]);
        for (let o = 0; o < spaces; o++) {
            hold[i].push('-');
        }
    };

    let column = 1, between = 0;
    for (let col = 0; col < spaces; col++) {

        for (let rowD = 0; rowD < hold.length; rowD++) {
            
            if (column === 1){
                hold[rowD][col] = str.shift();
            } else {
                if (between === rowD){
                    hold[rowD][col] = str.shift();
                }
            }

            if (rowD === hold.length-1){
                if (between <= 0){
                    between = rowD-1;
                } else {
                    between--;
                }
            }

        }

        if (column === numRows-1){
            column = 1;
        } else {
            column++;
        }
    }

    const word = hold.map((row)=> {
        return row.filter(val => val !== '-').join('');
    })

    return word.join('')
};

// @lc code=end

module.exports = zigZag;