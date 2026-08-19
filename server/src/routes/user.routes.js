import { Router } from "express";
import {
  getAllUsers,
  getUserProfile,
  LoginUser,
  registerUser,
  updatePassword,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/jwt.middleware.js";

const router = Router();

router.route("/register").post(upload.single("profile"), registerUser);
router.route("/login").post(LoginUser);
router.route("/profile").get(verifyJwt, getUserProfile);
router.route("/update-password").post(verifyJwt, updatePassword);
router.route("/get-all-users").get(verifyJwt, getAllUsers);
export default router;
