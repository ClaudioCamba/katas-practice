const isPalindrome = require('../katas/9.palindrome-number');

describe('isPalindrome', () => { 
    test('input of 121 should return true - 121 reads as 121 in reverse', () => { 
        const input = 121;
        const output = true;
        expect(isPalindrome(input)).toEqual(output);
     })
     test('input of -121 should return false - -121 does not reads as 121- in reverse', () => { 
        const input = -121;
        const output = false;
        expect(isPalindrome(input)).toEqual(output);
     })
     test('input of 10 should return true - 10 reads as 01 in reverse', () => { 
        const input = 10;
        const output = false;
        expect(isPalindrome(input)).toEqual(output);
     })
     test('input of 1231321 should return true - 1231321 reads as 1231321 in reverse', () => { 
        const input = 1231321;
        const output = true;
        expect(isPalindrome(input)).toEqual(output);
     })
 })