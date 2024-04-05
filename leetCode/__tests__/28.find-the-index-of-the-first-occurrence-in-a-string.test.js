const strStr = require('../katas/28.find-the-index-of-the-first-occurrence-in-a-string');

describe('strStr', () => { 
    test('inputs "sadbutsad" and "sad" should return 0 because the first instance of "sad" is at the beginning', () => { 
        const haystack = "sadbutsad", needle = "sad";
        expect(strStr(haystack,needle)).toBe(0);
     })
     test('inputs "leetcode" and "leeto" should return -1 because it doesn\'t exist within the haystack', () => { 
        const haystack = "leetcode", needle = "leeto";
        expect(strStr(haystack,needle)).toBe(-1);
     })
 })