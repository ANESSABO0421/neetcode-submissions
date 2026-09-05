class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let newArr = [];
        for (let i = 0; i < nums.length; i++) {
            newArr.push(nums[i]);
        }
        for (let j = 0; j < nums.length; j++) {
            newArr.push(nums[j]);
        }

        return newArr;
    }
}
