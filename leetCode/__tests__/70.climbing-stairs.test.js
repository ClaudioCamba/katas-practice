const climbStairs = require('../katas/70.climbing-stairs');

describe('climbStairs', () => { 
    test('inputs of 2 should return 2 because there are 2 ways to add up using 1 or 2', () => { 
        const stairs = 2, result = 2;
        expect(climbStairs(stairs)).toEqual(result);
     });
     test('inputs of 4 should return 5 because there are 2 ways to add up using 1 or 2', () => { 
        const stairs = 4, result = 5;
        expect(climbStairs(stairs)).toEqual(result);
     });
 });

 