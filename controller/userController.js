
const User=require( "../models/User");


class userController{
    static async create(req, res) {
        try {
            console.log(req.body)
          const { firstname, lastname,email, password } = req.body;
          
        //   const salt = await bcrypt.genSalt(10);
        //   const hashedPassword = await bcrypt.hash(password, salt)
          const user = await User.create({ firstname,lastname, email, password });
          //user.password = null;
          //const accessToken = sign({ id: user._id, username: user.username, role: 'user' })
          res.status(200).json({ message: 'User created', data: user});
        } catch (error) {
          res.status(500).json({ error: error.message });
        }


      }
      static async delete(req, res) {
        try {
            const id= req.params._id
            const user= await User.findByIdAndDelete(id)
          res.status(200).json({ message: 'User delete', data: user});
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
      static async getAll(req,res){
       
        try {
            const user =   await User.find()
            return res.status(200).json(user)
        } catch (error) {

            return res.status(500).json({error:error.message})
        }
    }
    static async get(req,res){
       
      try {
        const id= req.params._id
          const user =   await User.findById(id)
          return res.status(200).json(user)
      } catch (error) {

          return res.status(500).json({error:error.message})
      }
  }
}
module.exports = userController