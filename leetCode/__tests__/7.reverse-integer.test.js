const reverse = require('../katas/7.reverse-integer');

describe('reverse - Given a signed 32-bit integer x, return x with its digits reversed', () => { 
    test('Input 123 should return 321', () => { 
        const input = 123;
        const output = 321;
        expect(reverse(input)).toBe(output);
     })
    test('Input -123 should return 321', () => { 
        const input = -123;
        const output = -321;
        expect(reverse(input)).toBe(output);
     })
    test('Input 120 should return 21', () => { 
        const input = 120;
        const output = 21;
        expect(reverse(input)).toBe(output);
     })
     test('Input 1534236469 should return 0', () => { 
        const input = 1534236469;
        const output = 0;
        expect(reverse(input)).toBe(output);
     })
     test('Input -2147483412 should return -2143847412', () => { 
        const input = -2147483412;
        const output = -2143847412;
        expect(reverse(input)).toBe(output);
     })
     test('Input 563847412 should return 214748365', () => { 
        const input = 563847412;
        const output = 214748365;
        expect(reverse(input)).toBe(output);
     })
     test('Input 1463847412 should return 2147483641', () => { 
        const input = 1463847412;
        const output = 2147483641;
        expect(reverse(input)).toBe(output);
     })
     test('Input -1463847412 should return -2147483641', () => { 
        const input = -1463847412;
        const output = -2147483641;
        expect(reverse(input)).toBe(output);
     })
 })
