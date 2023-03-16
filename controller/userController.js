const User=require( "../models/user");

class userController{
    static async create(req,res){

        const { firstname,lastname, email, password } = req.body;

        const user = await User.create({ firstname, lastname,email, password });


   const newUser=await user.save() 

   res.status(200).json({message:"successfully",newUser})

    }
}
module.exports = userController