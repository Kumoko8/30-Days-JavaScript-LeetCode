
var createHelloWorld = function() {
    const args = "Hello World";

    return function () {
        
      return args;
    }
}
const f = createHelloWorld();
f();
