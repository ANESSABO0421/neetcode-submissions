class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let output = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                output.push(nums[i]);
            }
        }

        for (let i = 0; i < output.length; i++) {
            nums[i] = output[i];
        }

        return output.length
    }
}
