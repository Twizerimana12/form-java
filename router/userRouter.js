const Express= require( "express")
const userController=require  ("../controller/userController")

const userRoute =Express()

userRoute.post("/create", userController.create)

module.exports = userRoute



