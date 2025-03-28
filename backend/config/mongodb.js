import mongoose from "mongoose";

const connectDB = () => {

  const URL = "Your_Mongo_URL"

  mongoose.connect(URL).then(() => {
    console.log("DataBase connected Successfully")
  }).catch((err) => {
    console.log('error in connection to Databse\n', err)
  })

};

export default connectDB;
