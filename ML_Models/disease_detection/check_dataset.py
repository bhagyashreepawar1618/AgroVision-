from pathlib import Path

DATASET_DIR = (
    Path(__file__).resolve().parent
    / "dataset"
    / "Crop Diseases Dataset"
    / "Crop Diseases"
    / "Crop___Disease"
)

for crop_folder in DATASET_DIR.iterdir():

    if crop_folder.is_dir():

        print(f"\n{crop_folder.name}")

        for class_folder in crop_folder.iterdir():

            if class_folder.is_dir():

                images = list(class_folder.glob("*")) #Give me everything inside this disease folder.

                print(
                    f"    {class_folder.name}: "
                    f"{len(images)} images"
                )