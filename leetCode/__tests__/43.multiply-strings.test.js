const multiply = require('../katas/43.multiply-strings');

describe('multiply', () => { 
    it('input of num1 = "2", num2 = "3", should return "6" - You must not use any built-in BigInteger library or convert the inputs to integer directly.', () => { 
        const num1 = "2", num2 = "3";
        const output = "6";
        expect(multiply(num1,num2)).toBe(output);
     })
    it('input of num1 = "123", num2 = "456", should return "56088"', () => { 
        const num1 = "123", num2 = "456";
        const output = "56088";
        expect(multiply(num1,num2)).toBe(output);
     })
 })