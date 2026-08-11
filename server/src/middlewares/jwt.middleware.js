import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

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

export const verifyJwt = async () => {};
