// http Module 
const http = require('http');
const fs = require("fs");
// const data = fs.readFileSync('./hello.json','utf-8')
const data = fs.readFileSync('./abc.txt','utf-8')

const server = http.createServer((req, res) => {
    // res.setHeader('Dummy','Dummy Value');
    // res.setHeader('content-type','text/html');
    // res.setHeader('content-type','application/json');
    // res.end('Welcome To Lacal Server....');
    res.write('<h1 style="color:red">What is JavaScript ?</h1>')
}); // server creat

server.on('request',(req,res)=>{
    res.end(data)
})

server.listen(3193,()=>{
    console.log("Server Start At A Portr 3193");
}); 