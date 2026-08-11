from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model and preprocessor once, when the server starts
model = joblib.load("model.pkl")
preprocessor = joblib.load("preprocessor.pkl")

# This defines exactly what fields a request must include, and their types
class FertilizerInput(BaseModel):
    Temperature: int
    Humidity: int
    Moisture: int
    Soil_Type: str
    Crop_Type: str
    Nitrogen: int
    Potassium: int
    Phosphorous: int

@app.get("/")
def home():
    return {"message": "Fertilizer Recommendation API is running"}

@app.post("/predict-fertilizer")
def predict_fertilizer(data: FertilizerInput):
    # Convert the incoming request into the exact column names/format the model expects
    sample = pd.DataFrame([{
        "Temperature": data.Temperature,
        "Humidity": data.Humidity,
        "Moisture": data.Moisture,
        "Soil Type": data.Soil_Type,
        "Crop Type": data.Crop_Type,
        "Nitrogen": data.Nitrogen,
        "Potassium": data.Potassium,
        "Phosphorous": data.Phosphorous
    }])

    sample_processed = preprocessor.transform(sample)
    prediction = model.predict(sample_processed)

    return {"recommended_fertilizer": prediction[0]}