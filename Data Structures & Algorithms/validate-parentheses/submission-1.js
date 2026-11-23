class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let outArr = [];
        for (let ele of s) {
            if (ele == "[" || ele == "(" || ele == "{") {
                outArr.push(ele);
            } else if (ele == "]" || ele == ")" || ele == "}") {
                let last = outArr.pop();
                if (
                    (ele == "]" && last !== "[") ||
                    (ele == ")" && last !== "(") ||
                    (ele == "}" && last !== "{")
                ) {
                    return false;
                }
            }
        }

        

         return outArr.length === 0;
    }
}
