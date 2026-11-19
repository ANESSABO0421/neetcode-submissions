class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const count = new Map();
        let maxCount = 0;
        let maxElement;
        for (let ele of nums) {
            if (count[ele]) {
                count[ele] = count[ele] + 1;
            } else {
                count[ele] = 1;
            }

            if (count[ele] > maxCount) {
                maxCount = count[ele];
                maxElement = Number(ele);
            }
        }

        return maxElement;
    }
}
