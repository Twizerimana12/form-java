const express = require("express");
const db=require("./database/db");
const userRoute=require("./router/userRouter");
//const app =require ("app");

const app =express()

app.use(express.json())
app.use("/user",userRoute)

const PORT=5000||3000;
db()

app.listen(PORT,()=>{
    console.log("server is running...")
})