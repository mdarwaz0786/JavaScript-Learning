// Callback Hell:
// Callback hell, also known as the "pyramid of doom" refers to a situation in asynchronous JavaScript programming where multiple nested callbacks create code that's difficult to read, understand, and maintain. 
// This occurs when there are numerous asynchronous operations or tasks that depend on each other, resulting in deeply nested callback functions.

// The issues with callback hell include:
// Readability: Understanding and maintaining deeply nested code becomes increasingly difficult.
// Error Handling: Error handling can be cumbersome and prone to mistakes in deeply nested callbacks.
// Debugging: Dentifying and rectifying issues within nested callbacks can be challenging.

// To alleviate callback hell, different solutions have been introduced:
// Promises: A more structured way to handle asynchronous code. Promises allow for chaining and improved error handling, making code more readable and easier to manage.
// Async/Await: Introduced in ES2017, async/await is a syntactic sugar built on top of promises, providing a more synchronous-looking structure to asynchronous code, making it easier to write and understand.

function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is cheese", cheese);
        callback(cheese);
    }, 2000);
};

function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "🎁";
        console.log("here is the dough", dough);
        callback(dough);
    }, 2000);
}

function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("here is the pizza", pizza);
        callback(pizza);
    }, 2000);
}


// Callback Hell/pyramid of doom:
getCheese((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("got my pizza", pizza);
        });
    });
});

// pizza <- dough <- cheese

// Finished.