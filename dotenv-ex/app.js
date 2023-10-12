import http from 'http'
import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config({path:"config.env"})

let port=process.env.PORT
let host=process.env.HOST_NAME
console.log(port)
console.log(host)
http.createServer((req,resp)=>{
    if(req.url==="/index"){
        fs.readFile("views/index.html","utf-8",(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    if(req.url==="/about"){
        fs.readFile("views/about.html","utf-8",(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    if(req.url==="/contact"){
        fs.readFile("views/contactus.html","utf-8",(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    if(req.url==="/services"){
        fs.readFile("views/services.html","utf-8",(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    if(req.url==="/employee" || "/emp"){
        fs.readFile("views/employee.html","utf-8",(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
}).listen(port,host,(err)=>{
    if(err) throw err
    console.log("its done")
})