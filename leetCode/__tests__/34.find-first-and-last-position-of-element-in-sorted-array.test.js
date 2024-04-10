const searchRange = require('../katas/34.find-first-and-last-position-of-element-in-sorted-array');

describe('searchRange', () => { 
    test('input of [5,7,7,8,8,10] and target 8, returns [3,4] both start/end index positions', () => { 
        const nums = [5,7,7,8,8,10], target = 8;
        const output = [3,4];
        expect(searchRange(nums,target)).toEqual(output)
     })
     test('input of [5,7,7,8,8,10] and target 6, returns [-1,-1] because they don\'t exist within the range array', () => { 
        const nums = [5,7,7,8,8,10], target = 6;
        const output = [-1,-1];
        expect(searchRange(nums,target)).toEqual(output)
     })
     test('input of [] and target 0, returns [-1,-1] because range array is empty', () => { 
        const nums = [], target = 0;
        const output = [-1,-1];
        expect(searchRange(nums,target)).toEqual(output)
     })
     test('input of [5,7,7,8,10] and target 8, returns [3,3] both start/end index positions', () => { 
        const nums = [5,7,7,8,10], target = 8;
        const output = [3,3];
        expect(searchRange(nums,target)).toEqual(output)
     })
     
 })