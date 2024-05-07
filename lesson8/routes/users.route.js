import { Router } from "express";
import {
  loginValidator,
  registerValidator,
} from "../middleware/users.middleware.js";
import {
  getMeController,
  loginController,
  registerController,
} from "../controllers/users.controller.js";
import { authenticationValidator } from "../middleware/auth.middleware.js";

const userRoute = Router();

// VIẾT api get me
// Viết middleware kiểm tra xem người dùng đã được xác thực chưa
userRoute.post("/register", registerValidator, registerController);
userRoute.post("/login", loginValidator, loginController);
/**
 * Method: GET
 * Route: /me
 * Header: access_token
 */
userRoute.get("/me/:id", authenticationValidator, getMeController);

export default userRoute;
