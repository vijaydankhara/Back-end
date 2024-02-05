// 1. Write a JS function that reverse a 15438 number.  
// const reverce =[1,5,4,3,8];
// reverce.sort;
// console.log(reverce.reverse());   // this is output 83451

///////////////////////////////



// 2. Write a JS function that returns a passed string with letters in alphabetical order. ==> 'webmaster'
// function arr(str)
// {
// return str.split('').sort().join('')
// }
// console.log(arr("webmaster"));



/////////////////////////////////////////////////////
// 3. Write a JS function that accepts a string as a parameter and converts the first letter
//    of each word of the string in upper case. ==> 'the quick brown fox'

// function fristlatercap(str)
// {
// let data = str.split(' ');  
// for (let i = 0; i < data.length; i++)
// {
//     data[i] = data[i][0].toUpperCase()+data[i].substring(1);  
// }
// let fristlater = data.join(' ');
// return fristlater;
// }

// const enterstring = 'the quick brown fox';
// const output = fristlatercap(enterstring);
// console.log(output);

///////////////////////////////////////////////////////////
// 4.
// function findLongestWord(str) {
//     let words = str.split(' ');
//     let longestWord = '';

//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }

//     return longestWord;
//   }
//   let sentence = 'Web Development Tutorial';
//   let longest = findLongestWord(sentence);
//   console.log(longest); // Output: 'Development'


//////////////////////////////////////////
// 5. Write a JavaScript function that checks whether a number is perfect().

function pernum(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number) {
        console.log("Number is ====> ", +number);
        console.log("This Is A Perfect Number");
    } else {
        console.log("Number is ====> ", +number);
        console.log("This Is A Not Perfect Number");
    }
}
let number = Number(prompt("enter value"))
pernum(number);


