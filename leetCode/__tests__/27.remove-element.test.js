const removeElement = require('../katas/27.remove-element');

describe('removeElement - remove val from the nums array and return length', () => { 
    test('input nums = [3,2,2,3], val = 3 should return 2', () => { 
        const nums = [3,2,2,3];
        const val = 3;
        const output = 2;
        expect(removeElement(nums, val)).toBe(output);
     })
    test('input nums = [0,1,2,2,3,0,4,2], val = 2 should return 5', () => { 
        const nums = [0,1,2,2,3,0,4,2];
        const val = 2;
        const output = 5;
        expect(removeElement(nums, val)).toBe(output);
     })
 })