class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for (let word of strs) {
            encodedString += word.length + "#" + word;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // 5#Hello5#World
        let i = 0;
        let output = [];

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            let length = Number(str.slice(i, j)); //j=1 and length=5

            j++; //j=2 and str[j]="H"

            let word = str.slice(j, j + length); //2,7
            output.push(word);

            i = j + length;
        }
        return output;
    }
}
