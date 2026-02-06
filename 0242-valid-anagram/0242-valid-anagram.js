/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false;
    }
    const counts = new Map();
for (let i = 0; i < s.length; i ++){
    const ch = s[i];
    counts.set(ch, (counts.get(ch) || 0)+ 1);
}
for (let i = 0; i < t.length; i++){
    const ch = t[i];
    if (!counts.has(ch)){
        return false;
    }
    const newCount = counts.get(ch) -1;
    if (newCount === 0){
        counts.delete(ch);
    }else{
        counts.set(ch, newCount);
    }
    
}

return counts.size === 0;


};