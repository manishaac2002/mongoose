// const connection = await mongoose.connect("mongodb://dbOwner:password@13.201.218.99:27017/dev-sachin")


import mongoose from 'mongoose';
import Mock from 'mock.js';
import User from './person.js';

// Connect to MongoDB using Mongoose
await mongoose.connect('mongodb://writer:pwd@13.201.218.99:27017/dev-manisha');

// Generate mock user data
const generateMockUserData = () => {
  return Mock.mock({
    'users|10': [{
      'name': '@name',
      'email': '@email',
      'age|18-80': 1
    }]
  }).users;
};

// Seed the database with mock data
const seedDatabase = async () => {
  try {
    // Generate mock data
    const mockUserData = generateMockUserData();

    // Insert mock data into the MongoDB database
    await User.insertMany(mockUserData);

    console.log('Mock data inserted successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Disconnect from the database after seeding (optional)
    await mongoose.disconnect();
  }
};

// Call the seedDatabase function to start seeding
seedDatabase();
