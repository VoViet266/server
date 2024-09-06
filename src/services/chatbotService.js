import Chatbot from "../model/Chatbots";
const createChatbot = async (chatbot) => {
  try {
    return await Chatbot.create(chatbot);
  } catch (error) {
    throw new Error(error);
  }
};
export default { createChatbot };
