class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let newCommon=strs[0]

        for(let i=1;i<strs.length;i++){
            let out=""
            for(let j=0;j<newCommon.length;j++){
                if(newCommon[j]==strs[i][j]){
                    out+=strs[i][j]
                }else{
                    break
                }
            }
            newCommon=out
        }
        return newCommon
    }
    
}
