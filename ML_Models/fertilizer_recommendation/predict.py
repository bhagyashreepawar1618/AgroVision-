import pandas as pd
import joblib

#Load the saved model and preprocessor
model = joblib.load("model.pkl")
preprocessor = joblib.load("preprocessor.pkl")

sample = pd.DataFrame([{
    "Temperature": 26,
    "Humidity": 52,
    "Moisture": 38,
    "Soil Type": "Sandy",
    "Crop Type": "Maize",
    "Nitrogen": 37,
    "Potassium": 0,
    "Phosphorous": 0
}])

#Transform it the same way training data was transformed
sample_processed = preprocessor.transform(sample)
#Predict
prediction = model.predict(sample_processed)

print("Predicted Fertilizer:", prediction[0])