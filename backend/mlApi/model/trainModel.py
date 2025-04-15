import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import TfidfVectorizer
import pickle
import os

df = pd.read_csv("data/train.csv")
df = df.dropna(subset=["Context", "Response"])

X = df["Context"]
y = df["Response"]

vectorizer = TfidfVectorizer()
X_vect = vectorizer.fit_transform(X)

model = LogisticRegression()
model.fit(X_vect, y)

with open("model/ml_model.pkl", "wb") as f:
    pickle.dump((vectorizer, model), f)

print("Model trained and saved.")
