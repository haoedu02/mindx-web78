import { USER_MESSAGE } from "../constants/messages.js";
import userService from "../services/users.service.js";
import { errorBoundary } from "../utils/handler.js";

export const registerController = errorBoundary(async (req, res, next) => {
  const { email, password } = req.body;
  await userService.register(email, password);
  return res.status(201).json({
    message: "Register Successfully",
  });
});

export const loginController = async (req, res, next) => {
  const userId = req.user._id;
  const access_token = await userService.login(userId);
  return res.json({
    message: "Login Successfully",
    access_token,
  });
};

export const getMeController = errorBoundary(async (req, res, next) => {
  const { id } = req.params;
  const result = await userService.getMe(id);
  return res.json({
    message: USER_MESSAGE.GET_ME_SUCCESSFULLY,
    result,
  });
});
