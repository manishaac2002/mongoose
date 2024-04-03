import mongoose from "mongoose";
import schema from "./person.js";

async function main() {
  const connection = await mongoose.connect("mongodb://dbOwner:password@13.201.218.99:27017/dev-sachin")
  if (connection) {
    console.log("Database is connected successfully..")
    //read the query  
    const user = await schema.personModel.findOne({name:"Nisha"})
    console.log(user);
  } else {
    console.log("Database is not connected")
  }
}

//save the user
const user = new schema.personModel({name:"Nisha",age:23})
user.save().then(()=>{console.log("User saved")})

main()