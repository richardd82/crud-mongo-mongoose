const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/testMongo', {
            useNewUrlParser: true,
        })
        console.log('Connect to DB successfully');
    } catch (error) {
        console.log({message: error.message})           
    }
}

module.exports = connectDB;