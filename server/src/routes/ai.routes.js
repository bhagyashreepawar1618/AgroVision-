import { Router } from "express";
import { aiChatBot, aiWeatherSuggestions } from "../controllers/ai.controllers.js";
import { verifyJwt } from "../middlewares/jwt.middleware.js";

const airouter = Router();

//secured route
airouter.route("/aichatbot").post(verifyJwt, aiChatBot);
airouter.route("/weather-suggestion").post(verifyJwt, aiWeatherSuggestions);
export default airouter;
