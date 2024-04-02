const lengthOfLastWord = require('../katas/58.length-of-last-word');

describe('lengthOfLastWord', () => { 
    test('input of "Hello World" should return length of last word (World) (5)', () => { 
        const string = "Hello World";
        const output = 5;
        expect(lengthOfLastWord(string)).toBe(output);
     });
     test('input of "   fly me   to   the moon  " should return length of last word (moon) (4)', () => { 
        const string = "   fly me   to   the moon  ";
        const output = 4;
        expect(lengthOfLastWord(string)).toBe(output);
     });
     test('input of "luffy is still joyboy" should return length of last word (joyboy) (6)', () => { 
        const string = "luffy is still joyboy";
        const output = 6;
        expect(lengthOfLastWord(string)).toBe(output);
     });
 })