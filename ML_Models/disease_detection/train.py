from datasets import load_dataset
from datasets import Image
from transformers import AutoImageProcessor
from transformers import AutoModelForImageClassification
from transformers import AutoConfig

train_dataset = load_dataset(
    "csv",
    data_files = "dataset/processed/train.csv"
)

validation_dataset = load_dataset(
    "csv",
    data_files = "dataset/processed/validation.csv"
)

test_dataset = load_dataset(
    "csv",
    data_files = "dataset/processed/test.csv"
)

print("Training:", len(train_dataset["train"]))
print("Validation:", len(validation_dataset["train"]))
print("Test:", len(test_dataset["train"]))

train_dataset = train_dataset.cast_column(
    "image_path",
    Image()
)
validation_dataset = validation_dataset.cast_column(
    "image_path",
    Image()
)
test_dataset = test_dataset.cast_column(
    "image_path",
    Image()
)

MODEL_NAME = "wambugu71/crop_leaf_diseases_vit"
processor = AutoImageProcessor.from_pretrained(MODEL_NAME)

#take the first image from the training dataset
# sample = train_dataset["train"][0]
# #process that image for the ViT
# processed = processor(sample["image_path"])
# print(processed) #stores pixel values

# Mapping between class names and numbers
label_names = [
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
label2id = {
    label: index
    for index, label in enumerate(label_names)
}
id2label = {
    index: label
    for index, label in enumerate(label_names)
}
print("\nLabel mapping:")
print(label2id)

config = AutoConfig.from_pretrained(MODEL_NAME)
config.num_labels = len(label_names)
config.label2id = label2id
config.id2label = id2label

model = AutoModelForImageClassification.from_pretrained(
    MODEL_NAME,
    config = config,
    ignore_mismatched_sizes=True
)

# in our dataset we have image_path, label but our model expects pixel_values and labels[0,1,2..]
def transform(example): #example means one row from our dataset
    images = example["image_path"] #take image from the row 
    labels = example["label"]
    inputs = processor(images = images) #convert image into pixel values
    inputs["labels"] = [label2id[label] for label in labels] #now we r adding labels also to our inputs
    return inputs

train_dataset = train_dataset["train"].with_transform(transform) #For every example that comes out of train_dataset, use my transform() function to prepare it
validation_dataset = validation_dataset["train"].with_transform(transform)
test_dataset = test_dataset["train"].with_transform(transform)

sample = train_dataset[0]
print(sample)
print("\nTransformed sample:")
print(sample.keys())
print("Label: ", sample["labels"])
print("Pixel values shape:", sample["pixel_values"].shape)