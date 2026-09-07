class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};
        for (let i = 0; i < strs.length; i++) {
            let currentWord = strs[i];
            let count = {};
            for (let j = 0; j < currentWord.length; j++) {
                let char = currentWord[j];
                if (count[char]) {
                    count[char] = count[char] + 1;
                } else {
                    count[char] = 1;
                }
            }

            let key = "";
            for (let code = 97; code <= 122; code++) {
                let char = String.fromCharCode(code);

                // only add to the key when the char is presnet count
                if (count[char]) {
                    key = key + char + count[char]; //c1a1t1
                }
            }

            if (groups[key]) {
                groups[key].push(currentWord);
            } else {
                groups[key] = [currentWord];
            }
        }

        let out = [];

        for (let key in groups) {
            out.push(groups[key]);
        }

        return out;
    }
}
