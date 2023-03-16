const express = require("express");
const db=require("./database/db")
const userRoute=require("./router/userRouter")

const app =express()

app.use("/user",userRoute)

const PORT=5000||3000n;
db()

app.listen(PORT,()=>{
    console.log("server is running...")
})