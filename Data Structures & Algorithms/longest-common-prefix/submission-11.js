class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let startStr = strs[0];
        for (let i = 1; i < strs.length; i++) {
            let commonPrefix = "";
            for (let j = 0; j < startStr.length; j++) {
                if (startStr[j] === strs[i][j]) {
                    commonPrefix += startStr[j];
                } else {
                    break;
                }
            }

            startStr = commonPrefix;
        }
        return startStr;
    }
}
