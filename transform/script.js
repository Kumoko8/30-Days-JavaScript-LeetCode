
var map = function(arr, fn) {
    const resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        returnArray = fn(arr[i], i) 
        resultArray.push(returnArray);       
    }
   
    
    return resultArray
};
function plusOne(n) {
    return n +1;
}
const inputArr = [1,2,3]

const result = map(inputArr, plusOne)
console.log(result);