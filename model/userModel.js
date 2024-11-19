const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, // Ensure this field exists
      trim: true,     // Remove extra spaces
    },
    email: {
      type: String,
      required: true, // Ensure this field exists
      unique: true,   // Gmail addresses should be unique
      trim: true,
      lowercase: true, // Convert to lowercase
    },
    password: {
      type: String,
      required: true, // Ensure this field exists
    },
  },
  { timestamps: true } // Automatically add `createdAt` and `updatedAt`
);

// Create and export the model
const User = mongoose.model('User', UserSchema);

module.exports = User;
