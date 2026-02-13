/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let out = "";
    for ( let i = 0; i < strs.length; i++){
        const s = strs[i];
        out += s.length + "#" + s;
    }
    return out;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
const res = []; 
let i = 0;

while(i  < s.length){
    let j = i;

    while (s[j] !== "#"){
        j++;
    }

    const len = Number(s.slice(i, j));
    const start = j+1;
    const end = start +len;
res.push(s.slices(start, end));
i = end;
}

return res;

};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */