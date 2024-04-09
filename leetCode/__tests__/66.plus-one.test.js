const plusOne = require('../katas/66.plus-one');

describe('plusOne', () => { 
    test('input [1,2,3] should return [1,2,4], because 123 + 1 = 124', () => { 
        const input = [1,2,3];
        const output = [1,2,4];
        expect(plusOne(input)).toEqual(output)
     })
     test('input [4,3,2,1] should return [4,3,2,2]', () => { 
        const input = [4,3,2,1];
        const output = [4,3,2,2];
        expect(plusOne(input)).toEqual(output)
     })
     test('input [9] should return [1,0]', () => { 
        const input = [9];
        const output = [1,0];
        expect(plusOne(input)).toEqual(output)
     })
     test('input [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3] should return [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]', () => { 
        const input = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
        const output = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4];
        expect(plusOne(input)).toEqual(output)
     })
     test('input [9,9] should return [1,0,0]', () => { 
        const input = [9,9];
        const output = [1,0,0];
        expect(plusOne(input)).toEqual(output)
     })
 })