// Callback Function:
// callback function is a function that is passed as an argument to another function and is executed after the completion of that function's operation.
// The primary purpose of callback functions is to allow asynchronous operations and to control the flow of code execution in scenarios where the order of execution is not sequential.
// Callback functions are commonly used in scenarios such as handling events, making AJAX requests, working with timers, and dealing with asynchronous tasks like reading files or making database queries.

function doSomethingAsync(callback) {
    setTimeout(() => {
        console.log("Async operation completed");
        callback();
    }, 1000);
};
function callbackFunction() {
    console.log("Callback function executed");
};
doSomethingAsync(callbackFunction);

// In this example, the doSomethingAsync function simulates an asynchronous operation using setTimeout. It takes a callback function (callback) as an argument. After the async operation (in this case, a one-second delay), it calls the callback function.
// When you call doSomethingAsync(callbackFunction), it will log "Async operation completed" after one second, and then execute the callbackFunction, logging "Callback function executed".

// Finished.