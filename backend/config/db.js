// Import required libraries
const mongoose = require('mongoose');

// Database connection URL
const DB_URL = process.env.DB_URL || 'mongodb://localhost/taskmaster';

// Connect to MongoDB
const DB = async () => {
    try{
        await mongoose.connect(process.env.DB_URL);
    } catch (error) {
        console.log(error);
    }
    
}

// Export the database connection
module.exports = DB;