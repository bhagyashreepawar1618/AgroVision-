import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";
import ApiError from "../utils/ApiError.js";

export const generateAccessToken = async (username, email) => {
  //access the user of which token has to be created
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

  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
export const verifyJwt = async (req, _, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    console.log("decoded token =", decodedToken);

    req.user = decodedToken;

    next();
  } catch (e) {
    throw new ApiError(401, "Invalid access token");
  }
};
