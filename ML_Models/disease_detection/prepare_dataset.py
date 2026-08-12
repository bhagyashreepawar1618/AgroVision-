from pathlib import Path
import pandas as pd
from sklearn.model_selection import train_test_split


# Location of our raw dataset
BASE_DIR = Path(__file__).resolve().parent

DATASET_DIR = (
    BASE_DIR
    / "dataset"
    / "Crop Diseases Dataset"
    / "Crop Diseases"
    / "Crop___Disease"
)

# Where we will save the split information
OUTPUT_DIR = BASE_DIR / "dataset" / "processed"

# These are the 12 classes we are going to train our ViT on
CLASSES = [
    "Corn___Common_Rust",
    "Corn___Gray_Leaf_Spot",
    "Corn___Healthy",

    "Potato___Early_Blight",
    "Potato___Healthy",
    "Potato___Late_Blight",

    "Rice___Brown_Spot",
    "Rice___Healthy",
    "Rice___Leaf_Blast",

    "Wheat___Brown_Rust",
    "Wheat___Healthy",
    "Wheat___Yellow_Rust",
]

# Store image path + corresponding label here
data = []

# Go through every class
for class_name in CLASSES:
    # The crop name is the part before "___"
    crop_name = class_name.split("___")[0]
    class_folder = DATASET_DIR / crop_name / class_name
    # Find all image files inside this class folder
    for image_path in class_folder.iterdir():
        if image_path.suffix.lower() in [".jpg", ".jpeg", ".png", ".webp"]:
            data.append({
                "image_path": str(image_path),
                "label": class_name
            })

# Convert our list into a DataFrame
df = pd.DataFrame(data)

print("Total images:", len(df))
print("Total classes:", df["label"].nunique())

# First: 80% training, 20% temporary
train_df, temp_df = train_test_split(
    df,
    test_size=0.20,
    stratify=df["label"],
    random_state=42
)

# Then divide that 20% into:
# 10% validation + 10% test
validation_df, test_df = train_test_split(
    temp_df,
    test_size=0.50,
    stratify=temp_df["label"],
    random_state=42
)

# Create processed folder
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Save the three CSV files
train_df.to_csv(
    OUTPUT_DIR / "train.csv",
    index=False
)

validation_df.to_csv(
    OUTPUT_DIR / "validation.csv",
    index=False
)

test_df.to_csv(
    OUTPUT_DIR / "test.csv",
    index=False
)

print("\nDataset split completed!")
print("\nTraining:", len(train_df))
print("Validation:", len(validation_df))
print("Test:", len(test_df))

print("\nTraining distribution:")
print(train_df["label"].value_counts().sort_index())
print("\nValidation distribution:")
print(validation_df["label"].value_counts().sort_index())
print("\nTest distribution:")
print(test_df["label"].value_counts().sort_index())