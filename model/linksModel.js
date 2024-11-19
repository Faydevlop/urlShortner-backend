const mongoose = require('mongoose');

// Define the Link schema
const LinkSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, // References the user who created the link
      required: true,
      ref: 'User', // Referencing the User model
    },
    normalLink: {
      type: String,
      required: true, // Ensure the original link is provided
      trim: true,
    },
    shorterLink: {
      type: String,
      required: true, // Ensure the shortened link is generated
      unique: true,   // Shortened links should be unique
      trim: true,
    },
  },
  { timestamps: true } // Automatically add `createdAt` and `updatedAt`
);

// Create and export the model
const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;
