//to do imports like this we have to declare type:module in package json
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to Mongodb");
  })
  .catch((error) => console.log(error));
const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
