const countAndSay = require('../katas/38.count-and-say');

describe('countAndSay', () => { 
    it('input of 1 should return 1, one as base case', () => { 
        const input = 1;
        const output = "1";
        expect(countAndSay(1)).toBe(output);
     })
    it('input of 4 should return "1211", one as base case', () => { 
        const input = 4;
        const output = "1211";
        expect(countAndSay(1)).toBe(output);
     })
 })