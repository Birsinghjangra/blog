// backend/Database/db.js

const mongoose = require('mongoose');
const url = "mongodb+srv://birsinghjangra15:UGNt6MEJdQFMVcQs@cluster0.34zk5ze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
