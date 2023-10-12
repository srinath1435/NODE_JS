import bcrypt from 'bcrypt'
let user={
    userName:"rahul",
    password:'iloveindia',
    cc:'4444555566667777',
    cvv:'666'
}

let salt= bcrypt.genSaltSync(10)
let nor= bcrypt.hashSync(user.password,salt)

console.log(salt)
console.log(nor)