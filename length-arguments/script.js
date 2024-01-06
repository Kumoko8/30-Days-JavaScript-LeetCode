/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {

const parameterArray = [...args]
const result = parameterArray.length
	return result
};


const result = argumentsLength(1, 2, 3, 4, 5, 6
    ); // 3

console.log(result)


//I want the function to count the length of the arguments passed in
//if the parameters were an array it would be parameterArray.length

//I needed to store these args into an array in order for me to access the length of the array, so I store it in the parameterArray variable

//Since the parameterArray.length is what I want in the end that is what will be my return value from the function. I could return the length or store it first and then return it

//Actually I tested it and storing the length into a variable first gave a much better runtime and memory usage

//then I want to have a way of ouputting the result of the function call so I store the call in a variable and then console.log that output

//Notice if I remove the return statement of the function, I get undefined

//see journal page 174 for lesson on time/space complexity