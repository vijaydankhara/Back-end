// Javascript setTimeout()

// Display a Text Once After 3 Second

{
    // // program to display a text using setTimeout method
    // function greet() {
    //     console.log('Hello world');
    // }
    // // greet();
    // setTimeout(greet, 2000);
    // console.log('This message is shown first');
    // console.log('1 Today to much Rain...');

    // // the setTimeout() method calls the greet() function after 2000 milliseconds (2 second).

    // let x = setInterval(greet, 2000);
    // clearInterval(x);
}

// The setTimeout() method returns the interval id. 

{
    // // program to display a text using setTimeout method
    // function greet() {
    //     console.log('Hello world');
    // }

    // let intervalId = setTimeout(greet, 3000);
    // console.log('Id: ' + intervalId);   
    // clearInterval(intervalId);
    // console.log('Clear Interval function stop to setTimeOut function');
}

// Display Time Every 3 Second

{
    // // program to display time every 3 seconds
    // function showTime() {

    //     // return new date and time
    //     let dateTime= new Date();

    //     // returns the current local time
    //     let time = dateTime.toLocaleTimeString();

    //     console.log(time)

    //     // display the time after 3 seconds
    //     setTimeout(showTime, 3000);
    // }

    // // calling the function
    // showTime();
}

////////////////////////////////////////////

// The above program displays the time every 3 seconds.

// The setTimeout() method calls the function only once after the time interval (here 3 seconds).

// JavaScript clearTimeout()

// The syntax of clearTimeout() method is
{
    // clearTimeout(intervalID);
}

///////////////////////////////////////////////////

// Use clearTimeout() Method

{
    // // program to stop the setTimeout() method

    // let count = 0;

    // // function creation
    // function increaseCount(){

    //     // increasing the count by 1
    //     count += 1;
    //     console.log(count)
    // }

    // let id = setTimeout(increaseCount, 3000);

    // clearTimeout
    // clearTimeout(id); 
    // console.log('setTimeout is stopped.');
}



////////////////////////////////////////////////////


{
    // setTimeout(function, milliseconds, parameter1, ....paramenterN);
}

// When you pass additional parameters to the setTimeout() method, these parameters (parameter1, parameter2, etc.) will be passed to the specified function.

{
    // // program to display a name
    // function greet(name, lastName) {
    //     console.log('Hello' + ' ' + name + ' ' + lastName);
    // }

    // // passing argument to setTimeout
    // setTimeout(greet, 5000, 'John', 'Doe');
}

/////////////////////////////////////////////////////////


// JavaScript CallBack Function

// Program with setTimeout()

{
    // //  program that shows the delay in execution

    // function greet() {
    //     console.log('Hello world');
    // }

    // function sayName(name) {
    //     console.log('Hello' + ' ' + name);
    // }

    // // calling the function
    // setTimeout(greet, 2000);
    // sayName('John');
}


// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected

///////////////////////////////////////////////////


// Create a Promise

// To create a promise object, we use the Promise() constructor.
{
    // let promise = new Promise(function(resolve, reject){
    //     //do something
    // });

}


// Program with a Promise

{
    // const count = false;

    // let countValue = new Promise(function (resolve, reject) {
    //     if (count) {
    //         resolve("There is a count value.");
    //     } else {
    //         reject("There is no count value");
    //     }
    // });

    // console.log(countValue);

    // countValue.then((result)=>console.log(result)).catch((err)=>console.log(err));
}

//////////////////////////////////////////////////////////////////


// JavaScript Promise Chaining

{
    // promiseObject.then(onFulfilled, onRejected);
}

// Chaining the Promise with then()

{  
    // // returns a promise

    // let countValue = new Promise(function (resolve, reject) {
    //     resolve("Promise resolved");
    //     // reject("Promise reject");
    // });
    
    // // // executes when promise is resolved successfully
    
    // countValue
    //     .then(function successValue(result) {
    //     console.log(result);
    //     })
    
    //     .then(function successValue1() {
    //     console.log("You can call multiple functions this way.");
    //     })
    //     .then(()=>{
    //         console.log('Hello Wolrd');
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     });

}

///////////////////////////////////////////////////////////

// JavaScript catch() method


{
    // // returns a promise
    // let countValue = new Promise(function (resolve, reject) {
    //     reject('Promise rejected'); 
    // });
    
    // // executes when promise is resolved successfully
    // countValue.then(
    //     function successValue(result) {
    //         console.log(result);
    //     },
    // )
    
    // // executes if there is an error
    // .catch(
    //     function errorValue(result) {
    //         console.log(result);
    //     }
    // );
}



/////////////////////////////////////////////////////////////

// JavaScript finally() method

{
   
    // // returns a promise
    // let countValue = new Promise(function (resolve, reject) {
    //     // could be resolved or rejected   
    //     // resolve("Promise resolved");
    //     reject("Promise reject"); 
    // });

    // // // // add other blocks of code
    // countValue
    // .then(result=>console.log(result))
    // .catch((err)=>console.log(err))
    // .finally(
    //     function greet() {
    //         console.log('This code is executed.');
    //     }
    // );
}


/////////////////////////////////////////////////////////////////////////

    // callback function

    // function greet(n){
    //     console.log("Total is: ",n);
    // }

    // function sum(a,b,myCallback){
    //     let total = a + b;
    //     myCallback(total);
    // }
    // sum(10,50,greet);

