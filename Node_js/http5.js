// http Module 
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Welcome To Lacal Server - 5....');
}); // server creat

server.listen(3197,()=>{
    console.log("Server - 5 Start At A Portr 3197");
}); 