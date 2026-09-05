class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let common = strs[0]; //first string
        for (let i = 1; i < strs.length; i++) {
            let newCommon = "";
            for (let j = 0; j < common.length; j++) {
                if (common[j] == strs[i][j]) {
                    newCommon += common[j];
                } else {
                    break;
                }
            }
            common = newCommon;
        }
        return common;
    }
}
