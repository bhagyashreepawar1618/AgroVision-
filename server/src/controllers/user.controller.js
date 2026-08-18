import prisma from "../lib/prisma.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import uploadOnCloudinary from "../middlewares/cloudinaryUpload.middleware.js";
import { hashpassword } from "../middlewares/bcrypt.middleware.js";
import sendRegisterEmail from "../middlewares/registerMail.middleware.js";
import { checkPassword } from "../middlewares/bcrypt.middleware.js";
import { generateAccessToken } from "../middlewares/jwt.middleware.js";

export const registerUser = asyncHandler(async (req, res) => {
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
  const hashedPassword = await hashpassword(password);

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

export const LoginUser = asyncHandler(async (req, res) => {
  //take username and password from user
  console.log("You are in login user controlller");

  const { username, password, email } = req.body;

  //validation
  if (!(username || email) || !password) {
    throw new ApiError(400, "Username/Email and password are required");
  }

  //check if user is already registered or not
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

  //if user not found
  if (!existingUser) {
    throw new ApiError(400, "User is not registered yet");
  }

  //if user is found check if password is correct or not
  const isPasswordcorrect = await checkPassword(username, email, password);

  console.log("is pass correct=", isPasswordcorrect);

  //if pass word is wrong throw an error
  if (!isPasswordcorrect) {
    throw new ApiError(400, "Password is in correct");
  }

  //if password is correct send the jwt tokens
  const accessToken = await generateAccessToken(username, email);

  //if access token is not received throw an err
  if (!accessToken) {
    throw new ApiError(500, "Error occured while generating access token");
  }

  console.log("access token is =", accessToken);

  return res
    .status(200)
    .json(new ApiResponse(200, { existingUser, accessToken }, "User logged in successfully"));
});

//controller for secured route
export const getUserProfile = asyncHandler(async (req, res) => {
  console.log("You are in user fetching phase");
  const user = await prisma.user.findFirst({
    where: {
      id: req.user.id,
    },
  });

  console.log("user is=", user);
  return res.status(200).json(new ApiResponse(200, user, "User profile fetched successfully..!!"));
});

//controller to update password
export const updatePassword = asyncHandler(async (req, res) => {
  //take new password
  console.log("You are in update password", req.body);
  const { oldPassword, newPassword } = req.body;

  console.log(oldPassword, newPassword);

  if (!oldPassword && !newPassword) {
    throw new ApiError(400, "Password is required");
  }

  //check if old password is correct
  console.log("username=", req.user);
  const ispasscorrect = await checkPassword(req.user.username, req.user.email, oldPassword);

  //if password is wrong
  if (ispasscorrect == false) {
    throw new ApiError(400, "Password is Incorrect");
  }

  //if password is correct update new password after hashing it
  const hashedPass = await hashpassword(newPassword);
  const updatedUser = await prisma.user.update({
    where: {
      id: req.user.id,
    },
    data: {
      password: hashedPass,
    },
  });

  console.log("new updated user is=", updatedUser);

  return res.status(200).json(new ApiResponse(400, updatedUser, "Password updated successfully"));
});

export const getAllUsers = asyncHandler(async (req, res) => {
  const allUsers = await prisma.user.findMany();

  console.log("all users are=", allUsers);
});
