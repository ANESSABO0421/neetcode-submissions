class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let output = [];
        for (let i = 0; i < nums.length; i++) {
            output.push(nums[i]);
        }
        for (let i = 0; i < nums.length; i++) {
            output.push(nums[i]);
        }
        return output;
    }
}
