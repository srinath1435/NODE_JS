const http = require('http')

http.createServer((req,res)=>{
    res.write("it's Done ");
    res.end()
}).listen(8045)