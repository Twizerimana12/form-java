const express= require( "express")
const userController=require  ("../controller/userController")
const validate= require ("../midleware/validate")
const{userSignupSchema, userLoginSchema}= require("../validation/userValidation")
//const bodyParser=require ("body-parser")

const userRoute =express()
//userRoute.use(bodyParser)

userRoute.post("/create", validate(userSignupSchema),userController.create)
userRoute.delete("/delete/:_id",userController.delete)
userRoute.get("/all",userController.getAll)
userRoute.get("/get/:_id",userController.get)
userRoute.put("/update/:_id",userController.update)
userRoute.post("/login", validate(userLoginSchema),userController.login)






module.exports = userRoute




