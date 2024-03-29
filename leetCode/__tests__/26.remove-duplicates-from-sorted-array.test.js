const removeDuplicates = require('../katas/26.remove-duplicates-from-sorted-array');

describe('removeDuplicates', () => { 
    test('input [1,1,2] should return 2, duplicates removed and get length', () => { 
        const input = [1,1,2];
        const output = 2;
        expect(removeDuplicates(input)).toEqual(output);
     })
     test('input [0,0,1,1,1,2,2,3,3,4] should return 5', () => { 
        const input = [0,0,1,1,1,2,2,3,3,4];
        const output = 5;
        expect(removeDuplicates(input)).toEqual(output);
     })
 })