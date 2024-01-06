/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
   const newValue1 = await promise1
   const newValue2 = await promise2
   
    return newValue1 + newValue2  
};

new Promise(resolve => setTimeout(() => resolve(), 20))
new Promise(resolve => setTimeout(() => resolve(), 60))

 addTwoPromises(Promise.resolve(7), Promise.resolve(10))
    .then(console.log); // 4
 

    //had to remember that async + await tag along together like arm + hammer
    // you can store your awaited responses separately, then perform operations with those values
    //you can create new instances of promises with a built in JavaScript Promise constructor class. This class takes a function called the executor function which has two parameters (resolve and reject). Resolve gives you the value of the promise and reject does not but gives you a reason
    //you can use .then and .catch as methods on the object to handle the values of the Promise