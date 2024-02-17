// http Module 
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Welcome To Lacal Server - 2 ....');
}); // server creat

server.listen(3194,()=>{
    console.log("Server - 2 Start At A Portr 3194");
}); 