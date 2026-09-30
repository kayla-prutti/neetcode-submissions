class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const brackets = {
            ")" : "(",
            "]" : "[",
            "}" : "{"
        }

        for (let char of s){
            // add the open bracket
            if(char === "(" || char === "[" || char === "{"){
                stack.push(char);
            }
            else{
                // if it not open, check key-value if it match
                const lastOpen = stack.pop();
                // if not match, return false
                if (lastOpen !== brackets[char]){
                    return false;
                }
            }
        }
        // Valid only if no opening brackets are left
        return stack.length === 0
    }
}
