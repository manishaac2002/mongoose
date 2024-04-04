// clear.js

import mongoose from 'mongoose';
import User from './models/user.js';

// Connect to MongoDB using Mongoose
await mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Clear all data from the User collection
const clearData = async () => {
  try {
    await User.deleteMany({});
    console.log('All data cleared successfully.');
  } catch (error) {
    console.error('Error clearing data:', error);
  } finally {
    // Disconnect from the database after clearing (optional)
    await mongoose.disconnect();
  }
};

// Call the clearData function to start clearing data
clearData();
