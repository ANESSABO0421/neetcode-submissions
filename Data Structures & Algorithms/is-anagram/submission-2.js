class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let newObj={}
        for(let char of s){
            if(newObj[char]){
                newObj[char]=newObj[char]+1
            }else{
                newObj[char]=1
            }
        }

        for(let char of t){
            if(newObj[char]>=1){
                newObj[char]=newObj[char]-1
            }else{
                return false
            }
        }

        for(let char in newObj){
            if(newObj[char]!=0){
                return false
            }
        }

        return true
    }
}
