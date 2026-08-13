import joblib
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report, f1_score, recall_score, precision_score

#Load data
df = pd.read_csv('data/Fertilizer Prediction.csv')
df.rename(columns = {'Temparature': 'Temperature', 'Humidity ': 'Humidity'}, inplace = True)

X = df.drop("Fertilizer Name", axis = 1)
y = df["Fertilizer Name"]

num_features = X.select_dtypes(exclude = "object").columns
cat_features = X.select_dtypes(include = "object").columns

preprocessor = ColumnTransformer([
    ("OneHotEncoder", OneHotEncoder(), cat_features),
    ("StandardScaler", StandardScaler(), num_features)
])

X_processed = preprocessor.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(
    X_processed, y, test_size = 0.2, random_state = 42, stratify = y
)

model = RandomForestClassifier()
model.fit(X_train, y_train)
print("Test accuracy:", model.score(X_test, y_test))

# Save BOTH the model and the preprocessor
joblib.dump(model, "model.pkl")
joblib.dump(preprocessor, "preprocessor.pkl")
