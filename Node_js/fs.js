const fs = require("fs");
const { add,product}=require("./basic.js");
const { log } = require("console");
// fs.open('abc.txt',(err, data)=>{
//     if(err){
//         console.log('failed !!! file is not open ');
//     }
//     else{
//         console.log('file is open sucessfully');
//     }
// })

// fs.openSync('abc.txt');
// console.log('file open sucessfully');

//////////////////////////////////////////
// read method 

// fs.readFile('abc.txt','utf8',(err,data)=>{
//     if(err)
//     console.log("Failde to read file");
// else
// console.log(data);
// });


// let data = fs.readFileSync('abc.txt','utf8');
// console.log(data);


///////////////////////////////////
//write mode

