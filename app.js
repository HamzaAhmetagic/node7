const http = require("http");
const fs = require("fs");
const server = http.createServer(function(req,res){
    console.log(req.url);
    if (req.url == "/") {
        res.writeHead(200,{"Content-Type":"text/html"});
        let indexFile = fs.readFileSync("index.html","UTF-8");
        // console.log(indexFile)
        res.write(indexFile);
    res.end();
    } else if(req.url == "/main.css"){
        res.writeHead(200,{"Content-Type":"text/css"});
        let cssFile = fs.readFileSync("main.css","UTF-8");
        // console.log(indexFile)
        res.write(cssFile);
    res.end();
    }
    
});
server.listen(3000,function (){
    console.log('Moj server slusa na 3000');
});