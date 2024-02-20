const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');
const data = fs.readFileSync('./hello.json','utf-8');
// const data = require('./hello.json');
const port = 1143;
// console.log(data);
const app = http.createServer();



// app.on('request',(req,res)=>{
//     // console.log(req.url);
//     res.end(data);
//     switch(req.url){
// case '/':
//     res.setHeader("Content-Type","text/html");
//     res.write('<h1 style="color:blue">Welcome To NODEJS</h1>');
//     res.end();
//     break;

//     case '/product':
//     res.setHeader("Content-Type","applicatoin/json");
//     res.end(data);
//     break;

//     case '/user':
//     res.setHeader("Content-Type","text/html");
//     res.write('<h1 style="color:green>Welcome To Usr Page</h1>');
//     res.end();
//     break;
//     default :
//     res.setHeader("Content-Type","text/html");
//     res.write('<h1 style="color:red>Eroor!!! Page Not Found</h1>');
//     res.end();
//     break;
//     }
// });

app.on('request', (req, res) => {
    // console.log(req.url);
    let items = req.url.split('/');
    console.log(items);
    
    if (items[1] === '') {
    res.setHeader('Content-type', 'text/html');
    res.write('<h3 style="color:blue">Welcome to NODEJS</h3>');
    res.end();
    }
    else if (items[1] === 'user') {
    res.setHeader('Content-type', 'text/html');
    res.write('<h3 style="color:green">Welcome to User Page</h3>');
    res.end();
    } 
    else if (items[1] === 'product') { 
    res.setHeader('Content-type', 'application/json');
    if(items.length === 3) {
        let id = Number(items[2]);
        let product = data [id-1];
        res.end(JSON.stringify(product));
    }else
    res.end(JSON.stringify(data));
}else{
    res.setHeader('Content-type', 'text/html');
    res.write('<h3 style="color:red">Page Not Found </h3>');
    res.end();
    }

    })



app.listen(port,() => {
    console.log('Server Start At Port http://localhost:1143');
});