class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let characterCount = {};
        for (let char of s) {
            if (characterCount[char]) {
                characterCount[char] = characterCount[char] + 1;
            } else {
                characterCount[char] = 1;
            }
        }

        for (let char of t) {
            if (characterCount[char] >= 1) {
                characterCount[char] = characterCount[char] - 1;
            } else {
                return false;
            }
        }

        for (let char in characterCount) {
            if (characterCount[char] !== 0) {
                return false;
            }
        }

        return true;
    }
}
