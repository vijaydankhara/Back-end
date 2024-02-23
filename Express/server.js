/***************** DAY 1 ********************/
const express = require("express");
const server = express();     // Server Create
// const PORT = 1143;

server.get("/",(req,res)=>{
    res.end("Welcom  to  Express.js");
});

server.get("/user",(req,res)=>{
    res.end("Welcome to user");
});

server.get("/product",(req,res)=>{
    res.end("Welcome to Product");
});


server.listen(1143,()=>{
    console.log(`Server  is running at http://localhost:1143`);
});