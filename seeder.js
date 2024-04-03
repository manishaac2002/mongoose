import mongoose from "mongoose";// seeder.js
import schema from "./person.js";// Import your Mongoose model

// Function to insert sample data
async function seedData() {
    try {
        await schema.personModel.create([
            { name: 'User 1', age: 23 },
            { name: 'User 2', email: 34 },
            // Add more sample data as needed
        ]);
        console.log('Data seeded successfully');
    } catch (err) {
        console.error('Error seeding data:', err);
    }
}

// Function to delete all data
async function clearData() {
    try {
        await User.deleteMany();
        console.log('Data cleared successfully');
    } catch (err) {
        console.error('Error clearing data:', err);
    }
}

// Call seeding function
seedData();

// Call clearing function (optional)
// clearData();
