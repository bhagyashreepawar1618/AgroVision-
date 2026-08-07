import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localfilepath) => {
  try {
    if (!localfilepath) return null;

    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    console.log("file is uploaded successfully", response.url);
    fs.unlinkSync(localfilepath); //remove the locally saved temporary file as the upload operation got failed
    return response;
  } catch (err) {
    fs.unlinkSync(localfilepath); //remove locally saved temporary file as the upload operation got failed
    console.log("err while uploading on cloudinary", err);
    return null;
  }
};

export default uploadOnCloudinary;
