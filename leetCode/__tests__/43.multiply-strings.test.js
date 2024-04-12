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
     it('input of num1 = "123456789", num2 = "987654321", should return "121932631112635269"', () => { 
        const num1 = "123456789", num2 = "987654321";
        const output = "121932631112635269";
        expect(multiply(num1,num2)).toBe(output);
     })
     it('input of num1 = "498828660196", num2 = "840477629533", should return "419254329864656431168468"', () => { 
        const num1 = "498828660196", num2 = "840477629533";
        const output = "419254329864656431168468";
        expect(multiply(num1,num2)).toBe(output);
     })
     it('input of num1 = "0", num2 = "52", should return "0"', () => { 
        const num1 = "0", num2 = "52";
        const output = "0";
        expect(multiply(num1,num2)).toBe(output);
     })
     it('input of num1 = "9333852702227987", num2 = "85731737104263", should return "800207406037324579815815608581"', () => { 
        const num1 = "9333852702227987", num2 = "85731737104263";
        const output = "800207406037324579815815608581";
        expect(multiply(num1,num2)).toBe(output);
     })
     it('input of num1 = "96423702883453279", num2 = "72156405165936898", should return "6957587772858372748255887645188542"', () => { 
        const num1 = "96423702883453279", num2 = "72156405165936898";
        const output = "6957587772858372748255887645188542";
        expect(multiply(num1,num2)).toBe(output);
     })
 })

