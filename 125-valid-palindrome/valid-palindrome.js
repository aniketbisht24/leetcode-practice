/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let result = true;

    const trimmedString  = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()


    for(let i=0, j=trimmedString.length -1; i<trimmedString.length/2; i++, j--){
        if(trimmedString[i] !== trimmedString[j]){
            result = false
            break

        }
    }

    return result
    
};