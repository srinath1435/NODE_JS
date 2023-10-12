// import os from 'os'  ES6 syntax
const os = require('os');
let totalspace = os.totalmem();
let freespace = os.freemem();
console.log(`totalmemory: ${totalspace}`);
console.log(`freeupmemory: ${freespace}`);
console.log(os.platform()) // operating system

// console.log(os.availableParallelism())

// console.log(os.tmpdir()) // present location

// console.log(os.freemem()) // show the free of memory 

// console.log(os.release())

// console.log(os.arch())  // its show which bit ur device


