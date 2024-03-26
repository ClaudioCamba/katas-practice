const addTwoNumbers = require('../katas/2.add-two-numbers');

describe('addTwoNumbers', () => { 
    test('inputs of [0],[0] should return [0]', () => { 
        const l1 = [0], l2 = [0];
        const output = [0]
        expect(addTwoNumbers(l1,l2)).toEqual(output);
     })
     test('inputs of l1 = [2,4,3], l2 = [5,6,4] should return [7,0,8]', () => { 
        const l1 = [2,4,3], l2 = [5,6,4];
        const output = [7,0,8]
        expect(addTwoNumbers(l1,l2)).toEqual(output);
     })
     test('inputs of l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] should return [8,9,9,9,0,0,0,1]', () => { 
        const l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9];
        const output = [8,9,9,9,0,0,0,1]
        expect(addTwoNumbers(l1,l2)).toEqual(output);
     })
 })