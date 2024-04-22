const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
