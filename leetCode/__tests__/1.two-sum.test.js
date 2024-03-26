const twoSum = require('../katas/1.two-sum');

describe('twoSum', () => { 
    test('inputs of nums = [2,7,11,15], target = 9 should return [0, 1]', () => { 
        const nums = [2,7,11,15], target = 9;
        const output = [0, 1];
        expect(twoSum(nums,target)).toEqual(output);
     });
     test('inputs of nums = [3,2,4], target = 6 should return [1, 2]', () => { 
        const nums = [3,2,4], target = 6;
        const output = [1, 2];
        expect(twoSum(nums,target)).toEqual(output);
     });
     test('inputs of nums = [3,3], target = 6 should return [0, 1]', () => { 
        const nums = [3,3], target = 6;
        const output = [0, 1];
        expect(twoSum(nums,target)).toEqual(output);
     });
 })