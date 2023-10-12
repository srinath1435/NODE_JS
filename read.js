const fs = require('fs')
//read file synchoronus
let filehandiling =fs.readFileSync("test.txt",'utf-8')
console.log(filehandiling)
// let filehandiling =fs.readFileSync("test.txt")
// console.log(filehandiling.toString());

// write a file synchoronus 
fs.writeFileSync("test1.txt",filehandiling)
console.log("writen succesfully")


//read file asychoronus
fs.readFile("test.txt",'utf-8',(err,data)=>{
    if(err) throw err
    console.log("ksudvhcakhgsd")
})


// //write a file asychoronus
fs.readFile("test.txt","utf-8",(err,da)=>{
    if(err) throw err
    fs.writeFile("test2.txt",da,(err)=>{
        if(err) throw err
        console.log("succeful")
    })
})