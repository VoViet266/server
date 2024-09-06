import Service from '../services/chatbotService.js';

const createChatbot = async (req, res) => {
    try {
        const chatbot = req.body;
        const newChatbot = await Service.createChatbot(chatbot);
        console.log(newChatbot);
        res.status(201).json(newChatbot);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export default {
    createChatbot: createChatbot
}
