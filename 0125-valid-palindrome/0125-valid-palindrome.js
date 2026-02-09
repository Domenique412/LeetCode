/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length -1;

    const isAlphanum = (ch) => {
        return /^[a-z0-9]$/i.test(ch);
    }

    while(left < right) {
        while (left < right && !isAlphanum(s[left])){
            left++;
        }
         while (left < right && !isAlphanum(s[right])){
            right--;
        }

        const leftCh = s[left].toLowerCase();
        const rightCh = s[right].toLowerCase();

        if (leftCh !== rightCh){
            return false;
        }
        left++;
        right--;
    }
    return true;
    
};