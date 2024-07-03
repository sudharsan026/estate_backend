  //to do imports like this we have to declare type:module in package json
import express from "express";
const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
