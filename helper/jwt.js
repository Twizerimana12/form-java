const jwt =require("jsonwebtoken")
const dotenv= require("dotenv")


dotenv.config()

const sign=(data)=> jwt.sign ({data},process.env.SECRETY_KEY,{expiresIn:'3h'})
const verify=(data)=> jwt.verify (data,process.env.SECRETY_KEY)


module.exports={sign,verify}


