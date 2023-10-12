const fs=require('fs')
const http=require('http')
const path=require('path')

http.createServer((req,res)=>{
    let url =req.url
    console.log(url)
   if (url==="/index.html" || "/index"){
    fs.readFile(path.join(__dirname,"index.html"),'utf-8',(err,data)=>{
        if(err) throw err
        res.end(data)

    })
   }
   if (url==="/employee.html" || "/emp"){
    fs.readFile(path.join(__dirname,"employee.html"),'utf-8',(err,data)=>{
        if(err) throw err
        res.end(data)
    })
   }
   if(url==="/contactus.html" || "/contact"){
    fs.readFile(path.join(__dirname,"contactus.html"),'utf-8',(err,data)=>{
        if(err) throw err
        res.end(data)
    })
   }
   if (url==="/about.html" || "/about"){
    fs.readFile(path.join(__dirname,"about.html"),'utf-8',(err,data)=>{
        if(err) throw err
        res.end(data)
    })
   }
   if (url==="/services.html" || "/help"){
    fs.readFile(path.join(__dirname,"services.html"),'utf-8',(err,data)=>{
        if(err) throw err
        res.end(data)
    })
   }
}
).listen(8085,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log("its Done")
})