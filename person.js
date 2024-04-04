import mongoose from "mongoose";

//schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
})

const personModel = mongoose.model("user", personSchema)

export default { personModel }