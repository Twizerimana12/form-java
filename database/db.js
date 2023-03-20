const mongoose  = require("mongoose");
const dotenv =require ("dotenv")
//const app =require ("app")

dotenv.config()
// const url=process.env.mongodb
mongoose.set("strictQuery", false);

const db = async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017',{ useNewUrlParser: true, useUnifiedTopology: true});
    console.log("Database Connected!");
  } catch (error) {
    console.log("error",error.message);
  }
};

module.exports = db;