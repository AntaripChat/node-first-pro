const http = require("http");

const fs = require("fs");
const PORT = 4000;

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');

let server = http.createServer((req,res)=>{
    if(req.url === '/'){
        return res.end(home);
    }else if(req.url === '/about'){
        return res.end(about);
    }else{
        res.writeHead(404);
        res.end('<h1>404 Page is not found</h1>')
    }
})

server.listen(PORT,()=>{
    console.log('Working');
});