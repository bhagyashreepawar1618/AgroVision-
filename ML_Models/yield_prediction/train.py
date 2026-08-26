import pandas as pd
import numpy as np
import joblib
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

df = pd.read_csv("data/processed/cleaned_yield_data.csv")

X = df[["Crop", "Season", "State", "Annual_Rainfall", "Fertilizer_per_hectare", "Pesticide_per_hectare"]]
y = df["Yield"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size = 0.2, random_state = 42
)

num_features = X.select_dtypes(exclude = "str").columns
cat_features = X.select_dtypes(include = "str").columns

preprocessor = ColumnTransformer(
    [
        ("StandardScaler", StandardScaler(), num_features),
        ("OneHotEncoder", OneHotEncoder(handle_unknown="ignore"), cat_features)
    ]
)

X_train_transformed = preprocessor.fit_transform(X_train)
X_test_transformed = preprocessor.transform(X_test)
print(X_train_transformed.shape, X_test_transformed.shape)

model = RandomForestRegressor(random_state=42)
model.fit(X_train_transformed, y_train)
y_train_pred = model.predict(X_train_transformed)
y_test_pred = model.predict(X_test_transformed)

def evaluate(true, predicted):
    mae = mean_absolute_error(true, predicted)
    rmse = np.sqrt(mean_squared_error(true, predicted))
    r2 = r2_score(true, predicted)
    return mae, rmse, r2

train_mae, train_rmse, train_r2 = evaluate(y_train, y_train_pred)
test_mae, test_rmse, test_r2 = evaluate(y_test, y_test_pred)

print("Training set:")
print(f"  MAE: {train_mae:.4f}, RMSE: {train_rmse:.4f}, R2: {train_r2:.4f}")
print("Test set:")
print(f"  MAE: {test_mae:.4f}, RMSE: {test_rmse:.4f}, R2: {test_r2:.4f}")