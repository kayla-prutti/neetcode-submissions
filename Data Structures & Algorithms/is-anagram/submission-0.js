class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // 1. check if length are the same
        if (s.length !== t.length) {
            return false
        }

        const countMap = {}

        // 2. loop first string and count up
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            countMap[char] = (countMap[char] || 0) + 1
        }

        // 3. Loop through second string and count down
        for (let i = 0; i < t.length; i++) {
            let char = t[i];
            // If the character doesn't exist in our map, or its   count is already 0,
            // then string 't' has an extra or unexpected character.
            if (!countMap[char]) {
                return false
            }
            countMap[char]--
        }

        // Step 4: If we successfully subtracted everything down to 0, it's a match!
        return true;
    }
}

