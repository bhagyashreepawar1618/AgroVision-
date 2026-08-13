from transformers import AutoImageProcessor, AutoModelForImageClassification
from PIL import Image

def load_model():
    model_id = "wambugu71/crop_leaf_diseases_vit"
    processor = AutoImageProcessor.from_pretrained(model_id)
    model = AutoModelForImageClassification.from_pretrained(model_id)
    return processor, model

def predict(image_path, processor, model):
    image = Image.open(image_path).convert("RGB")
    inputs = processor(images=image, return_tensors="pt")
    outputs = model(**inputs)
    predicted_idx = outputs.logits.argmax(-1).item()
    predicted_label = model.config.id2label[predicted_idx]
    return predicted_label