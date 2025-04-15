import sys
import pickle
import os

model_path = os.path.join(os.path.dirname(__file__), 'ml_model.pkl')
with open(model_path, 'rb') as f:
    vectorizer, model = pickle.load(f)

input_text = sys.argv[1]
X = vectorizer.transform([input_text])
prediction = model.predict(X)[0]
print(prediction)
