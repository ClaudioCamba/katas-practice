const isSameTree = require('../katas/100.same-tree');

describe('isSameTree', () => { 
    test('Input: p = [1,2,3], q = [1,2,3], should return true because both arrays match', () => { 
        const p = [1,2,3], q = [1,2,3];
        const output = true;
        expect(isSameTree(p,q)).toBe(output);
     })
    test('Input: p = [1,2], q = [1,null,2], should return false because both arrays don\'t match', () => { 
        const p = [1,2], q = [1,null,2];
        const output = false;
        expect(isSameTree(p,q)).toBe(output);
     })
    test('Input: p = [1,2,1], q = [1,1,2], should return false because both arrays don\'t match', () => { 
        const p = [1,2,1], q = [1,1,2];
        const output = false;
        expect(isSameTree(p,q)).toBe(output);
     })
 })