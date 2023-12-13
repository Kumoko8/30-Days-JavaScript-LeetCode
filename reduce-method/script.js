//Reducer accumluates values through an array
//for example if the array is nums = [2, 4, 6, 8] the reducer, starting at 0(accum) would take the first value (curr) and add it to 0
//0 + 2
//2 + 4
//6 + 6
//12 + 8 and the final value would be 20
//basically it gives a total of all the values in an array

var reduce = function (nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i])
    }
    return val;

}
const nums = [1,2,3,4, 5]

const result = reduce(nums, function(accum, curr) {
    return accum + curr;
}, 0);

console.log(result)

//Here I needed to define my parameters and create a loop to iterate through the array, then define a function as an argument for the first function