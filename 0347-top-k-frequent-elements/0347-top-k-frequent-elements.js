/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = new Map(); 

    for (let i = 0; i < nums.length; i++){
const num = nums[i];
        freq.set(num, (freq.get(num) ||0)+  1);
    }
    const buckets = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

for (const [num, count] of freq.entries()){
    buckets[count].push(num);
}

const result = [];

for (let count = buckets.length - 1; count >= 0; count--){
    if(buckets[count].length > 0){
        for (let j = 0; j < buckets[count].length; j++){
            result.push(buckets[count][j]);
        }
        if (result.length === k){
            return result;
        }
    }
}
    return result;
};