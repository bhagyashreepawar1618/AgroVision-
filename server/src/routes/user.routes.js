import { Router } from "express";
import { LoginUser, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(upload.single("profile"), registerUser);
router.route("/login").post(LoginUser);

export default router;
