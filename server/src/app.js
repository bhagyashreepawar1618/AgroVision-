import express from "express";
import "dotenv/config";

const app = express();

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

app.use("/api/v1/users", userRouter);

export default app;
