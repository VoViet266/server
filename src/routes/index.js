import User_Router from './user_router.js';
import Chatbot_Router from './chatbot_router.js';
import express from 'express';
const router = express.Router();

router.use('/user', User_Router);
router.use('/chatbot', Chatbot_Router);
export default router;