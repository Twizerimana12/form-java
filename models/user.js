//module.exports= mongoose.model('user',userSchema);

 const mongoose= require("mongoose");
 const userSchema=mongoose.Schema({
   

    firstname:{
        type:String,
        require:true,
        },
    lastname:{
            type:String,
            required:true,
        },
    email:{
           type:String,
           unique:true,
           required:true,
        },
    password:{
            type:String,
        },
       
    }

);
const User = mongoose.model('User',userSchema);

module.exports= User;