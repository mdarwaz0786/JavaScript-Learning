// Closure Function: Function inside function.
// A closure is created when a function is defined inside another function and has access to its outer (enclosing) function's variables, even after the outer function has finished executing.
// This allows the inner function to "remember" the environment in which it was created, including all the variables and parameters in its scope chain.
function outerFunction() {
    const outerVariable = 'I am from outer function';
    function innerFunction() {
        console.log(outerVariable);
    };
    return innerFunction;
};
const closureFunc = outerFunction();
closureFunc(); // Output: "I am from outer function"

// In this example, outerFunction defines an inner function innerFunction, which has access to the outerVariable declared in its parent function's scope.
// When we call outerFunction, it returns the innerFunction, and we store it in the variable closureFunc.
// Even after outerFunction has finished executing, closureFunc retains access to outerVariable, and calling closureFunc() prints "I am from outer function".

// Finished.