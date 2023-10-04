/*
Given a string s, find the length of the longest substring without repeating characters

Example 1
- Input: s = "abcabcbb"
- Output: 3
- Explanation: The answer is "abc", with the length of 3.

Example 2
- Input: s = "bbbbb"
- Output: 1
- Explanation: The answer is "b", with the length of 1.

*/

//brute force

function lengthOfLongestSubstr(s) {
    if (s === "" || typeof s !== 'string') {
        return 0;
    }
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let substr = "";
        for (let j = i; j < s.length; j++) {
            if (substr.indexOf(s[j]) === -1) {
                substr += s[j];
                maxLength = Math.max(maxLength, substr.length);
            } else {
                break;
            }
        }
    }
    return maxLength;
}
//time complexity: O(n^3)

