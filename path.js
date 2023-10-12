const fs = require('fs')
const ps =require('path')

jsoN=ps.join(__dirname,"emp.json")

fs.readFile(jsoN,'utf-8',(err,data)=>{
    if(err) throw err
    console.log(JSON.parse(data))
})