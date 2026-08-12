import { Router } from "express";
import { aiChatBot } from "../controllers/ai.controllers.js";
import { verifyJwt } from "../middlewares/jwt.middleware.js";

const airouter = Router();

//secured route
airouter.route("/aichatbot").post(verifyJWT, aiChatBot);

export default airouter;
