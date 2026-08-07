import bcrypt from "bcrypt";
import ApiError from "../utils/ApiError.js";

const hashpassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("You are in hash pass");

  if (!hashedPassword) {
    console.log("Password is not hashed");
    throw new ApiError(500, "Something went wrong while hashing the password");
  }

  return hashedPassword;
};

export default hashpassword;
