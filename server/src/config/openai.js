import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.OPEN_AI_API_KEY,
});

export default openai;
