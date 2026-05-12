import { Router } from "express";
import { registerUser, LoginUser } from "../controllers/User.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(LoginUser);
export { router };
    