const http= require('http')
let server=http.createServer((req,res)=>{
    res.end("response! ok Good")
})
//localhost:8080
//localhost address:"127.0.0.1"
server.listen(8087,"127.5.0.6",(err)=>{
    if(err) throw err
    console.log("its ok")
})