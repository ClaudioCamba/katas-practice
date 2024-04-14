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
    const newS = s.split('');
    const hold = [
        // ['P',' ','A',' ','H',' ','N'],
        // ['A','P','L','S','I','I','G'],
        // ['Y',' ','I',' ','R',' ',' ']
        //"00P 10A 20Y 11P 02A 12L 22I 13S 04H 14I 24R 15I 06N 16G"
        //"00P 01A 02Y 11P 20A 21L 22I 31S 40H 41I 42R 51I 60N 61G"
        /*
        row = 3
        length = 14
        3*14 = 42 / 2 = 21
        7 for each row
        7 * 3 = 21
        21 / 3 = 21


        row = 4
        length = 14
        4*14 = 56 / 2 = 28
        7 for each row
        7 * 4 = 28
        28 / 4 = 7

        1 2 3 4 5 6 7 8 9 10 11 12 13 14
        0 1 2 3 4 5 6 7 8 9  10 11 12 13
        P A Y P A L I S H I  R  I  N  G
          2   3   5

        P   A   H   N
        A P L S I I G
        Y   I   R
        */ 
    ];

    const spaces = ((numRows*s.length)/2)/numRows;
    for (let i = 0; i < numRows; i++) {
        hold.push([]);
        for (let o = 0; o < spaces; o++) {
            hold[i].push(o);
        }
    };

    for (let r = 0; r < spaces; r++) {
        for (let e = 0; e < hold.length; e++) {
            console.log(e, hold[e][r])
        }
    }


    // for (let o = 0; o < s.length; o++) {
    //     const element = array[o];
    // }

    // console.log(hold)
    // console.log(s.length)
    // console.log(numRows)
};

// @lc code=end

module.exports = zigZag;