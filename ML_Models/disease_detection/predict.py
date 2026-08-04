from transformers import MobileNetV2ImageProcessor, MobileNetV2ForImageClassification
from PIL import Image
import torch

model_name = "linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification"
processor = MobileNetV2ImageProcessor.from_pretrained(model_name)
model = MobileNetV2ForImageClassification.from_pretrained(model_name)

image = Image.open("ML_Models\test_leaf.jpeg").convert("RGB")
inputs = processor(images=image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

predicted_idx = outputs.logits.argmax(-1).item()
print("Predicted:", model.config.id2label[predicted_idx])