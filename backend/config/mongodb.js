import mongoose from "mongoose";

const connectDB = () => {

  const URL = "mongodb+srv://vishnu:vishnu@nurs.cirf4ii.mongodb.net/?retryWrites=true&w=majority&appName=NURS"

  mongoose.connect(URL).then(() => {
    console.log("DataBase connected Successfully")
  }).catch((err) => {
    console.log('error in connection to Databse\n', err)
  })

};

export default connectDB;
