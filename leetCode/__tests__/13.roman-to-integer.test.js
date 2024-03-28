const romanToInt = require('../katas/13.roman-to-integer');

describe('romanToInt', () => { 
    test('input of "III" should return 3 as III = 3', () => { 
        const input = "III";
        const output = 3;
        expect(romanToInt(input)).toEqual(output);
     })
    test('input of "LVIII" should return 58 as L = 50, V= 5, III = 3', () => { 
        const input = "LVIII";
        const output = 58;
        expect(romanToInt(input)).toEqual(output);
     })
    test('input of "MCMXCIV" should return 1994 as M = 1000, CM = 900, XC = 90 and IV = 4', () => { 
        const input = "MCMXCIV";
        const output = 1994;
        expect(romanToInt(input)).toEqual(output);
     })
 })