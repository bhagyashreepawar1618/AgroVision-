import prisma from "../lib/prisma.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import uploadOnCloudinary from "../middlewares/cloudinaryUpload.middleware.js";
import hashPassword from "../middlewares/passHash.middleware.js";
import sendRegisterEmail from "../middlewares/registerMail.middleware.js";

const registerUser = asyncHandler(async (req, res) => {
  //take input
  const { username, fullname, password, email } = req.body;

  //validation
  if (!username || !fullname || !password || !email) {
    throw new ApiError(400, "All Feilds are required");
  }

  //check ifn user already exists
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        { email: email },
        {
          username: username,
        },
      ],
    },
  });

  if (existingUser) {
    console.log("User already exists..!!");
    throw new ApiError(400, "User already Exists");
  }

  //   upload file on cloudinary
  // then store that link in db

  console.log("pp=", req.file);
  const profilePictureLocalpath = req.file?.path;

  //validation for profile picture
  if (!profilePictureLocalpath) {
    console.log("Profile Picture not recieved");
    throw new ApiError(500, "Profile picture local path missing");
  }

  //upload it on cloudinary and store cloudinary url in db
  const profilePicture = await uploadOnCloudinary(profilePictureLocalpath);

  if (!profilePicture) {
    throw new ApiError(500, "Profile picture upload failed");
  }
  //hash password
  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      fullname,
      username,
      email,
      password: hashedPassword,
      profile: profilePicture?.url,
    },
    select: {
      id: true,
      username: true,
      email: true,
      profile: true,
      fullname: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) {
    console.log("user registartion failed");
    throw new ApiError(500, "Registration failed");
  }

  //if user is created send mail
  await sendRegisterEmail(email, fullname);

  return res.status(201).json(new ApiResponse(201, user, "User is registered successfully..!!!"));
});

export default registerUser;
