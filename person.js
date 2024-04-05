import mongoose from 'mongoose';

// Define the schema for your Person model
const personSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create the Person model
const Person = mongoose.model('Person', personSchema);

// Export the Person model
export default {
  user: Person
};
