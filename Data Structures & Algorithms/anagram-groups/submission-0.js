class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group={}
        for(let i=0;i<strs.length;i++){
            let currentword=strs[i]
            let count={}
            
            
            for(let j=0;j<currentword.length;j++){
                let char=currentword[j]
                if(count[char]){
                    count[char]=count[char]+1
                }else{
                    count[char]=1
                }
            }

            let key = ""

            for (let code = 97; code <= 122; code++) {
                let char = String.fromCharCode(code)

                if (count[char]) {
                    key = key + char + count[char]
                }
            }

            if(group[key]){
                group[key].push(currentword)
            }else{
                group[key]=[currentword]
            }

        }

        let out=[]

        for(let key in group){
            out.push(group[key])
        }

        return out

    }
}
