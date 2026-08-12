import { Router } from "express";
import { aiChatBot } from "../controllers/ai.controllers.js";

const airouter = Router();

airouter.route("/aichatbot").post(aiChatBot);

export default airouter;
