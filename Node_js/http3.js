// http Module 
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Welcome To Lacal Server - 3....');
}); // server creat

server.listen(3195,()=>{
    console.log("Server - 3 Start At A Portr 3195");
}); 