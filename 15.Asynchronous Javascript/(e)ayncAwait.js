// Async/Await:
// 1.register
// 2.send welcome email
// 3.login
// 4.get user data
// 5.display user data

function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register end");
            resolve();
        }, 5000);
    });
};

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Email end");
            resolve();
        }, 4000);
    });
};

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login end");
            resolve();
        }, 3000);
    });
};

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Got user data");
            resolve();
        }, 2000);
    });
};

function displayUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User Data Displayed");
            resolve();
        }, 9000);
    });
};

async function authenticate() {
    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
}

authenticate().then(() => {
    console.log("All set");
});

console.log("Other Application Works");

// Finished.

