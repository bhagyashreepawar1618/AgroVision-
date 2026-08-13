import { aichatBot } from "../openAI_APIs/aichat.js";
import { weatherSuggestions } from "../openAI_APIs/weatherSuggestions.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const aiChatBot = asyncHandler(async (req, res) => {
  const { message } = req.body;

  console.log("user message=", message);
  const aiReply = await aichatBot(message);

  console.log("ai reply =", aiReply);

  if (!aiReply) {
    throw new ApiError(500, "Error while getting ai response");
  }

  return res.status(200).json(new ApiResponse(200, aiReply, "Ai response sent successfully.."));
});

export const aiWeatherSuggestions = asyncHandler(async (req, res) => {
  const { location, weather } = req.body;

  console.log("Weather data is =", location, weather);

  const airesponse = await weatherSuggestions(location, weather);

  console.log("Suggestion =", airesponse);

  return res
    .status(200)
    .json(new ApiResponse(200, airesponse, "Ai suggestion for weather sent successfully"));
});
