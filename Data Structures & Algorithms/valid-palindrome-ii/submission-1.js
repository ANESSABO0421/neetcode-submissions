class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let output=""
        let newStr=""

        for(let i=s.length-1;i>=0;i--){
            output+=s[i]
        }
        if(output==s){
            return true
        }

        for(let i=0;i<s.length;i++){
            let reverse=""
            newStr=s.slice(0,i)+s.slice(i+1)
            for(let i=newStr.length-1;i>=0;i--){
                reverse+=newStr[i]
            }
            if(newStr==reverse){
                return true
            }
            

        }
        return false
    }
}
