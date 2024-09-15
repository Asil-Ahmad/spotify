import mongoose from "mongoose";

const connectDB = async () => {
  //we need to add logic when we connected to DB we need a msg that we are connected
  mongoose.connection.on("connected", () => {
    console.log("Connection established for mongoDB");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);
  // /spotify is app name u can see the name in the database
};

export default connectDB;
