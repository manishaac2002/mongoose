import mongoose from "mongoose";
// const mongooseConnection =mongoose.connect("mongodb://dbOwner:password@13.201.218.99:27017/dev-sachin")

 async function main()  {
  // console.log("connected successfully");
 const connection = await mongoose.connect("mongodb://dbOwner:password@13.201.218.99:27017/dev-sachin")
 if(connection){
  console.log("connected successfully");
 }
}

main()

// export default { mongooseConnection }