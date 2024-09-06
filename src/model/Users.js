// Import mongoose
import mongoose from 'mongoose';
const { Schema } = mongoose;
// Create a schema for User
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  age: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Create a model for User based on the schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
