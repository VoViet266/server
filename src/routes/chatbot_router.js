import express from "express";
import ChatbotController from "../controllers/chatbotController";
const router = express.Router();

router.post("/create_chatbot", ChatbotController.createChatbot);

export default router;
