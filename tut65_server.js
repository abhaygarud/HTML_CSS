// const http =require("http")
// const fs= require("fs")
// const fileContent = fs.readFileSync("tut23_navigation.html");
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     res.end(fileContent);

// })
// server.listen(80,'127.0.0.1',()=>{
//     console.log("listinening to port 80")
// })


const http=require('http')
const fs = require('fs')
const fileContent=fs.readFileSync('tut13.html')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.end(fileContent); 
})

server.listen(80,'127.0.0.1',()=>{
    console.log('abhay')
})