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

const getChatbot = async (req, res) => {
    try {
        const chatbot = await Service.getChatbot();
        res.status(200).json(chatbot);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateChatbot = async (req, res) => {
    try {
        const chatbot = req.body;
        const newChatbot = await Service.updateChatbot(chatbot);
        res.status(200).json(newChatbot);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteChatbot = async (req, res) => {
    try {
        const chatbot = req.body;
        const newChatbot = await Service.deleteChatbot(chatbot);
        res.status(200).json(newChatbot);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export default {
    createChatbot: createChatbot,
    getChatbot: getChatbot,
    updateChatbot: updateChatbot,
    deleteChatbot: deleteChatbot
    
}
