import mongoose from "mongoose";
const { Schema } = mongoose;
// Create a schema for Chatbot
const chatbotSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Chatbot = mongoose.model("Chatbot", chatbotSchema);
export default Chatbot;
