import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || " http://localhost:5173",
  })
);

app.use(
  express.json({
    limit: "10mb",
  })
);

//config for express to understand browser encoder
app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

//to store images and files in public
app.use(express.static("public"));

import userRouter from "./routes/user.routes.js";
import aiRouter from "./routes/ai.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/ai", aiRouter);

export default app;
