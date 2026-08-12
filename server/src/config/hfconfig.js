import { InferenceClient } from "@huggingface/inference";

const hf = new InferenceClient(process.env.HUGGING_FACE_ACCESSTOKEN);

export const hf;
