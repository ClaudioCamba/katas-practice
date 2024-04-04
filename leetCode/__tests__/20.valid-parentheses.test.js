const isValid = require('../katas/20.valid-parentheses');

describe('isvalid', () => { 
    test('input "()" should return true, because it contains opening and closing brackets', () => { 
        const input = "()";
        expect(isValid(input)).toBe(true);
     })
     test('input "()[]{}" should return true, because it contains opening and closing brackets', () => { 
        const input = "()[]{}";
        expect(isValid(input)).toBe(true);
     })
     test('input "(]" should return false, because it does not contain correct closing brackets', () => { 
        const input = "(]";
        expect(isValid(input)).toBe(false);
     })
     test('input "([)]" should return false, because it does not contain correct closing brackets', () => { 
        const input = "([)]";
        expect(isValid(input)).toBe(false);
     })
     test('input "([}}])" should return false, because it does not contain correct closing brackets', () => { 
        const input = "([}}])";
        expect(isValid(input)).toBe(false);
     })
     test('input "))" should return false, because it does not contain correct closing brackets', () => { 
        const input = "))";
        expect(isValid(input)).toBe(false);
     })
 })