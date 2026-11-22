class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let resultArr=[]
        for(let i=0;i<m;i++){
            resultArr.push(nums1[i])
        }
        for(let i=0;i<n;i++){
            resultArr.push(nums2[i])
        }

        for(let i=0;i<resultArr.length;i++){
            for(let j=i+1;j<resultArr.length;j++){
                if(resultArr[i]>resultArr[j]){
                    let temp=resultArr[i]
                    resultArr[i]=resultArr[j]
                    resultArr[j]=temp
                }
            }
        }

        for(let k=0;k<resultArr.length;k++){
            nums1[k] = resultArr[k]
        }


    }
}
