/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasRun = false;
	return function(...args){
        if(!hasRun) {
            const result = fn(...args)
            hasRun = true
            return result
        } else {

        }
        
    }
    
};
let fn = (a, b, c) => (a+b+c)
let onceFn = once(fn)
//takes in a function that combines the parameters and returns a function with the same output except the next time it is called it returns undefined

//would I use next? No, set a boolean value as your conditional!

//and this is only for sum case, I need to take the specific definitions out to take in any function with parameters just the hardcoded sum

//ok so I got it to return the sum, but how do I get it to never run again...
const result = onceFn(1,2,3); // 6
const result2 = onceFn(2,3,6);
const result3 = onceFn(4,5,7);



// returns undefined without calling fn
 
console.log(result, result2, result3);