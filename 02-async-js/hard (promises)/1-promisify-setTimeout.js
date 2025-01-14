/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved");
        }, n * 1000);

    })
    return pr;
}

let pr = wait(5);
pr.then((value) => {
    console.log(value);
})