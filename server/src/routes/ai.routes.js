import { Router } from "express";
import { askAI } from "../openAI_APIs/aiChatBot.js";

const airouter = Router();

airouter.route("/aichatbot").post(askAI);

export default airouter;
