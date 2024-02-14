const fs = require("fs");

// fs.open('abc.txt',(err, data)=>{
//     if(err){
//         console.log('failed !!! file is not open ');
//     }
//     else{
//         console.log('file is open sucessfully');
//     }
// })

fs.openSync('abc.txt');
console.log('file open sucessfully');