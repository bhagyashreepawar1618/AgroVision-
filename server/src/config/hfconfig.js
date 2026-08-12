import { InferenceClient } from "@huggingface/inference";

export const hf = new InferenceClient(process.env.HUGGING_FACE_ACCESSTOKEN);
