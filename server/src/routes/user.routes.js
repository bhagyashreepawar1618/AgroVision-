import { Router } from "express";
import { getUserProfile, LoginUser, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/jwt.middleware.js";

const router = Router();

router.route("/register").post(upload.single("profile"), registerUser);
router.route("/login").post(LoginUser);
router.route("/profile").get(verifyJwt, getUserProfile);

export default router;
