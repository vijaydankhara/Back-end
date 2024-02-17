// http Module 
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Welcome To Lacal Server....');
}); // server creat

server.listen(3193,()=>{
    console.log("Server Start At A Portr 3193");
}); 