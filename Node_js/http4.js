// http Module 
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Welcome To Lacal Server - 4....');
}); // server creat

server.listen(3196,()=>{
    console.log("Server - 4 Start At A Portr 3196");
}); 