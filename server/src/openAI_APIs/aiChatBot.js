import openai from "../config/openai.js";
import asyncHandler from "../utils/asyncHandler.js";

export const askAI = asyncHandler(async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const response = await openai.responses.create({
      model: "gpt-5-mini",
      instructions: `
        You are AgroVision AI, an intelligent farming assistant.

        Help farmers with:
        - Crop management
        - Irrigation
        - Fertilizers
        - Weather-related farming decisions
        - Crop diseases
        - Soil management
        - Sustainable farming

        Give simple, practical and easy-to-understand answers.
        If a question is unrelated to farming, politely tell the user
        that you are a farming assistant.
      `,
      input: message,
    });

    res.status(200).json({
      success: true,
      reply: response.output_text,
    });
  } catch (error) {
    console.log("AI Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while communicating with AI",
    });
  }
});
