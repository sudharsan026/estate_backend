import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      //two users can have same password so we don't have unique here
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User",userSchema);

export default User;