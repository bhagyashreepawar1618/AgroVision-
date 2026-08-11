import bcrypt from "bcrypt";
import ApiError from "../utils/ApiError.js";
import prisma from "../lib/prisma.js";

export const hashpassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("You are in hash pass");

  if (!hashedPassword) {
    console.log("Password is not hashed");
    throw new ApiError(500, "Something went wrong while hashing the password");
  }

  return hashedPassword;
};

export const checkPassword = async (username, email, password) => {
  //first find the encrypted password from database

  console.log("You are in check password");
  console.log("user name =", username, password);
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        {
          username: username,
        },
        {
          email: email,
        },
      ],
    },
  });

  const isPassCorrect = await bcrypt.compare(password, user.password);

  return isPassCorrect;
};
