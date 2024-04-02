import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
})

const personModel = mongoose.model("Person", personSchema)

export default { personModel }