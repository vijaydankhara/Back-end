
// Async 

// the async keyword is used before the function to represent that the function is asynchronous.

{
    // async function example

    // async function f() {
    //     console.log('Async function called.');
    //     return Promise.resolve(1);
    // }

    // f(); 
}




// this function returns a promise, you can use the chaining method then()

{
    // async function f() {
    //     console.log('Async function.');
    //     return Promise.resolve("Good morning");
    //     // return Promise.reject("reject promise");
    // }

    // f().then(function(result) {
    //     console.log(result)
    // }).catch((err)=>console.log(err));

}
//////////////////////////////////////////////////////////////

//  await 


// The syntax to use await is

{
    // let result = await promise;
}

// The use of await pauses the async function until the promise returns a result (resolve or reject) value. 

{
    // a promise
    // let promise = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //     resolve('Promise resolved')}, 4000); 
    // });

    // // // async function
    // async function asyncFunc() {

    //     // wait until the promise resolves 
    //     let result = await promise; 

    //     console.log(result);
    //     console.log('hello');
    // }

    // // calling the async function
    // asyncFunc();

}


{
    let promise1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Promise 1 resolved')
        }, 2000);
    });
    let promise2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Promise 2 resolved')
        }, 3000);
    });
    let promise3 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Promise 3 resolved')
        }, 4000);
    });

    async function asyncFunc() {
        let result1 = await promise1;
        console.log(result1);
        
        let result2 = await promise2;
        console.log(result2);

        let result3 = await promise3;
        console.log(result3);
    }

    asyncFunc();

}

// Benefits of Using async Function

// The code is more readable than using a callback or a promise.
// Error handling is simpler.
// Debugging is easier.
