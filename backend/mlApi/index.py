from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()
model = joblib.load("model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

class Input(BaseModel):
    text: str

@app.post("/predict")
def predict(input: Input):
    X = vectorizer.transform([input.text])
    prediction = model.predict(X)[0]
    return {"prediction": prediction}
