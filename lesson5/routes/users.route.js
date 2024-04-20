import { Router } from "express";
import { registerValidator } from "../middleware/users.middleware.js";
import { registerController } from "../controllers/users.controller.js";

const userRoute = Router();

userRoute.post("/register", registerValidator, registerController);

export default userRoute;
