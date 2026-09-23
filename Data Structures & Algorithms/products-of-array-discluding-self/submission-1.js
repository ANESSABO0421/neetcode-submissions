class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let outputArr = [];

        let leftProd = 1;

        for (let i = 0; i < nums.length; i++) {
            outputArr[i] = leftProd;
            leftProd = leftProd * nums[i];
        }

        let rightProd = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            outputArr[i] = outputArr[i] * rightProd;
            rightProd = rightProd * nums[i];
        }

        return outputArr;
    }
}
