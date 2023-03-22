const express= require( "express")
const userController=require  ("../controller/userController")
//const bodyParser=require ("body-parser")

const userRoute =express()
//userRoute.use(bodyParser)

userRoute.post("/create", userController.create)
userRoute.delete("/delete/:_id",userController.delete)
userRoute.get("/all",userController.getAll)
userRoute.get("/get/:_id",userController.get)
userRoute.put("/update/:_id",userController.update)
module.exports = userRoute



