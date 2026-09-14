class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        for(let i=0;i<nums.length;i++){
            let temp=nums[i]
            for(let j=i+1;j<nums.length;j++){
                if(nums[i]>nums[j]){
                    temp=nums[i]
                    nums[i]=nums[j]
                    nums[j]=temp
                }
            }
        }
        return nums
    }
}
