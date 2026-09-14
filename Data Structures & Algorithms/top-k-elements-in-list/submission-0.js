class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequent = {};
        let newArr = [];
        for (let char of nums) {
            if (frequent[char]) {
                frequent[char] += 1;
            } else {
                frequent[char] = 1;
            }
        }

        for (let i = 0; i < k; i++) {
            let maxElement = 0;
            let Element;

            for (let char in frequent) {
                if (frequent[char] > maxElement) {
                    maxElement = frequent[char];
                    Element = Number(char);
                }
            }
            newArr.push(Element);
            frequent[Element] = 0;
        }

        return newArr;
    }
}
