const mergeTwoLists = require('../katas/21.merge-two-sorted-lists');

describe('mergeTwoLists', () => { 
    test('input of list1 = [1,2,4], list2 = [1,3,4] should return [1,1,2,3,4,4]', () => { 
        const list1 = [1,2,4], list2 = [1,3,4];
        const output = [1,1,2,3,4,4];
        expect(mergeTwoLists(list1, list2)).toEqual(output);
     })
 })