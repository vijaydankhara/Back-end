const http = require('http');


const server1 = http.createServer((req, res) => {
    res.end('Welcome To Instagram....');
}); // server creat

server1.listen(1111,()=>{
    console.log("Server Start At A Portr 1111");
}); 



const server2 = http.createServer((req, res) => {
    res.end('Welcome To Facebook....');
}); // server creat

server2.listen(2222,()=>{
    console.log("Server Start At A Portr 2222");
}); 



const server3 = http.createServer((req, res) => {
    res.end('Welcome To Amazon');
}); // server creat

server3.listen(3333,()=>{
    console.log("Server Start At A Portr 3333");
}); 



const server4 = http.createServer((req, res) => {
    res.end('Welcome To FlipCard');
}); // server creat

server4.listen(4444,()=>{
    console.log("Server Start At A Portr 4444");
}); 




const server5 = http.createServer((req, res) => {
    res.end('Welcome To crome');
}); // server creat

server5.listen(5555,()=>{
    console.log("Server Start At A Portr 5555");
}); 