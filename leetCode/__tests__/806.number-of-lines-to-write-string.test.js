const numberOfLines = require('../katas/806.number-of-lines-to-write-string');

describe('numberOfLines', () => { 
    test('inputs of nums = [2,7,11,15], target = 9 should return [0, 1]', () => { 
        const widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 
        s = "abcdefghijklmnopqrstuvwxyz",
        result = [3,60];
        expect(numberOfLines(widths,s)).toEqual(result);
     });
 })