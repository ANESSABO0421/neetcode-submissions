class Solution {
    getConcatenation(nums) {
        let newArr = [];
        for (let i = 0; i < nums.length; i++) {
            newArr.push(nums[i]);
        }
        for (let i = 0; i < nums.length; i++) {
            newArr.push(nums[i]);
        }
        return newArr;
    }
}
