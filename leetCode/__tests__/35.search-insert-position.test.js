const searchInsert = require('../katas/35.search-insert-position');

describe('searchInsert', () => { 
    test('input of [1,3,5,6], target 5 should return 2 as the position of target value 5', () => { 
        const nums = [1,3,5,6];
        const target = 5;
        const output = 2;
        expect(searchInsert(nums,target)).toBe(output);
     });
     test('input of [1,3,5,6], target 5 should return 2 as the position of target value 2', () => { 
        const nums = [1,3,5,6];
        const target = 2;
        const output = 1;
        expect(searchInsert(nums,target)).toBe(output);
     });
     test('input of [1,3,5,6], target 5 should return 7 as the position of target value 7', () => { 
        const nums = [1,3,5,6];
        const target = 7;
        const output = 4;
        expect(searchInsert(nums,target)).toBe(output);
     });
})