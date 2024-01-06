var expect = function(val) {
    const throwError = (error) => {throw new Error (error)}
    return {
        toBe: function (expectedValue){
            if(val === expectedValue) {
                return true 
            }else {
                return throwError('Not Equal')
            }
        },
        notToBe:  function (expectedValue){
            if(val !== expectedValue) {
                return true
            } else {
                return throwError("Equal")
            }
        }
    }
}