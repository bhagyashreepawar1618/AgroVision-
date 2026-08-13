from inference import load_model, predict

if __name__ == "__main__":
    processor, model = load_model()
    
    image_path = "test_images/test_leaf2.png"
    result = predict(image_path, processor, model)
    
    print("Predicted class:", result)