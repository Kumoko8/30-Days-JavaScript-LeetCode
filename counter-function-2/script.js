//the function create counter will return an objec with three functions, one to increment, one to decrement and one to reset the intial integer passed

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const original = init
    return {
      increment: function () {
        return init++
      },
      reset: function () {
       
        return init = original
      },
      decrement: function () {
        return init--
      },
      
    }
      
};


 const counter = createCounter(5)
//  counter.increment(); // 6
//  counter.reset(); // 5
//  counter.decrement(); // 4

 console.log(counter.increment());
 console.log(counter.reset());
 console.log(counter.decrement());
 

