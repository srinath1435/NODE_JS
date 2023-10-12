import bcrypt from 'bcrypt'
import { genSaltSync } from 'bcrypt'
let user={
    name:"veldurai",
    email:'veldurai@gmail.com',
    mobile:'9591619196',
    password:'dontmarry'
}

let salt =bcrypt.genSaltSync(10)

let umobile  = bcrypt.hashSync(user.mobile,salt)
let upassword = bcrypt.hashSync(user.password,salt)

user={
    ...user,mobile:umobile,password:upassword
}

let sree=bcrypt.compareSync("dontmarry",user.password)
if(sree){
    console.log("Login success")
}
else{
    console.log("Login failed plz try again! Otherwise rest ur password")
}