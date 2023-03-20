const http = require("http");
const fs = require("fs");
const port = 3000;
http.createServer((req,res)=> {
    if(req.url === '/') {
        fs.readFile('index.html',(err,data)=>{
            if(err) {
                console.log(err)
                res.writeHead(404)
                res.write("Your request file not found in server");
                res.end();
            }else {
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        })
    } else if (req.url === '/style.css') {
        fs.readFile("style.css",(err,data)=>{
            if(err) {
                console.log(err);
                res.writeHead(404);
                res.write("Your request file is doesn't exist in server");
            } else {
                res.writeHead(200,{'Content-Type': 'text/css'})
                res.write(data);
                res.end();
            }
        })
    } else if (req.url === '/script.js') {
        fs.readFile('script.js',(err,data)=>{
            if(err) {
                console.log(err);
                res.writeHead(404);
                res.write("Your request is doesn't exist in server");
            } else {
                res.writeHead(200,{'Content-Type': 'text/js'});
                res.write(data);
                res.end();
            }
        })
    }
}).listen(port,()=>{
    console.log("server start with "+ port)
})