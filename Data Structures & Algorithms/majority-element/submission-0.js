class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = {};
        let majority = 0;
        let maxCount = 0;
        for (let char of nums) {
            if (count[char]) {
                count[char] = count[char] + 1;
            } else {
                count[char] = 1;
            }
        }

        for (let char in count) {
            if (count[char] > maxCount) {
                maxCount = count[char];
                majority = char;
            } else {
                continue;
            }
        }

        return majority;
    }
}
