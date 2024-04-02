import mongoose from "mongoose";
import schema from "./person.js";

async function main() {
  // console.log("connected successfully");
  const connection = await mongoose.connect("mongodb://dbOwner:password@13.201.218.99:27017/dev-sachin")
  if (connection) {
    console.log("Database is connected successfully..")
  } else {
    console.log("Database is not connected")
  }
}

const user = new schema.personModel({name:"Nisha",age:23})
user.save().then(()=>{console.log("User saved");})

main()