import mongoose from 'mongoose';
import seeder from './person.js'

// should add env 
// Connect to MongoDB using Mongoose
await mongoose.connect('mongodb://writer:pwd@13.201.218.99:27017/dev-manisha');

// Define your data to seed
const dataToSeed = [
  { name: 'user 1', email: 'user1email.com', age: 12 },
  { name: 'user 2', email: 'user2email.com', age: 23 },
  // Add more data as needed
];

// Seed function
async function seedDatabase() {
  try {
    // Loop through the data and create documents using Mongoose model
    for (let item of dataToSeed) {
      await seeder.user.create(item);
    }
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
}

async function clearData() {
  try {
    // Remove all documents from the collection
    await seeder.user.deleteMany({});
    console.log('Data cleared successfully.');
  } catch (error) {
    console.error('Error clearing data:', error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
}
// Call the seed function
// seedDatabase();// if seed the data return the function 

//clear data
clearData() //to clear the data return this function
