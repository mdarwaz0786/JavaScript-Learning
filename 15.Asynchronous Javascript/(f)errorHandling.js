// Error Handling:
// 1.register
// 2.send welcome email
// 3.login
// 4.get user data
// 5.display user data

function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register end");
            resolve("Success");
        }, 5000);
    });
};

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // return reject("Error while email sending");
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
    try {
        const message = await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
        console.log(message);
    } catch (err) {
        console.log(err);
        throw new Error();
    }
}

authenticate().then(() => {
    console.log("All set");
}).catch((error) => {
    console.log(error);
});

console.log("Other Application Works");

// Finished.

