const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique:true },
  resume: { type: String, required: true }
});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

// Export the model for use in other modules
module.exports = User;
