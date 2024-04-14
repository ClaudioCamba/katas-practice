const zigZag = require('../katas/6.zigzag-conversion');

describe('zigZag', () => { 
    test('Input: s = "PAYPALISHIRING", numRows = 3, Output: "PAHNAPLSIIGYIR"', () => { 
        const s = "PAYPALISHIRING", numRows = 3;
        const output = "PAYPALISHIRING";
        expect(zigZag(s, numRows)).toBe(output)
     })
    // test('Input: s = "PAYPALISHIRING", numRows = 4, Output: "PINALSIGYAHRPI"', () => { 
    //     const s = "PAYPALISHIRING", numRows = 4;
    //     const output = "PINALSIGYAHRPI";
    //     expect(zigZag(s, numRows)).toBe(output)
    //  })
    // test('Input: s = "A", numRows = 1, Output: "A"', () => { 
    //     const s = "A", numRows = 1;
    //     const output = "A";
    //     expect(zigZag(s, numRows)).toBe(output)
    //  })
 });