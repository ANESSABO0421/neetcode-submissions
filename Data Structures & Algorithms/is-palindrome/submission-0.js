class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        console.log(s)
        let output = "";
        for (let i = s.length - 1; i >= 0; i--) {
            output += s[i];
        }
        if (output === s) {
            return true;
        } else {
            return false;
        }
    }
}
